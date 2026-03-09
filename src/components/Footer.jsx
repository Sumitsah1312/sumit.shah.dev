import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Terminal, ArrowUpRight, Activity } from 'lucide-react';
import { PROFILE } from '../data';

const Footer = () => {
    return (
        <footer className="relative w-full mt-24 overflow-hidden">

            {/* Massive Background Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 select-none">
                <h1 className="text-[18vw] font-black text-white/[0.015] tracking-tighter whitespace-nowrap">
                    SUMIT SHAH
                </h1>
            </div>

            {/* Main Wrapper */}
            <div
                style={{ padding: "80px 80px 50px 80px", marginTop: "40px" }}
                className="w-full bg-[#090b14]/80 backdrop-blur-3xl border-t border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >

                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00d4ff]/10 blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Brand Section */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-10">

                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 mb-6"
                            >
                                <div className="p-4 bg-black border border-white/10 flex items-center justify-center rounded-xl">
                                    <Terminal className="w-8 h-8 text-[#00d4ff]" />
                                </div>

                                <span className="text-3xl md:text-4xl font-black tracking-widest text-white uppercase">
                                    SUMIT<span className="text-[#00d4ff] font-light">SHAH</span>
                                </span>
                            </motion.div>

                            <p className="text-[#a1a1aa] text-[1.1rem] leading-relaxed max-w-md">
                                Engineering robust backend architectures and delivering scalable enterprise solutions with precision.
                            </p>
                        </div>

                        {/* System Status */}
                        <div
                            style={{ padding: "10px 18px" }}
                            className="inline-flex items-center gap-3 bg-black/60 border border-white/5 w-fit shadow-[inset_0_0_15px_rgba(255,255,255,0.02)] rounded-xl"
                        >
                            <div className="relative flex h-3.5 w-3.5 items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                            </div>

                            <span className="text-sm font-semibold text-[#c0c5d0] uppercase tracking-widest">
                                All Systems Operational
                            </span>
                        </div>

                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:col-span-1"></div>

                    {/* Navigation */}
                    <div className="lg:col-span-3">

                        <ul style={{ padding: "15px" }} className="space-y-5">
                            {['About', 'Tech Stack', 'Projects', 'Experience'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(' ', '')}`}
                                        className="group flex items-center text-[#a1a1aa] hover:text-white transition-colors duration-300"
                                    >
                                        <span className="w-0 overflow-hidden group-hover:w-6 transition-all duration-300 text-[#00d4ff] font-bold">
                                            →
                                        </span>

                                        <span className="group-hover:translate-x-2 transition-transform duration-300 font-medium text-lg">
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* Social Links */}
                    <div className="lg:col-span-3">



                        <div className="flex flex-col gap-4">

                            {/* LinkedIn */}
                            <a
                                href={PROFILE.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                style={{ padding: "16px 18px" }}
                                className="flex items-center justify-between bg-white/5 border border-white/10 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300 group rounded-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <Linkedin className="w-5 h-5 text-[#c0c5d0] group-hover:text-[#00d4ff]" />
                                    <span className="font-semibold text-white tracking-wide">LinkedIn</span>
                                </div>

                                <ArrowUpRight className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#00d4ff]" />
                            </a>

                            {/* GitHub */}
                            <a
                                href={PROFILE.github}
                                target="_blank"
                                rel="noreferrer"
                                style={{ padding: "16px 18px" }}
                                className="flex items-center justify-between bg-white/5 border border-white/10 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300 group rounded-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <Github className="w-5 h-5 text-[#c0c5d0] group-hover:text-[#00d4ff]" />
                                    <span className="font-semibold text-white tracking-wide">GitHub</span>
                                </div>

                                <ArrowUpRight className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#00d4ff]" />
                            </a>

                            {/* Email */}
                            <a
                                href={`mailto:${PROFILE.email}`}
                                style={{ padding: "16px 18px" }}
                                className="flex items-center justify-between bg-white/5 border border-white/10 hover:bg-[#00d4ff]/10 hover:border-[#00d4ff]/40 transition-all duration-300 group rounded-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-[#c0c5d0] group-hover:text-[#00d4ff]" />
                                    <span className="font-semibold text-white tracking-wide">Email</span>
                                </div>

                                <ArrowUpRight className="w-4 h-4 text-[#a1a1aa] group-hover:text-[#00d4ff]" />
                            </a>

                        </div>

                    </div>

                </div>

                {/* Bottom Section */}
                <div
                    style={{ marginTop: "70px", paddingTop: "30px" }}
                    className="border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                    <p className="text-[#a1a1aa] font-medium tracking-wide">
                        © {new Date().getFullYear()} Sumit Shah. All rights reserved.
                    </p>

                    <p className="text-[#80808a] text-sm flex items-center gap-2 bg-black/40 px-5 py-2 border border-white/5 rounded-xl uppercase tracking-widest font-semibold">
                        Powered By <Activity className="w-4 h-4 text-[#00d4ff]" /> React & Tailwind
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;