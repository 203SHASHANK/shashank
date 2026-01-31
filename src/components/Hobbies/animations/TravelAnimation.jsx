import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Server, Home } from 'lucide-react';

const TravelAnimation = () => {
    return (
        <div className="w-full h-full relative overflow-hidden bg-dark-900/50 font-mono">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(90deg,#00FF41_1px,transparent_1px),linear-gradient(180deg,#00FF41_1px,transparent_1px)] bg-[size:20px_20px]" />

            {/* Route PATH (Road/Connection) */}
            <div className="absolute top-1/2 left-[15%] right-[15%] h-1 bg-slate-800/50 -translate-y-1/2 flex items-center">
                <div className="w-full h-[1px] bg-matrix/20" />
                {/* Moving Data particles on line */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="w-10 h-full bg-gradient-to-r from-transparent via-matrix/30 to-transparent"
                        animate={{ left: ["-20%", "120%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>

            {/* GATEWAY 1: HOME (Left) */}
            <div className="absolute top-1/2 left-[10%] -translate-y-1/2 flex flex-col items-center z-10">
                <div className="relative p-3 bg-dark-950 border border-cyber-blue rounded-xl shadow-[0_0_15px_rgba(0,212,255,0.3)]">
                    <Home className="w-6 h-6 text-cyber-blue" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div className="mt-2 text-[8px] font-bold text-slate-400 tracking-widest text-center">
                    <div>LOCALHOST</div>
                    <div className="text-[6px] text-slate-600">127.0.0.1</div>
                </div>
            </div>

            {/* GATEWAY 2: OFFICE (Right) */}
            <div className="absolute top-1/2 right-[10%] -translate-y-1/2 flex flex-col items-center z-10">
                <div className="relative p-3 bg-dark-950 border border-matrix rounded-xl shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                    <Server className="w-6 h-6 text-matrix" />
                    {/* Floating Badge */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-matrix text-dark-950 text-[6px] font-black px-1 rounded">WAN</div>
                </div>
                <div className="mt-2 text-[8px] font-bold text-slate-400 tracking-widest text-center">
                    <div>CORP_GATEWAY</div>
                    <div className="text-[6px] text-slate-600">192.168.1.100</div>
                </div>
            </div>

            {/* THE TRANSPORT (BUS) */}
            <motion.div
                className="absolute top-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
                initial={{ left: "15%" }}
                animate={{
                    left: ["15%", "85%", "15%"], // Home -> Office -> Home
                }}
                transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                {/* Bus Icon/Shape */}
                <div className="relative group">
                    {/* Bus Body */}
                    <div className="w-16 h-8 bg-dark-850 border border-slate-600 rounded-md relative shadow-lg flex items-center justify-between px-1.5 overflow-hidden">
                        {/* Windows */}
                        <div className="flex gap-0.5">
                            <div className="w-2.5 h-3 bg-matrix/20 rounded-sm border border-matrix/10" />
                            <div className="w-2.5 h-3 bg-matrix/20 rounded-sm border border-matrix/10" />
                            <div className="w-2.5 h-3 bg-matrix/20 rounded-sm border border-matrix/10" />
                        </div>
                        {/* Driver Window */}
                        <div className="w-3 h-3 bg-cyber-blue/20 rounded-sm border border-cyber-blue/30" />

                        {/* Tech Label on Bus */}
                        <div className="absolute bottom-0.5 left-1 text-[5px] text-slate-500 font-bold uppercase tracking-tighter">
                            BUS_PROTOCOL
                        </div>
                    </div>

                    {/* Wheels */}
                    <div className="absolute -bottom-1.5 left-2 w-2.5 h-2.5 bg-dark-950 border border-slate-700 rounded-full animate-spin [animation-duration:1s]" />
                    <div className="absolute -bottom-1.5 right-2 w-2.5 h-2.5 bg-dark-950 border border-slate-700 rounded-full animate-spin [animation-duration:1s]" />

                    {/* Status Indicator sticking out */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="px-1 py-0.5 bg-matrix/10 border border-matrix/30 rounded text-[5px] text-matrix font-black whitespace-nowrap">
                            IN_TRANSIT
                        </div>
                        <div className="w-[1px] h-2 bg-matrix/30" />
                    </div>
                </div>
            </motion.div>

            {/* Status Panel */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-dark-950/80 border border-slate-800 rounded-lg backdrop-blur-sm flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-matrix animate-pulse" />
                    <span className="text-[8px] text-slate-400 font-bold tracking-widest">ROUTE: HOME_TO_OFFICE</span>
                </div>
                <div className="text-[8px] text-slate-500 border-l border-slate-700 pl-4 font-mono">
                    IP_HOPPING_ENABLED
                </div>
            </div>

        </div>
    );
};

export default TravelAnimation;
