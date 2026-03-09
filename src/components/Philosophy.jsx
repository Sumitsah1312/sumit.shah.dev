import { motion } from 'framer-motion';
import { PHILOSOPHY } from '../data';
import { Code, Layers, ShieldCheck, Heart, Lightbulb } from 'lucide-react';

const icons = [Code, Layers, ShieldCheck, Heart];

const Philosophy = () => {
    return (
        <section id="philosophy" className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
            {/* Background ambiance */}
            <div className="absolute top-[-20%] left-[-10%] w-[60vh] h-[60vh] bg-[#00d4ff]/5 rounded-full blur-[150px] pointer-events-none -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-3 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] px-5 py-2 rounded-full font-semibold tracking-widest uppercase text-xs backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.2)] mb-6"
                    >
                        <Lightbulb className="w-4 h-4 animate-pulse" />
                        <span>Core Values</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-4"
                    >
                        Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-purple-400 drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]">Philosophy</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-[#a1a1aa] max-w-2xl mx-auto"
                    >
                        The guiding principles behind my engineering and software design.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-7xl mx-auto">
                    {PHILOSOPHY.map((item, index) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="group relative bg-[#090b14]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:-translate-y-3 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(0,212,255,0.15)] overflow-hidden flex flex-col items-center text-center h-full"
                            >
                                {/* Subtle inner orb */}
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#00d4ff]/10 rounded-full blur-[40px] group-hover:bg-[#00d4ff]/20 transition-all duration-700 ease-in-out group-hover:scale-150 pointer-events-none"></div>

                                {/* Top Gradient Border on Hover */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="mb-6 bg-black/50 p-5 rounded-2xl border border-white/5 shadow-inner group-hover:border-[#00d4ff]/40 transition-colors duration-300 relative z-10">
                                    <Icon className="w-10 h-10 text-white group-hover:text-[#00d4ff] group-hover:scale-110 transition-all duration-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:drop-shadow-[0_0_15px_rgba(0,212,255,0.8)]" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-[#e0e0e0] group-hover:text-white transition-colors relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.1)]">{item.title}</h3>
                                <p className="text-[1rem] text-[#a1a1aa] leading-relaxed relative z-10 group-hover:text-[#c0c5d0] transition-colors">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
