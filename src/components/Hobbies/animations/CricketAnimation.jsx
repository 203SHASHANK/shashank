import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CricketAnimation = () => {
    const [outcome, setOutcome] = useState('SIX'); // SIX, FOUR, OUT

    useEffect(() => {
        const outcomes = ['SIX', 'FOUR', 'OUT'];
        const interval = setInterval(() => {
            setOutcome(outcomes[Math.floor(Math.random() * outcomes.length)]);
        }, 4000); // Change outcome every cycle
        return () => clearInterval(interval);
    }, []);

    // Animation Config based on Outcome
    const getBallPath = () => {
        switch (outcome) {
            case 'SIX': // High Lofted Shot
                return {
                    left: ["10%", "85%", "200%"],
                    y: [0, 80, -500],
                    scale: [1, 1.2, 0.4],
                    opacity: [0, 1, 1, 0]
                };
            case 'FOUR': // Ground Shot (Fast)
                return {
                    left: ["10%", "85%", "200%"],
                    y: [0, 80, 100], // Stays low/grounded
                    scale: [1, 1, 0.8],
                    opacity: [0, 1, 1, 0]
                };
            case 'OUT': // Hits Stumps
                return {
                    left: ["10%", "85%", "90%"], // Stops at stumps
                    y: [0, 80, 80],
                    scale: [1, 1.2, 1],
                    opacity: [0, 1, 1, 0]
                };
            default: return {};
        }
    };

    const getMessage = () => {
        switch (outcome) {
            case 'SIX': return { title: "OUT_OF_BOUNDS (6)", sub: "BUFFER_OVERFLOW detected" };
            case 'FOUR': return { title: "RUNTIME_EXCEPTION (4)", sub: "Execution speed critical" };
            case 'OUT': return { title: "FATAL_ERROR (WICKET)", sub: "System Crash: Bails detached" };
            default: return {};
        }
    };

    const msg = getMessage();

    return (
        <div className="w-full h-full relative overflow-hidden bg-dark-900/50 flex items-center justify-center">
            {/* Pitch / Data Lane */}
            <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 bg-matrix/5 flex items-center justify-center border-y border-matrix/10 perspective-[1000px]">
                <div className="absolute left-10 h-full w-1 bg-matrix/20" />
                <div className="absolute right-20 h-full w-1 bg-matrix/20" /> {/* Crease near stumps */}
                <div className="w-full h-[1px] bg-matrix/10" />
            </div>

            <div className="relative w-full h-full max-w-2xl">

                {/* 1. Stumps & Bails (Behind Batsman) */}
                <div className="absolute top-[40%] right-[5%] z-10 opacity-80">
                    <div className="relative w-4 h-20">
                        {/* 3 Stumps */}
                        <div className="absolute bottom-0 left-0 w-1 h-full bg-slate-400 rounded-t" />
                        <div className="absolute bottom-0 left-1.5 w-1 h-full bg-slate-400 rounded-t" />
                        <div className="absolute bottom-0 left-3 w-1 h-full bg-slate-400 rounded-t" />

                        {/* Bails (Animate visually if OUT) */}
                        <AnimatePresence>
                            {outcome === 'OUT' && (
                                <>
                                    <motion.div
                                        key="bail1"
                                        className="absolute -top-1 left-0 w-2 h-1 bg-red-500 rounded-full"
                                        initial={{ opacity: 1 }}
                                        animate={{ y: -50, x: -20, rotate: -450, opacity: 0 }}
                                        transition={{ delay: 1.25, duration: 0.8 }}
                                    />
                                    <motion.div
                                        key="bail2"
                                        className="absolute -top-1 left-2 w-2 h-1 bg-red-500 rounded-full"
                                        initial={{ opacity: 1 }}
                                        animate={{ y: -60, x: 20, rotate: 360, opacity: 0 }}
                                        transition={{ delay: 1.25, duration: 0.8 }}
                                    />
                                </>
                            )}
                        </AnimatePresence>
                        {/* Static bails for non-out scenarios (fades out when OUT starts) */}
                        {outcome !== 'OUT' && (
                            <div className="absolute -top-1 left-0 w-full h-1 flex gap-0.5 pointer-events-none">
                                <div className="w-2 h-1 bg-slate-300 rounded-full" />
                                <div className="w-2 h-1 bg-slate-300 rounded-full" />
                            </div>
                        )}
                    </div>
                </div>

                {/* 2. Bowler (Left) */}
                <div className="absolute top-1/2 left-[5%] -translate-y-1/2 z-20">
                    <div className="w-8 h-20 bg-slate-800/80 rounded-full blur-sm" />
                </div>

                {/* 3. The Ball */}
                <motion.div
                    key={outcome} // Re-mounts on outcome change to restart animation
                    className="absolute top-1/2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(255,50,50,0.8)] z-30"
                    initial={{ left: "10%", scale: 1, opacity: 0 }}
                    animate={getBallPath()}
                    transition={{
                        duration: 2.5,
                        times: [0, 0.5, 1],
                        ease: "linear",
                    }}
                >
                    <motion.div className="absolute right-full top-1/2 -translate-y-1/2 h-2 bg-gradient-to-l from-red-500/50 to-transparent w-20" />
                </motion.div>

                {/* 4. Batsman (Right) */}
                <div className="absolute top-1/2 right-[12%] -translate-y-1/2 z-20">
                    <svg width="100" height="120" viewBox="0 0 100 120" className="overflow-visible">
                        <circle cx="50" cy="30" r="15" className="fill-slate-300" />
                        <rect x="35" y="45" width="30" height="50" rx="5" className="fill-slate-400" />

                        {/* Bat Animation */}
                        <motion.g
                            key={outcome}
                            style={{ originX: "50px", originY: "45px" }}
                            animate={{
                                rotate: outcome === 'OUT'
                                    ? [0, -20, -20, 0] // Miss/Late swing
                                    : [0, -60, 120, 0] // Full swing for hits
                            }}
                            transition={{
                                duration: 2.5,
                                times: [0, 0.4, 0.55, 1],
                            }}
                        >
                            <rect x="45" y="45" width="10" height="70" className="fill-cyber-blue drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" rx="2" />
                        </motion.g>
                    </svg>
                </div>

                {/* 5. Message */}
                <motion.div
                    key={outcome + "msg"}
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center z-50 w-full"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0.8], y: [20, -20, -20, -50] }}
                    transition={{ duration: 2, delay: 1.3 }}
                >
                    <div className={`text-2xl md:text-3xl font-black italic tracking-tighter drop-shadow-lg ${outcome === 'OUT' ? 'text-red-500' : 'text-matrix'}`}>
                        {msg.title}
                    </div>
                    <div className="text-xs font-mono text-slate-400 mt-1">
                        {msg.sub}
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default CricketAnimation;
