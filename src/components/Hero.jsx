import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-12"
                >
                    {/* Left: Profile Image */}
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src="/images/profile.png"
                            alt="Sumit Shah Profile"
                            className="w-[300px] md:w-[400px] h-auto rounded-full border-[5px] border-white/60 shadow-[0_0_25px_rgba(255,255,255,0.7)] hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.9)] transition-all duration-400"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h1 style={{ padding: "13px" }} className="text-4xl md:text-5xl lg:text-[3rem] font-bold mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]">
                            Hi, I'm <span className="text-[#00d4ff] drop-shadow-[0_0_30px_rgba(0,212,255,0.9)]">Sumit Shah</span>
                        </h1>
                        <p style={{ padding: "13px" }} className="text-xl md:text-[1.4rem] text-[#e0e0e0] mb-8">
                            Software Developer
                        </p>

                        <div style={{ padding: "13px" }} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="btn-primary-glow w-full sm:w-auto text-center"
                            >
                                Hire Me
                            </a>
                            <a
                                href="/pdf/SumitShah_CV.pdf"
                                download
                                className="btn-primary-glow w-full sm:w-auto text-center flex items-center justify-center gap-2"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
