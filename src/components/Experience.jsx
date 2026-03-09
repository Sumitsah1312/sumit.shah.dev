import { motion } from "framer-motion";
import { EXPERIENCE } from "../data";
import { Briefcase, Calendar, ChevronRight, Award } from "lucide-react";

const Experience = () => {
    return (
        <section id="experience" className="py-28 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 right-1/4 w-[32rem] h-[32rem] bg-[#00d4ff]/10 rounded-full blur-[150px] pointer-events-none -z-10 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-10 w-[24rem] h-[24rem] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

            <div className="mx-auto px-6 md:px-10 relative z-10">

                {/* Header */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ padding: "12px", margin: "12px" }}
                        className="inline-flex items-center gap-3 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] px-6 py-2.5 rounded-full font-semibold tracking-widest uppercase  backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.2)] mb-6"
                    >
                        <Award className="w-4 h-4 animate-pulse" />
                        <span>Experience</span>
                    </motion.div>


                </div>

                {/* Featured Experience Cards */}
                <div className="space-y-12" style={{ padding: "12px", margin: "13px" }}>
                    {EXPERIENCE.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.15,
                                duration: 0.7,
                                type: "spring",
                                stiffness: 50,
                            }}
                            className="group relative"
                        >
                            {/* Card Container */}
                            <div className="bg-[#090b14]/60 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_60px_rgba(0,212,255,0.2)] relative overflow-hidden flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

                                {/* Ambient inner glow */}
                                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00d4ff]/20 rounded-full blur-[80px] group-hover:bg-[#00d4ff]/30 transition-all duration-700 ease-in-out group-hover:scale-150 pointer-events-none"></div>

                                {/* Top highlight border */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00d4ff]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                {/* Left Side: Role details */}
                                <div
                                    style={{ padding: "24px", margin: "12px" }}
                                    className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8 relative z-10"
                                >

                                    {/* Mash Logo */}
                                    <div style={{ padding: "10px" }} className="p-5 bg-black/40 rounded-2xl border border-white/10 shadow-inner mb-7 flex items-center justify-center">
                                        <img
                                            src="/images/mashlogo.png"
                                            alt="Mash Virtual"
                                            className="w-20 md:w-24 h-auto rounded-full border-[6px] border-white/60 
      shadow-[0_0_30px_rgba(255,255,255,0.7)] 
      hover:scale-110 hover:shadow-[0_0_50px_rgba(255,255,255,0.9)] 
      transition-all duration-400"
                                        />
                                    </div>

                                    {/* Role */}
                                    <h3 style={{ padding: "10px" }} className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                                        {job.role}
                                    </h3>

                                    {/* Company */}
                                    <h4 style={{ padding: "10px" }} className="text-lg md:text-xl text-[#e0e0e0] font-medium tracking-wide mb-6">
                                        {job.company}
                                    </h4>

                                    {/* Period */}
                                    <div style={{ padding: "10px" }} className="inline-flex items-center justify-center gap-2.5 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-full px-6 py-2.5 text-[1rem] font-medium text-[#00d4ff] shadow-[inset_0_0_15px_rgba(0,212,255,0.05)] whitespace-nowrap">
                                        <Calendar size={18} />
                                        {job.period}
                                    </div>

                                </div>
                                {/* Right Side: Description */}
                                <div className="w-full lg:w-2/3 relative z-10 flex flex-col justify-center">
                                    <h5 style={{ padding: "14px" }} className="text-xl font-semibold text-[#a1a1aa] uppercase tracking-widest mb-4 flex items-center justify-center lg:justify-start gap-2">
                                        <ChevronRight className="w-4 h-4 text-[#00d4ff]" /> Role Overview
                                    </h5>
                                    <p style={{ padding: "14px" }} className="text-[#c0c5d0] leading-relaxed text-lg md:text-[1.15rem] text-center lg:text-left">
                                        {job.description}
                                    </p>

                                    {/* Optional tags block if we want to visually balance it */}
                                    <div style={{ padding: "14px" }} className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
                                        <span style={{ padding: "10px" }} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-[#a1a1aa] shadow-[0_2px_10px_rgba(0,0,0,0.2)]">Enterprise Modules</span>
                                        <span style={{ padding: "10px" }} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-[#a1a1aa] shadow-[0_2px_10px_rgba(0,0,0,0.2)]">Backend Architecture</span>
                                        <span style={{ padding: "10px" }} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-[#a1a1aa] shadow-[0_2px_10px_rgba(0,0,0,0.2)]">Secure APIs</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;