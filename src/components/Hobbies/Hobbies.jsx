import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity } from 'lucide-react';
import { hobbies } from '../../data/portfolioData';

// Import Animation Components
import CricketAnimation from './animations/CricketAnimation';
import VolleyballAnimation from './animations/VolleyballAnimation';
import ChessAnimation from './animations/ChessAnimation';
import TravelAnimation from './animations/TravelAnimation';

const Hobbies = () => {
    const [selectedHobby, setSelectedHobby] = useState(hobbies[0]);
    const [animationKey, setAnimationKey] = useState(0);

    const replayAnimation = () => {
        setAnimationKey(prev => prev + 1);
    };

    const handleHobbyClick = (hobby) => {
        setSelectedHobby(hobby);
        setAnimationKey(prev => prev + 1);
    };

    return (
        <section id="hobbies-section" className="py-24 bg-dark-950 relative overflow-hidden min-h-[600px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                        <div className="p-2 bg-matrix/10 border border-matrix/20 rounded text-matrix shadow-[0_0_10px_rgba(0,255,65,0.2)]">
                            <Activity className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-black text-matrix uppercase tracking-[0.3em]">Hobby_Kernel</span>
                    </div>
                    <h2 className="section-title text-white uppercase tracking-tighter text-center md:text-left">
                        Interests & <span className="text-matrix">Hobbies</span>
                    </h2>
                </div>

                {/* Animation Stage */}
                <div className="relative w-full h-96 mb-12 bg-dark-900/50 rounded-lg overflow-hidden border border-matrix/10 shadow-[inner_0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center group">

                    {/* Background Pattern - Matrix Grid */}
                    <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#00FF41_1px,transparent_1px),linear-gradient(to_bottom,#00FF41_1px,transparent_1px)] bg-[size:30px:30px] group-hover:opacity-[0.06] transition-opacity duration-500"></div>

                    {/* Pulsing Glow */}
                    <div className="absolute inset-0 bg-matrix/5 blur-[80px] animate-pulse-slow pointer-events-none" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedHobby.name}-${animationKey}`}
                            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                            transition={{ duration: 0.5, ease: 'backOut' }}
                            className="w-full h-full relative"
                        >
                            {selectedHobby.name === 'Cricket' && <CricketAnimation />}
                            {selectedHobby.name === 'Volleyball' && <VolleyballAnimation />}
                            {selectedHobby.name === 'Chess' && <ChessAnimation />}
                            {selectedHobby.name === 'Travelling' && <TravelAnimation />}
                        </motion.div>
                    </AnimatePresence>

                    {/* Replay Button */}
                    <button
                        onClick={replayAnimation}
                        className="absolute bottom-6 right-6 p-3 bg-dark-850 border border-matrix/20 rounded-lg hover:border-matrix hover:text-matrix hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all z-20 text-slate-500"
                        title="Replay Sequence"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21h5v-5" /></svg>
                    </button>

                    {/* Hobby Title Overlay */}
                    <div className="absolute top-6 left-6 bg-dark-900/80 backdrop-blur-md px-6 py-2 rounded border border-matrix/20 z-20 shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
                        <span className="font-mono font-black text-xs text-matrix uppercase tracking-widest">{selectedHobby.name}</span>
                    </div>
                </div>

                {/* Hobbies Selector */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {hobbies.map((hobby) => (
                        <button
                            key={hobby.name}
                            onClick={() => handleHobbyClick(hobby)}
                            className={`p-6 rounded-lg border transition-all duration-500 flex flex-col items-center gap-4 group relative overflow-hidden ${selectedHobby.name === hobby.name
                                ? 'bg-matrix/5 border-matrix shadow-[0_0_20px_rgba(0,255,65,0.1)] transform -translate-y-1'
                                : 'bg-dark-900 border-slate-800 hover:border-matrix/30 hover:bg-dark-850'
                                }`}
                        >
                            <div className="absolute top-0 right-0 w-8 h-8 bg-matrix/5 rotate-45 translate-x-4 -translate-y-4 group-hover:bg-matrix/10 transition-colors" />
                            <span className="text-4xl group-hover:scale-125 transition-transform duration-500 block relative z-10">{hobby.icon}</span>
                            <span className={`font-mono font-bold text-[10px] uppercase tracking-[0.2em] relative z-10 transition-colors duration-500 ${selectedHobby.name === hobby.name ? 'text-matrix' : 'text-slate-500 group-hover:text-slate-300'}`}>
                                {hobby.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hobbies;
