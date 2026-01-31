import React from 'react';
import { motion } from 'framer-motion';

const CricketAnimation = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-emerald-50 dark:bg-emerald-900/20">
            {/* Pitch */}
            <div className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <div className="w-full h-1 bg-white/50"></div>
            </div>

            {/* Batsman */}
            <motion.div
                className="absolute top-1/2 left-[70%] -translate-y-1/2 w-12 h-20 origin-bottom"
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, -30, 45, 0] }} // backlift, hit, follow-through, reset
                transition={{ duration: 1.5, times: [0, 0.5, 0.6, 1], delay: 0.5 }}
            >
                <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-md">
                    <circle cx="50" cy="30" r="20" className="fill-slate-800 dark:fill-white" />
                    <rect x="40" y="50" width="20" height="80" className="fill-slate-800 dark:fill-white" />
                    {/* Bat */}
                    <motion.rect
                        x="40" y="80" width="15" height="100" className="fill-amber-700"
                        style={{ originX: "50%", originY: "0%" }}
                        animate={{ rotate: -60 }} // Initial stance
                    />
                </svg>
            </motion.div>

            {/* Ball */}
            <motion.div
                className="absolute top-1/2 left-0 w-4 h-4 bg-red-600 rounded-full shadow-sm z-10 border border-white"
                initial={{ x: -20, y: 10, scale: 0.8 }}
                animate={{
                    x: ["0%", "72%", "150%"],  // Start -> Bat(Overlap) -> Boundary
                    y: [10, 20, -200],         // Low bounce -> Hit -> High trajectory
                    scale: [0.8, 1, 0.6]
                }}
                transition={{
                    duration: 1.8,
                    times: [0, 0.6, 1], // Hit at 0.6 to match batsman swing (0.5s delay + 0.1s swing) roughly
                    ease: "linear",
                    delay: 0.5
                }}
            />

            {/* Impact Effect */}
            <motion.div
                className="absolute top-1/2 left-[72%] w-16 h-16 bg-yellow-100 rounded-full opacity-0 blur-md"
                animate={{ opacity: [0, 1, 0], scale: [0.5, 2] }}
                transition={{ duration: 0.2, delay: 1.55 }} // approx match hit time
            />

            {/* SIX Text */}
            <motion.div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 drop-shadow-xl z-20"
                initial={{ scale: 0, opacity: 0, y: 50 }}
                animate={{ scale: 1.5, opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.5, delay: 1.6 }}
            >
                SIX!
            </motion.div>
        </div>
    );
};

export default CricketAnimation;
