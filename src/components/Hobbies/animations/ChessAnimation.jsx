import React from 'react';
import { motion } from 'framer-motion';

const ChessAnimation = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            {/* Board */}
            <div className="w-64 h-64 bg-white shadow-xl grid grid-cols-4 grid-rows-4 border-4 border-amber-800 rounded">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className={`${(Math.floor(i / 4) + i) % 2 === 0 ? 'bg-amber-100' : 'bg-amber-800'}`}></div>
                ))}
            </div>

            {/* Knight Piece */}
            <motion.div
                className="absolute text-5xl drop-shadow-lg text-slate-900"
                initial={{ x: -40, y: 40 }} // Start pos
                animate={{
                    x: [-40, -40, 40], // Move L shape
                    y: [40, -80, -80]
                }}
                transition={{ duration: 1.5, times: [0, 0.6, 1], ease: "anticipate", delay: 0.5 }}
            >
                ♞
            </motion.div>

            {/* Target highlight */}
            <motion.div
                className="absolute w-14 h-14 border-4 border-green-500 rounded-full opacity-0"
                style={{ x: 40, y: -80 }}
                animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
                transition={{ delay: 2, duration: 1 }}
            />
        </div>
    );
};

export default ChessAnimation;
