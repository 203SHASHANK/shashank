import React from 'react';
import { motion } from 'framer-motion';

const KannadaLiteratureAnimation = () => {
    // Beautiful Kannada quote - exactly as requested
    const kannadaQuote = "ನಾಕು ತಂತಿ...";

    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            {/* Animated Book Pages Background */}
            <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 1 }}
            >
                {/* Left Page */}
                <motion.div
                    className="absolute left-1/4 w-32 h-48 bg-gradient-to-r from-matrix/20 to-transparent border-r border-matrix/30 rounded-l-lg"
                    initial={{ rotateY: -90, x: 100 }}
                    animate={{ rotateY: 0, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                />

                {/* Right Page */}
                <motion.div
                    className="absolute right-1/4 w-32 h-48 bg-gradient-to-l from-matrix/20 to-transparent border-l border-matrix/30 rounded-r-lg"
                    initial={{ rotateY: 90, x: -100 }}
                    animate={{ rotateY: 0, x: 0 }}
                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                />
            </motion.div>

            {/* Main Quote Container */}
            <div className="relative z-10 max-w-2xl px-8 text-center">
                {/* Kannada Quote */}
                <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <motion.h3
                        className="text-3xl md:text-4xl font-bold text-matrix mb-2"
                        style={{ fontFamily: "'Noto Sans Kannada', sans-serif" }}
                    >
                        {kannadaQuote.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    duration: 0.1,
                                    delay: 1.2 + (index * 0.05)
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h3>

                    {/* Decorative Line */}
                    <motion.div
                        className="w-32 h-0.5 bg-gradient-to-r from-transparent via-matrix to-transparent mx-auto my-4"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    />
                </motion.div>

            </div>

            {/* Floating Particles */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-matrix/40 rounded-full"
                    style={{
                        left: `${20 + i * 15}%`,
                        top: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                    }}
                />
            ))}

            {/* Subtle Glow Effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-radial from-matrix/5 via-transparent to-transparent"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default KannadaLiteratureAnimation;
