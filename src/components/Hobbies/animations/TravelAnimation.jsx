import React from 'react';
import { motion } from 'framer-motion';

const TravelAnimation = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-dark-900/50">
            {/* Global Network Map (Matrix Nodes) */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-matrix rounded-full shadow-[0_0_5px_rgba(0,255,65,1)]"
                        style={{
                            top: `${Math.random() * 80 + 10}%`,
                            left: `${Math.random() * 80 + 10}%`,
                        }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-matrix rounded-full"
                            animate={{ scale: [1, 2, 1], opacity: [0.3, 0.7, 0.3] }}
                            transition={{ duration: 2 + Math.random() * 2, repeat: Infinity }}
                        />
                    </div>
                ))}
            </div>

            {/* Uplink Path */}
            <svg className="absolute inset-0 w-full h-full">
                <motion.path
                    d="M 100 300 C 200 100 400 100 500 250 S 700 100 800 200"
                    fill="none"
                    stroke="rgba(0,255,65,0.3)"
                    strokeWidth="2"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, ease: "linear", repeat: Infinity }}
                />
            </svg>

            {/* Data Packet (Traveling Node) */}
            <motion.div
                className="absolute w-4 h-4 bg-dark-850 border border-matrix flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,255,65,0.8)]"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                style={{ offsetPath: 'path("M 100 300 C 200 100 400 100 500 250 S 700 100 800 200")' }}
                transition={{ duration: 3, ease: "linear", repeat: Infinity }}
            >
                <div className="w-1.5 h-1.5 bg-matrix animate-ping" />
            </motion.div>

            {/* Terminal Logs */}
            <div className="absolute bottom-6 left-6 font-mono text-[9px] text-matrix/60 space-y-1">
                <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                    {">> INITIATING_UPLINK..."}
                </motion.div>
                <div className="text-cyber-blue">[OK] ROUTE_ESTABLISHED</div>
                <div className="text-cyber-gold">[SYS] LATENCY: 2ms</div>
            </div>

            {/* Transmission Overlay */}
            <motion.div
                className="absolute top-6 right-6 px-3 py-1 border border-matrix/30 bg-matrix/5 rounded text-[8px] font-mono text-matrix uppercase tracking-widest"
                animate={{ borderColor: ["rgba(0,255,65,0.1)", "rgba(0,255,65,0.5)", "rgba(0,255,65,0.1)"] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                Transmission_Active
            </motion.div>
        </div>
    );
};

export default TravelAnimation;
