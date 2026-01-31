import React from 'react';
import { motion } from 'framer-motion';

const CricketAnimation = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-dark-900/50">
            {/* Pitch / Data Lane */}
            <div className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 bg-matrix/5 flex items-center justify-center border-y border-matrix/10">
                <div className="w-full h-[1px] bg-matrix/20 animate-pulse"></div>
            </div>

            {/* Camera Shake Wrapper */}
            <motion.div
                className="w-full h-full relative"
                animate={{
                    x: [0, -5, 5, -2, 2, 0],
                    y: [0, 5, -5, 2, -2, 0]
                }}
                transition={{ duration: 0.2, delay: 1.5, ease: "easeInOut" }}
            >
                {/* Batsman Node */}
                <motion.div
                    className="absolute top-1/2 left-[75%] -translate-y-1/2 w-16 h-24 origin-bottom z-20"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: [0, -45, 60, 0] }}
                    transition={{ duration: 1.2, times: [0, 0.4, 0.6, 1], delay: 0.5 }}
                >
                    <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,255,65,0.3)]">
                        <circle cx="50" cy="30" r="20" className="fill-matrix" />
                        <rect x="40" y="50" width="20" height="80" className="fill-matrix/80" />
                        {/* Power Bat */}
                        <motion.rect
                            x="40" y="80" width="12" height="110" className="fill-cyber-blue shadow-[0_0_15px_rgba(0,212,255,0.5)]"
                            style={{ originX: "50%", originY: "0%" }}
                        />
                    </svg>
                </motion.div>

                {/* Packet Ball */}
                <motion.div
                    className="absolute top-1/2 left-0 w-5 h-5 bg-matrix rounded flex items-center justify-center z-10 shadow-[0_0_20px_rgba(0,255,65,0.8)]"
                    initial={{ x: -20, y: 0, scale: 0.5 }}
                    animate={{
                        x: ["0%", "75%", "180%"],
                        y: [0, 20, -300],
                        rotate: [0, 360, 720],
                        scale: [0.5, 1.2, 0.5]
                    }}
                    transition={{
                        duration: 1.6,
                        times: [0, 0.6, 1],
                        ease: "anticipate",
                        delay: 0.5
                    }}
                >
                    <div className="text-[8px] font-mono font-black text-black">PKT</div>
                    {/* Tail Effect */}
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0 bg-matrix/30 rounded"
                            animate={{ opacity: [0.5, 0], scale: [1, 2], x: -i * 10 }}
                            transition={{ repeat: Infinity, duration: 0.3 }}
                        />
                    ))}
                </motion.div>

                {/* Impact Flash */}
                <motion.div
                    className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white rounded-full opacity-0 blur-2xl z-30"
                    animate={{ opacity: [0, 0.8, 0], scale: [0.5, 2.5] }}
                    transition={{ duration: 0.3, delay: 1.45 }}
                />

                {/* Technical Feedback */}
                <motion.div
                    className="absolute top-1/3 left-1/2 -translate-x-1/2 text-4xl font-mono font-black text-matrix tracking-tighter z-40 italic drop-shadow-[0_0_20px_rgba(0,255,65,0.5)]"
                    initial={{ scale: 0, opacity: 0, y: 50 }}
                    animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8], y: -50 }}
                    transition={{ duration: 0.6, delay: 1.5, ease: "backOut" }}
                >
                    CRITICAL_OUTBOUND_SIX!
                </motion.div>

                <motion.div
                    className="absolute bottom-1/4 left-1/4 text-[10px] font-mono text-cyber-blue opacity-0"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, delay: 1.6 }}
                >
                    {">> TRANSMISSION_VELOCITY: PEAK_STABLE"}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default CricketAnimation;
