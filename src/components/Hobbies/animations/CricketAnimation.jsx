import React from 'react';
import { motion } from 'framer-motion';

const CricketAnimation = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-dark-900/50">
            {/* Pitch / Data Lane (Perspective) */}
            <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 bg-matrix/5 flex items-center justify-center border-y border-matrix/10 perspective-[1000px]">
                {/* Crease Markings */}
                <div className="absolute left-10 h-full w-1 bg-matrix/20" />
                <div className="absolute right-10 h-full w-1 bg-matrix/20" />

                {/* Pitch Lines */}
                <div className="w-full h-[1px] bg-matrix/10" />
            </div>

            {/* Animation Container */}
            <div className="relative w-full h-full">

                {/* 1. The Bowler / Non-Striker Action (Left Side) */}
                <motion.div
                    className="absolute top-1/2 left-[5%] -translate-y-1/2 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-8 h-20 bg-slate-800/80 rounded-full blur-sm" />
                </motion.div>

                {/* 2. The Ball (Travels Left -> Right) */}
                <motion.div
                    className="absolute top-1/2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(255,50,50,0.8)] z-30"
                    initial={{ left: "10%", scale: 1, opacity: 0 }}
                    animate={{
                        left: ["10%", "85%", "200%"],  // Start -> Bat -> Boundary
                        y: [0, 80, -400],              // Straight -> Pitch Bounce -> Lofted Shot
                        scale: [1, 1.2, 0.5],          // Zoom effect
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: 2.5,
                        times: [0, 0.5, 1], // Hit happens at 0.5 (approx 1.25s)
                        ease: "linear",
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                >
                    {/* Speed Trail */}
                    <motion.div
                        className="absolute right-full top-1/2 -translate-y-1/2 h-2 bg-gradient-to-l from-red-500/50 to-transparent w-20"
                    />
                </motion.div>

                {/* 3. The Batsman (Right Side) */}
                <motion.div
                    className="absolute top-1/2 right-[10%] -translate-y-1/2 z-20"
                >
                    <svg width="100" height="120" viewBox="0 0 100 120" className="overflow-visible">
                        {/* Body */}
                        <circle cx="50" cy="30" r="15" className="fill-slate-300" />
                        <rect x="35" y="45" width="30" height="50" rx="5" className="fill-slate-400" />

                        {/* The Bat (Swings on Impact) */}
                        <motion.g
                            style={{ originX: "50px", originY: "45px" }} // Shoulder pivot
                            animate={{ rotate: [0, -60, 120, 0] }} // Backlift -> Swing -> Followthrough
                            transition={{
                                duration: 2.5,
                                times: [0, 0.4, 0.55, 1], // Swing through exactly when ball arrives (approx 0.5s)
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: "easeInOut"
                            }}
                        >
                            <rect x="45" y="45" width="10" height="70" className="fill-cyber-blue drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" rx="2" />
                        </motion.g>
                    </svg>
                </motion.div>

                {/* 4. Impact Flash */}
                <motion.div
                    className="absolute top-[60%] right-[12%] w-24 h-24 bg-white rounded-full blur-[40px] z-40 pointer-events-none"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{
                        duration: 0.2,
                        delay: 1.25, // Sync with ball arrival (approx half of 2.5s duration)
                        repeat: Infinity,
                        repeatDelay: 3.3 // 2.5 + 1 - 0.2
                    }}
                />

                {/* 5. Message (After Hit) */}
                <motion.div
                    className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center z-50 pointer-events-none"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0.8], y: [20, -20, -20, -50] }}
                    transition={{
                        duration: 2,
                        delay: 1.3, // Appears right after hit
                        repeat: Infinity,
                        repeatDelay: 1.5
                    }}
                >
                    <div className="text-3xl font-black italic text-matrix drop-shadow-[0_0_10px_rgba(0,255,65,0.8)] tracking-tighter">
                        CRITICAL_HIT!
                    </div>
                    <div className="text-xs font-mono text-cyan-400 mt-1">
                        VELOCITY: 148km/h
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default CricketAnimation;
