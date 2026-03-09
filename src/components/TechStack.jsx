import { motion } from 'framer-motion';
import { SKILLS } from '../data';
import { Server, Database, Layout, Plug, Wrench, Cpu } from 'lucide-react';

const categoryIcons = {
    "Backend": <Server className="w-10 h-10 text-[#00d4ff] group-hover:scale-110 transition-transform duration-500" />,
    "Database": <Database className="w-10 h-10 text-[#00d4ff] group-hover:scale-110 transition-transform duration-500" />,
    "Frontend": <Layout className="w-10 h-10 text-[#00d4ff] group-hover:scale-110 transition-transform duration-500" />,
    "Integrations & Features": <Plug className="w-10 h-10 text-[#00d4ff] group-hover:scale-110 transition-transform duration-500" />,
    "Tools": <Wrench className="w-10 h-10 text-[#00d4ff] group-hover:scale-110 transition-transform duration-500" />
};

const getColSpan = (index) => {
    // Bento box layout mapping
    if (index === 0) return "lg:col-span-4 md:col-span-2";
    if (index === 1) return "lg:col-span-2 md:col-span-1";
    return "lg:col-span-2 md:col-span-1";
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 }
};

const TechStack = () => {
    return (
        <section style={{ margin: "14px" }} id="tech" className="py-24 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-[-10%] w-[50vh] h-[50vh] bg-[#00d4ff]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 left-[-10%] w-[50vh] h-[50vh] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ padding: "12px", margin: "12px" }}
                        className="inline-flex items-center gap-3 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] px-5 py-2 rounded-full font-semibold tracking-widest uppercase   backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.2)] mb-6"
                    >
                        <Cpu className="w-4 h-4 animate-pulse" />
                        <span>System Architecture</span>
                    </motion.div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
                    {Object.entries(SKILLS).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`group relative bg-[#090b14]/60 backdrop-blur-xl border border-white/5 p-8 rounded-3xl flex flex-col hover:-translate-y-2 transition-all duration-500 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(0,212,255,0.15)] overflow-hidden ${getColSpan(index)}`}
                        >
                            {/* Inner ambient glow orb */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00d4ff]/20 rounded-full blur-[60px] group-hover:bg-[#00d4ff]/40 transition-all duration-700 ease-in-out group-hover:scale-150 pointer-events-none"></div>

                            {/* Top thin gradient strictly on hover */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex items-center gap-5 mb-8 relative z-10">
                                <div style={{ padding: "12px" }} className="p-3 bg-black/40 rounded-2xl border border-white/5 shadow-inner group-hover:border-[#00d4ff]/30 transition-colors duration-300">
                                    {categoryIcons[category]}
                                </div>
                                <h3 className="text-2xl font-bold tracking-wide text-white group-hover:text-[#00d4ff] transition-colors duration-300">
                                    {category}
                                </h3>
                            </div>

                            <motion.div
                                className="flex flex-wrap gap-2.5 mt-auto relative z-10"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        style={{ padding: "5px", margin: "1px" }}
                                        className="px-4 py-2 bg-black/30 backdrop-blur-md text-[0.90rem] text-[#cdd1dc] rounded-xl border border-white/5 hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)] cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
