import React from 'react';
import { motion } from 'framer-motion';

const TravelAnimation = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-blue-50 dark:bg-blue-900/30">
            {/* Map Background (Simple dots) */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-slate-500"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`
                        }}
                    ></div>
                ))}
            </div>

            {/* Path Line */}
            <svg className="absolute inset-0 w-full h-full">
                <motion.path
                    d="M 50 250 Q 150 50 350 150 T 600 100" // Curve path
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="4"
                    strokeDasharray="10 10"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </svg>

            {/* Plane */}
            <motion.div
                className="absolute text-4xl text-indigo-600 dark:text-indigo-400 drop-shadow-lg z-10"
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                style={{ offsetPath: 'path("M 50 250 Q 150 50 350 150 T 600 100")' }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                <div style={{ transform: "rotate(90deg)" }}>✈️</div>
            </motion.div>

            {/* Location Pin */}
            <motion.div
                className="absolute text-3xl text-red-500 drop-shadow-md"
                style={{ right: "15%", top: "25%" }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2, type: "spring" }}
            >
                📍
            </motion.div>
        </div>
    );
};

export default TravelAnimation;
