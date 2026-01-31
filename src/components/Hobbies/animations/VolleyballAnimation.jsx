import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VolleyballAnimation = () => {
    const [outcome, setOutcome] = useState('SUCCESS'); // SUCCESS (200), CLIENT_ERR (400), SERVER_ERR (503)

    useEffect(() => {
        const outcomes = ['SUCCESS', 'CLIENT_ERR', 'SERVER_ERR'];
        const interval = setInterval(() => {
            setOutcome(outcomes[Math.floor(Math.random() * outcomes.length)]);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const getBallAnimation = () => {
        switch (outcome) {
            case 'SUCCESS': // Rally: P1 -> P2 -> P1 (200 OK)
                return {
                    left: ["15%", "50%", "85%", "50%", "15%"],
                    bottom: ["25%", "85%", "25%", "65%", "20%"],
                    rotate: [0, 180, 360, 540, 720],
                    scale: [1, 1, 1, 1, 1]
                };
            case 'CLIENT_ERR': // P1 -> P2 -> Drop (400 Bad Request)
                return {
                    left: ["15%", "50%", "85%"],
                    bottom: ["25%", "85%", "10%"], // Drops to floor
                    rotate: [0, 180, 300],
                    scale: [1, 1, 0.8]
                };
            case 'SERVER_ERR': // P1 -> Net -> Drop (503 Service Unavailable)
                return {
                    left: ["15%", "48%", "45%"], // Hits net
                    bottom: ["25%", "60%", "10%"], // Falls back
                    rotate: [0, 90, 45],
                    scale: [1, 1, 1]
                };
            default: return {};
        }
    };

    const getMessage = () => {
        switch (outcome) {
            case 'SUCCESS': return { code: "200", text: "ACK_RECEIVED", color: "text-matrix" };
            case 'CLIENT_ERR': return { code: "400", text: "BAD_REQUEST (DROP)", color: "text-yellow-500" };
            case 'SERVER_ERR': return { code: "503", text: "SERVICE_UNAVAILABLE", color: "text-red-500" };
            default: return {};
        }
    };

    const msg = getMessage();

    return (
        <div className="w-full h-full relative overflow-hidden bg-dark-900/50 flex items-center justify-center font-mono">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#00FF41_1px,transparent_1px),linear-gradient(to_bottom,#00FF41_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            {/* Net / Firewall */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-2 h-40 z-10 flex flex-col items-center">
                <div className="w-full h-full bg-matrix/20 border-x border-matrix/50 relative overflow-hidden">
                    <div className="absolute inset-0 animate-pulse bg-matrix/10" />
                    {/* Grid Pattern on Net */}
                    <div className="w-full h-full bg-[linear-gradient(45deg,transparent_45%,#00FF41_50%,transparent_55%)] bg-[size:6px_6px] opacity-30" />
                </div>
                <div className="w-32 h-1 bg-matrix/50 blur-sm absolute bottom-0" /> {/* Shadow */}
            </div>

            {/* PLAYER 1 (Client) */}
            <motion.div
                className="absolute bottom-16 left-[15%] w-12 h-24 origin-bottom flex flex-col items-center"
                animate={outcome === 'SERVER_ERR' ? {} : { y: [0, -30, 0] }} // Jump only if not service error (simplification)
                transition={{ duration: 0.8, loop: Infinity }}
            >
                <div className="w-6 h-6 rounded-full bg-slate-400 border border-slate-300 shadow-lg relative z-10" />
                <div className="w-8 h-12 bg-slate-600 rounded-lg -mt-1 relative z-0" />
                <div className="text-[8px] text-matrix mt-1">CLIENT</div>
            </motion.div>

            {/* PLAYER 2 (Server) */}
            <motion.div
                className="absolute bottom-16 right-[15%] w-12 h-24 origin-bottom flex flex-col items-center"
                animate={outcome === 'SUCCESS' ? { y: [0, -30, 0], delay: 1 } : {}} // Jump to return if success
                transition={{ duration: 0.8 }}
            >
                <div className="w-6 h-6 rounded-full bg-slate-400 border border-slate-300 shadow-lg relative z-10" />
                <div className="w-8 h-12 bg-slate-600 rounded-lg -mt-1 relative z-0" />
                <div className="text-[8px] text-cyber-blue mt-1">SERVER</div>
            </motion.div>

            {/* The Packet (Ball) */}
            <motion.div
                key={outcome}
                className={`absolute w-8 h-8 rounded-lg border flex items-center justify-center font-black text-[8px] z-50 bg-dark-950
                    ${outcome === 'SERVER_ERR' ? 'border-red-500 text-red-500 shadow-red-500/50' :
                        outcome === 'CLIENT_ERR' ? 'border-yellow-500 text-yellow-500 shadow-yellow-500/50' :
                            'border-matrix text-matrix shadow-matrix/50'}
                 shadow-[0_0_15px_current]`}
                initial={{ left: "15%", bottom: "25%", rotate: 0 }}
                animate={getBallAnimation()}
                transition={{
                    duration: outcome === 'SUCCESS' ? 3 : 1.5,
                    times: outcome === 'SUCCESS' ? [0, 0.25, 0.5, 0.75, 1] : [0, 0.5, 1],
                    ease: "easeInOut"
                }}
            >
                REQ
            </motion.div>

            {/* Outcome Message */}
            <AnimatePresence>
                <motion.div
                    key={outcome + "_msg"}
                    className="absolute top-10 left-1/2 -translate-x-1/2 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: outcome === 'SUCCESS' ? 2 : 1.2 }}
                >
                    <div className={`text-4xl font-black tracking-tighter ${msg.color} drop-shadow-lg`}>
                        {msg.code}
                    </div>
                    <div className={`text-xs font-mono font-bold tracking-widest ${msg.color}`}>
                        {msg.text}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Floor Reflection */}
            <div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />
        </div>
    );
};

export default VolleyballAnimation;
