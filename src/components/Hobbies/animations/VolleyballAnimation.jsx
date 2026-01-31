import React from 'react';
import { motion } from 'framer-motion';

const VolleyballAnimation = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-dark-900/50">
            {/* Dynamic Spike Zone */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#00FF41_1px,transparent_1px),linear-gradient(to_bottom,#00FF41_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Net / Data Barrier */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-1.5 h-32 bg-matrix/20 z-10">
                <div className="w-full h-full border-x border-matrix/50 bg-matrix/5 animate-pulse"></div>
                <div className="absolute top-0 -left-2 -right-2 h-1 bg-matrix shadow-[0_0_10px_rgba(0,255,65,0.8)]"></div>
            </div>

            {/* Athlete Node A (Spiker) */}
            <motion.div
                className="absolute bottom-16 left-[15%] w-12 h-20 origin-bottom"
                animate={{
                    y: [0, -40, 0],
                    scaleY: [1, 0.8, 1.2, 1]
                }}
                transition={{ duration: 0.8, delay: 0, repeat: Infinity, repeatDelay: 1.2 }}
            >
                <div className="w-4 h-4 rounded-full bg-matrix/40 mx-auto" />
                <div className="w-1.5 h-12 bg-matrix/30 mx-auto mt-1" />
                <motion.div
                    className="absolute top-4 left-0 w-12 h-1 bg-matrix/40"
                    animate={{ rotate: [-45, 45, -45] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 1.2 }}
                />
            </motion.div>

            {/* Packet Ball */}
            <motion.div
                className="absolute w-8 h-8 bg-dark-850 rounded-lg border border-matrix shadow-[0_0_15px_rgba(0,255,65,0.5)] z-20 flex items-center justify-center font-mono text-[9px] font-black text-matrix"
                initial={{ left: "15%", bottom: "25%", rotate: 0 }}
                animate={{
                    left: ["15%", "50%", "85%"],
                    bottom: ["25%", "85%", "16%"],
                    rotate: [0, 360, 720]
                }}
                transition={{
                    duration: 1.5,
                    times: [0, 0.45, 1],
                    repeat: Infinity,
                    repeatDelay: 0.5,
                    ease: "easeInOut"
                }}
            >
                REQ
                {/* Trail */}
                <motion.div
                    className="absolute inset-0 border border-matrix animate-ping opacity-20"
                />
            </motion.div>

            {/* Land Impact / Confirmation */}
            <motion.div
                className="absolute bottom-16 left-[85%] -translate-x-1/2 w-32 h-32 bg-matrix/10 rounded-full opacity-0 blur-2xl flex items-center justify-center"
                animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 2]
                }}
                transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 1.5 }}
            >
                <div className="text-[10px] font-mono font-black text-matrix uppercase tracking-widest whitespace-nowrap">
                    PACKET_RELAY_SUCCESS
                </div>
            </motion.div>

            {/* Digital Floor */}
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-dark-900 to-transparent border-t border-matrix/10">
                <div className="w-full h-full opacity-10 bg-[linear-gradient(45deg,#00FF41_25%,transparent_25%,transparent_50%,#00FF41_50%,#00FF41_75%,transparent_75%,transparent)] bg-[size:10px_10px]"></div>
            </div>
        </div>
    );
};

export default VolleyballAnimation;
