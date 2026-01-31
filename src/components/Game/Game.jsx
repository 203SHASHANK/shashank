import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Trophy, Play, RotateCcw, Zap, Share2, HelpCircle, Undo2, Lightbulb, RefreshCw } from 'lucide-react';

// Simple seeded RNG for Daily Puzzle
const mulberry32 = (a) => {
    return function () {
        var t = a += 0x6D2B79F5;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
}

const getDailySeed = () => {
    const today = new Date();
    // Create a unique integer from date: YYYYMMDD
    return parseInt(`${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`);
};

const Game = () => {
    const GRID_SIZE = 5;
    const TOTAL_NODES = 25;

    // Daily Config
    const dailySeed = getDailySeed();
    const dailyBestKey = `cyberPathBest_${dailySeed}`;

    // Game State
    const [gameState, setGameState] = useState('IDLE'); // IDLE, PLAYING, WON
    const [clues, setClues] = useState({}); // { cellIndex: number }
    const [userPath, setUserPath] = useState([]); // [cellIndex, ...]
    const [bestTime, setBestTime] = useState(parseFloat(localStorage.getItem(dailyBestKey)) || null);
    const [isDragging, setIsDragging] = useState(false);
    const [invalidMove, setInvalidMove] = useState(null);

    // Timer
    const [startTime, setStartTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const timerRef = useRef();

    // -- PUZZLE GENERATOR --
    const generatePuzzle = useCallback(() => {
        // Initialize seeded RNG for TODAY
        const rng = mulberry32(dailySeed);

        // --- IDENTICAL GENERATION LOGIC BUT WITH rng() INSTEAD OF Math.random() ---
        let path = [];
        const visited = new Set();

        const getNeighbors = (index) => {
            const r = Math.floor(index / GRID_SIZE);
            const c = index % GRID_SIZE;
            const neighbors = [];
            if (r > 0) neighbors.push((r - 1) * GRID_SIZE + c);
            if (r < GRID_SIZE - 1) neighbors.push((r + 1) * GRID_SIZE + c);
            if (c > 0) neighbors.push(r * GRID_SIZE + (c - 1));
            if (c < GRID_SIZE - 1) neighbors.push(r * GRID_SIZE + (c + 1));
            return neighbors.sort(() => rng() - 0.5);
        };

        const dfs = (current) => {
            visited.add(current);
            path.push(current);
            if (path.length === TOTAL_NODES) return true;
            const neighbors = getNeighbors(current);
            for (let next of neighbors) {
                if (!visited.has(next)) {
                    if (dfs(next)) return true;
                }
            }
            path.pop();
            visited.delete(current);
            return false;
        };

        let success = false;
        let attempts = 0;

        // Note: For a strictly deterministic daily puzzle, we ideally want to find the SAME valid path every time.
        // However, standard DFS with shuffled neighbors usually succeeds quickly. 
        // We iterate with the same seeded sequence, so it should produce the same result.
        while (!success && attempts < 50) {
            path = [];
            visited.clear();
            const startNode = Math.floor(rng() * TOTAL_NODES);
            if (dfs(startNode)) success = true;
            attempts++;
        }

        if (!success) {
            path = [];
            for (let i = 0; i < TOTAL_NODES; i++) path.push(i);
        }

        const newClues = {};
        if (path.length > 0) {
            newClues[path[0]] = 1;
            newClues[path[TOTAL_NODES - 1]] = TOTAL_NODES;
            const clueCount = 3 + Math.floor(rng() * 2);
            for (let i = 0; i < clueCount; i++) {
                // Ensure we don't pick start/end
                const randIdx = 2 + Math.floor(rng() * (TOTAL_NODES - 4));
                newClues[path[randIdx]] = randIdx + 1;
            }
        }

        setClues(newClues);
        setUserPath([path[0]]);
        return path;
    }, [dailySeed]);

    // -- GAME LOOP --
    useEffect(() => {
        if (gameState === 'PLAYING') {
            timerRef.current = setInterval(() => {
                setCurrentTime(Date.now() - startTime);
            }, 50);
        }
        return () => clearInterval(timerRef.current);
    }, [gameState, startTime]);

    // Global drag cleanup
    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener('mouseup', handleGlobalMouseUp);
        return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
    }, []);

    const triggerInvalid = (index) => {
        setInvalidMove(index);
        setTimeout(() => setInvalidMove(null), 300);
    };

    const [buttonState, setButtonState] = useState('idle'); // idle, animating

    // -- INTERACTION HANDLERS --
    const startGame = async () => {
        if (buttonState === 'animating') return;

        // Trigger "Crazy" Animation
        setButtonState('animating');
        await new Promise(r => setTimeout(r, 800)); // Wait for animation
        setButtonState('idle');

        setGameState('PLAYING');
        generatePuzzle(); // Regenerates the SAME puzzle for today
        setStartTime(Date.now());
        setCurrentTime(0);
    };

    const handleReset = () => {
        if (gameState !== 'PLAYING') return;
        // Reset current attempt: Keep clues, reset path to just the start node
        const startNode = Object.keys(clues).find(key => clues[key] === 1);
        if (startNode) {
            setUserPath([parseInt(startNode)]);
        }
    };

    const handleUndo = () => {
        if (gameState !== 'PLAYING' || userPath.length <= 1) return;
        setUserPath(prev => prev.slice(0, -1));
    };

    const handleNodeInteract = (index) => {
        if (gameState !== 'PLAYING') return;

        const currentHead = userPath[userPath.length - 1];
        const currentStep = userPath.length + 1;

        if (index === currentHead) return;

        if (userPath.length > 1 && index === userPath[userPath.length - 2]) {
            handleUndo();
            return;
        }

        const r1 = Math.floor(currentHead / GRID_SIZE);
        const c1 = currentHead % GRID_SIZE;
        const r2 = Math.floor(index / GRID_SIZE);
        const c2 = index % GRID_SIZE;
        const isNeighbor = Math.abs(r1 - r2) + Math.abs(c1 - c2) === 1;

        if (!isNeighbor) {
            if (!isDragging) triggerInvalid(index);
            return;
        }
        if (userPath.includes(index)) {
            if (!isDragging) triggerInvalid(index);
            return;
        }

        if (clues[index] !== undefined && clues[index] !== currentStep) {
            triggerInvalid(index);
            return;
        }

        const newPath = [...userPath, index];
        setUserPath(newPath);

        if (newPath.length === TOTAL_NODES) endGame();
    };

    const endGame = () => {
        setGameState('WON');
        const finalTime = Date.now() - startTime;
        if (!bestTime || finalTime < bestTime) {
            setBestTime(finalTime);
            localStorage.setItem(dailyBestKey, finalTime);
        }
    };

    // -- RENDER HELPERS --
    const formatTime = (ms) => (ms / 1000).toFixed(2);

    // Connectors logic
    const getConnectors = (idx) => {
        const pathIdx = userPath.indexOf(idx);
        if (pathIdx === -1) return {};

        const connectors = {};
        if (pathIdx < userPath.length - 1) {
            const nextIdx = userPath[pathIdx + 1];
            if (nextIdx - idx === 1) connectors.right = true;
            if (nextIdx - idx === -1) connectors.left = true;
            if (nextIdx - idx === GRID_SIZE) connectors.bottom = true;
            if (nextIdx - idx === -GRID_SIZE) connectors.top = true;
        }
        if (pathIdx > 0) {
            const prevIdx = userPath[pathIdx - 1];
            if (prevIdx - idx === 1) connectors.right = true;
            if (prevIdx - idx === -1) connectors.left = true;
            if (prevIdx - idx === GRID_SIZE) connectors.bottom = true;
            if (prevIdx - idx === -GRID_SIZE) connectors.top = true;
        }
        return connectors;
    };

    return (
        <section className="py-20 bg-dark-950 relative overflow-hidden font-mono select-none flex items-center justify-center min-h-[800px]">
            {/* Enhanced Dynamic Background */}
            <div className="absolute inset-0 z-0">
                {/* Grid */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'linear-gradient(#00FF41 1px, transparent 1px), linear-gradient(90deg, #00FF41 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        transform: 'perspective(500px) rotateX(20deg)',
                        transformOrigin: 'top'
                    }}
                />
                {/* Rain/Glow effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent" />
                <div className="absolute top-0 left-0 w-full h-1 bg-matrix/20 animate-scanline" />
            </div>

            <div className="max-w-6xl w-full mx-auto px-4 z-10 flex flex-col lg:flex-row gap-12 items-start justify-center">

                {/* LEFT: Game Area */}
                <div className="flex-1 max-w-lg w-full mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8 lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-matrix/10 border border-matrix/20 rounded-full text-matrix text-[10px] font-black uppercase tracking-widest mb-3 shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                            <Share2 className="w-3 h-3" />
                            <span>System_Override_Protocol_{dailySeed}</span>
                        </div>
                        <h2 className="text-4xl font-display font-black text-white uppercase tracking-tighter">
                            203<span className="text-matrix">PATH</span>
                        </h2>
                    </div>

                    <div className="bg-dark-900/80 backdrop-blur-md border border-slate-800 p-6 rounded-2xl shadow-2xl relative">
                        {/* Status Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="bg-dark-950 px-4 py-2 rounded-lg border border-slate-800">
                                <span className="text-xs text-slate-500 uppercase block">Time</span>
                                <span className="text-2xl font-black text-white font-mono">{formatTime(currentTime)}s</span>
                            </div>
                            {bestTime ? (
                                <div className="text-right">
                                    <span className="text-[10px] text-slate-500 uppercase block">Daily Best</span>
                                    <span className="text-matrix font-bold">{formatTime(bestTime)}s</span>
                                </div>
                            ) : (
                                <div className="text-right opacity-50">
                                    <span className="text-[10px] text-slate-500 uppercase block">Daily Best</span>
                                    <span className="text-white font-bold">--.--s</span>
                                </div>
                            )}
                        </div>

                        {/* GRID Container */}
                        <div
                            className="relative aspect-square bg-dark-950 rounded-xl p-4 border border-slate-800 shadow-inner overflow-hidden cursor-crosshair touch-none"
                            onMouseLeave={() => setIsDragging(false)}
                            onMouseUp={() => setIsDragging(false)}
                        >
                            {/* Overlay: Game Over / Start */}
                            {gameState !== 'PLAYING' && (
                                <div className="absolute inset-0 z-30 bg-dark-950/90 backdrop-blur-sm flex items-center justify-center rounded-xl transition-all duration-500">
                                    <div className="text-center p-6">
                                        {gameState === 'WON' && (
                                            <div className="mb-8 animate-bounce">
                                                <Trophy className="w-20 h-20 text-cyber-gold mx-auto mb-4" />
                                                <div className="text-cyber-gold font-black uppercase tracking-widest text-lg">Daily Protocol Complete</div>
                                                <div className="text-slate-400 text-xs mt-2">New Challenge in 24h</div>
                                            </div>
                                        )}
                                        <button
                                            onClick={startGame}
                                            className={`relative group overflow-hidden px-12 py-6 bg-dark-900 border border-matrix/30 text-matrix font-black uppercase tracking-[0.2em] transition-all duration-300 ${buttonState === 'animating' ? 'scale-110 bg-matrix text-black shadow-[0_0_50px_rgba(0,255,65,0.8)]' : 'hover:bg-matrix/10 hover:border-matrix hover:shadow-[0_0_30px_rgba(0,255,65,0.2)]'}`}
                                        >
                                            {/* Corner Accents */}
                                            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-matrix/50 group-hover:border-matrix transition-colors" />
                                            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-matrix/50 group-hover:border-matrix transition-colors" />
                                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-matrix/50 group-hover:border-matrix transition-colors" />
                                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-matrix/50 group-hover:border-matrix transition-colors" />

                                            {/* Background Scanline */}
                                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,65,0.05)_50%,transparent_75%)] bg-[size:10px_10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                            <div className={`flex items-center gap-4 text-xl z-10 relative ${buttonState === 'animating' ? 'animate-pulse' : ''}`}>
                                                {gameState === 'IDLE' ? <Play className="w-6 h-6 fill-current" /> : <RotateCcw className="w-6 h-6" />}
                                                <span>{gameState === 'IDLE' ? 'INITIALIZE_PROTOCOL' : 'RETRY_SEQUENCE'}</span>
                                            </div>

                                            {/* Glitch/Crazy Effect Layers */}
                                            {buttonState === 'animating' && (
                                                <>
                                                    <div className="absolute inset-0 bg-white mix-blend-difference animate-ping opacity-50" />
                                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500 animate-[spin_0.1s_linear_infinite]" />
                                                    <div className="absolute inset-0 border-4 border-red-500 opacity-50 blur-sm scale-110" />
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* GRID CELLS */}
                            <div className="grid grid-cols-5 gap-0 h-full w-full">
                                {Array.from({ length: TOTAL_NODES }).map((_, i) => {
                                    const isClue = clues[i] !== undefined;
                                    const pathIndex = userPath.indexOf(i);
                                    const isVisited = pathIndex !== -1;
                                    const isHead = i === userPath[userPath.length - 1];
                                    const isInvalid = invalidMove === i;
                                    const conns = getConnectors(i);

                                    return (
                                        <div
                                            key={i}
                                            onMouseDown={() => { setIsDragging(true); handleNodeInteract(i); }}
                                            onMouseEnter={() => { if (isDragging) handleNodeInteract(i); }}
                                            onTouchStart={(e) => {
                                                e.preventDefault(); // Prevent scroll
                                                setIsDragging(true);
                                                handleNodeInteract(i);
                                            }}
                                            onTouchMove={(e) => {
                                                e.preventDefault();
                                                // Simplified touch logic 
                                                // Ideally use elementFromPoint logic carefully
                                            }}
                                            className={`relative flex items-center justify-center z-10 transition-transform duration-100 ${isInvalid ? 'animate-shake' : ''}`}
                                        >

                                            {/* Connector Lines (Absolute to grid cell) */}
                                            {isVisited && (
                                                <>
                                                    {conns.right && <div className="absolute right-[-50%] top-1/2 w-full h-1.5 bg-matrix -translate-y-1/2 z-0 scale-x-110" />}
                                                    {conns.bottom && <div className="absolute bottom-[-50%] left-1/2 h-full w-1.5 bg-matrix -translate-x-1/2 z-0 scale-y-110" />}
                                                </>
                                            )}

                                            {/* Node Circle */}
                                            <div className={`
                                                relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-xl md:text-2xl font-black transition-all duration-200
                                                ${isInvalid ? 'bg-red-500/20 ring-4 ring-red-500 z-50' : ''}
                                                ${isVisited && !isInvalid
                                                    ? 'bg-matrix text-dark-950 scale-100 shadow-[0_0_20px_rgba(0,255,65,0.4)] z-20'
                                                    : !isInvalid ? 'bg-dark-900 border-2 border-slate-800 text-slate-700 hover:border-slate-600' : ''}
                                                ${isClue && !isVisited && !isInvalid ? 'bg-slate-800 text-white border-slate-600' : ''}
                                                ${isHead && !isInvalid ? 'ring-4 ring-white/50 scale-110 z-30' : ''}
                                                ${isClue && clues[i] === 1 ? 'ring-4 ring-cyan-500 shadow-cyan-500/50' : ''}
                                            `}>
                                                {isClue && clues[i]}
                                                {!isClue && isVisited && pathIndex + 1}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Controls Bar */}
                        <div className="flex justify-between items-center mt-6 gap-4">
                            <button
                                onClick={handleReset}
                                disabled={gameState !== 'PLAYING'}
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-dark-950 border border-slate-800 text-slate-400 hover:text-white hover:border-red-500 hover:bg-red-500/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                            >
                                <RefreshCw className="w-4 h-4" />
                                <span className="uppercase text-xs font-bold tracking-widest">Restart Pattern</span>
                            </button>

                            <div className="flex gap-2">
                                <button
                                    onClick={handleUndo}
                                    disabled={userPath.length <= 1 || gameState !== 'PLAYING'}
                                    className="p-3 rounded-lg bg-dark-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                                    title="Undo"
                                >
                                    <Undo2 className="w-5 h-5" />
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT: How to Play (Enhanced & Animated) */}
                <div className="lg:w-96 w-full pt-4 lg:pt-20 space-y-6">
                    <div className="bg-dark-900/50 border border-slate-800 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden group">

                        {/* Decorative background glow */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-matrix/5 rounded-full blur-3xl group-hover:bg-matrix/10 transition-all duration-700" />

                        <div className="flex items-center gap-3 mb-8 relative z-10">
                            <div className="p-2 bg-matrix/10 rounded-lg">
                                <HelpCircle className="w-6 h-6 text-matrix" />
                            </div>
                            <h3 className="font-bold uppercase tracking-wider text-xl text-white">How to Play</h3>
                        </div>

                        <ul className="space-y-8 relative z-10">
                            <li className="flex gap-4 group/item">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-matrix font-black flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:border-matrix transition-all duration-300 shadow-lg">1</div>
                                    <div className="absolute top-8 left-1/2 w-0.5 h-full bg-slate-800 -z-10" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1 group-hover/item:text-matrix transition-colors">Start Sequence</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Begin at <span className="text-cyan-400 font-bold">1</span>. Connect numbers strictly in order: <span className="text-white font-mono bg-slate-800 px-1 rounded">1→2→3...</span>
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4 group/item">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-matrix font-black flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:border-matrix transition-all duration-300 shadow-lg">2</div>
                                    <div className="absolute top-8 left-1/2 w-0.5 h-full bg-slate-800 -z-10" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1 group-hover/item:text-matrix transition-colors">Fill the grid</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Every single cell must be visited. No empty spaces allowed. The path ends at <span className="text-white font-bold">25</span>.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4 group/item">
                                <div className="relative">
                                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 text-matrix font-black flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:border-matrix transition-all duration-300 shadow-lg">3</div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold mb-1 group-hover/item:text-matrix transition-colors">Strict Movement</h4>
                                    <p className="text-sm text-slate-400 leading-relaxed">
                                        Moves must be horizontal or vertical. No diagonals. No crossing your own path.
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <div className="mt-8 pt-6 border-t border-slate-800/50">
                            <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-3 font-semibold">Controls</div>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="p-3 bg-dark-950 rounded-lg border border-slate-800 flex flex-col items-center gap-2 group/btn hover:border-matrix/30 transition-colors cursor-help">
                                    <div className="w-full h-1 rounded-full bg-gradient-to-r from-matrix to-transparent opacity-50" />
                                    <span className="text-xs text-slate-300 font-bold uppercase">Drag</span>
                                    <span className="text-[10px] text-slate-500 text-center leading-tight">Swipe to connect</span>
                                </div>
                                <div className="p-3 bg-dark-950 rounded-lg border border-slate-800 flex flex-col items-center gap-2 group/btn hover:border-matrix/30 transition-colors cursor-help">
                                    <div className="w-1 h-1 rounded-full bg-matrix opacity-50" />
                                    <span className="text-xs text-slate-300 font-bold uppercase">Click</span>
                                    <span className="text-[10px] text-slate-500 text-center leading-tight">Tap neighbors</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Game;
