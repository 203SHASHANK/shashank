import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        <section id="hobbies-section" className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden min-h-[500px]">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-900 dark:text-white mb-12">
                    Interests & <span className="text-indigo-600 dark:text-indigo-400">Hobbies</span>
                </h2>

                {/* Animation Stage */}
                <div className="relative w-full h-80 mb-12 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner flex items-center justify-center">

                    {/* Background Pattern - subtle grid */}
                    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedHobby.name}-${animationKey}`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.3 }}
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
                        className="absolute bottom-4 right-4 p-2 bg-slate-100 dark:bg-slate-700 rounded-full hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors z-20"
                        title="Replay Animation"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600 dark:text-slate-300"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" /><path d="M16 21h5v-5" /></svg>
                    </button>

                    {/* Hobby Title Overlay */}
                    <div className="absolute top-4 left-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur px-4 py-1 rounded-full border border-slate-200 dark:border-slate-700 z-20">
                        <span className="font-bold text-slate-800 dark:text-slate-200">{selectedHobby.name}</span>
                    </div>
                </div>

                {/* Hobbies Selector */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {hobbies.map((hobby) => (
                        <button
                            key={hobby.name}
                            onClick={() => handleHobbyClick(hobby)}
                            className={`p-4 rounded-xl border transition-all duration-300 flex flex-col items-center gap-2 group ${selectedHobby.name === hobby.name
                                    ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-500 dark:border-indigo-400 shadow-md transform -translate-y-1'
                                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/50 dark:hover:bg-slate-700'
                                }`}
                        >
                            <span className="text-3xl group-hover:scale-110 transition-transform duration-300 block">{hobby.icon}</span>
                            <span className={`font-medium ${selectedHobby.name === hobby.name ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-600 dark:text-slate-300'}`}>
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
