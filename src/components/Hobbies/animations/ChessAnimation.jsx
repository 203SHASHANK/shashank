import React from 'react';
import { motion } from 'framer-motion';

const ChessAnimation = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-dark-900/50 flex items-center justify-center">
            {/* Logic Grid */}
            <div className="w-64 h-64 grid grid-cols-4 grid-rows-4 border border-matrix/20 bg-matrix/5">
                {[...Array(16)].map((_, i) => (
                    <div key={i} className={`border border-matrix/10 relative group ${((Math.floor(i / 4) + i) % 2 === 0) ? 'bg-matrix/5' : ''}`}>
                        <div className="absolute inset-2 border border-matrix/5 rounded-sm group-hover:bg-matrix/10 transition-colors" />
                    </div>
                ))}
            </div>

            {/* Logic Node (Knight Piece) */}
            <motion.div
                className="absolute w-12 h-12 bg-dark-850 border border-matrix shadow-[0_0_15px_rgba(0,255,65,0.5)] flex items-center justify-center font-mono text-[9px] font-black text-matrix rounded-sm z-20"
                initial={{ x: -80, y: 80 }}
                animate={{
                    x: [-80, -80, 80],
                    y: [80, -80, -80],
                    rotateY: [0, 180, 360]
                }}
                transition={{ duration: 1.5, times: [0, 0.6, 1], ease: "anticipate", delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
            >
                <div className="flex flex-col items-center">
                    <span>NODE</span>
                    <span className="text-[7px] text-cyber-blue">L-PATH</span>
                </div>
            </motion.div>

            {/* Verification Glitch */}
            <motion.div
                className="absolute w-14 h-14 bg-matrix/20 border border-matrix opacity-0 rounded-sm"
                style={{ x: 80, y: -80 }}
                animate={{
                    opacity: [0, 0.8, 0],
                    scale: [1, 1.5, 1],
                    skewX: [0, 20, -20, 0]
                }}
                transition={{ delay: 1.8, duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            />

            <motion.div
                className="absolute top-1/4 right-10 text-[8px] font-mono text-matrix opacity-0"
                animate={{ opacity: [0, 1, 0], x: [10, 0] }}
                transition={{ delay: 2, duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
            >
                [PASS] LOGIC_CONSISTENCY_CHECK
            </motion.div>
        </div>
    );
};

export default ChessAnimation;
