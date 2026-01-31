import React from 'react';
import { motion } from 'framer-motion';

const VolleyballAnimation = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-sky-50 dark:bg-sky-900/20">
            {/* Net */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-40 bg-slate-400 z-10">
                <div className="w-full h-full border-2 border-slate-500 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMCAwaDh2OEgwem0xIDFoNnY2SDF6IiBmaWxsPSIjOTRBNUI3Ii8+Cjwvc3ZnPg==')] opacity-50"></div>
            </div>

            {/* Floor */}
            <div className="absolute bottom-0 w-full h-16 bg-orange-200 dark:bg-orange-900/40"></div>

            {/* Ball */}
            <motion.div
                className="absolute w-10 h-10 bg-yellow-400 rounded-full border-2 border-blue-600 shadow-md z-20"
                initial={{ left: "10%", bottom: "20%" }}
                animate={{
                    left: ["10%", "50%", "90%"],
                    bottom: ["20%", "80%", "10%"],
                    rotate: 1080
                }}
                transition={{
                    duration: 1.5,
                    times: [0, 0.5, 1], // Peak at 0.5 (net)
                    ease: ["easeOut", "easeIn", "easeIn"] // Up slow, Down fast
                }}
            >
                {/* Volley ball lines */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-600 rotate-45"></div>
                <div className="absolute inset-0 rounded-full border-2 border-blue-600 -rotate-45"></div>
            </motion.div>

            {/* Shadow following ball */}
            <motion.div
                className="absolute bottom-[60px] h-2 bg-black/20 rounded-full blur-sm"
                initial={{ left: "10%", width: "40px", opacity: 0.5 }}
                animate={{
                    left: ["10%", "50%", "90%"],
                    width: ["40px", "20px", "40px"], // Smaller when high
                    opacity: [0.5, 0.2, 0.5] // Fainter when high
                }}
                transition={{ duration: 1.5, times: [0, 0.5, 1], ease: "linear" }}
            />
        </div>
    );
};

export default VolleyballAnimation;
