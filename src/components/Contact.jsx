import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import { PROFILE } from '../data';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background ambiance */}
            <div className="absolute top-[20%] right-[-10%] w-[50vh] h-[50vh] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-[#00d4ff]/10 rounded-full blur-[150px] pointer-events-none -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ padding: "12px", margin: "12px" }}
                        className="inline-flex items-center gap-3 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] px-5 py-2 rounded-full font-semibold tracking-widest uppercase   backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.2)] mb-6"
                    >
                        <MessageSquare className="w-4 h-4 animate-pulse" />
                        <span>Let's Connect</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] mb-4"
                    >
                        Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-purple-400 drop-shadow-[0_0_15px_rgba(0,212,255,0.4)]">Conversation</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ padding: "12px", margin: "12px" }}
                        className="text-lg text-[#a1a1aa] mx-auto"
                    >
                        Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    style={{ padding: "12px", margin: "12px" }}
                    className="grid lg:grid-cols-5 gap-8 bg-[#090b14]/70 backdrop-blur-2xl border border-white/5 p-2 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden relative"
                >
                    {/* Left Panel: Contact Info */}
                    <div style={{ padding: "12px", margin: "12px" }} className="lg:col-span-2 bg-gradient-to-br from-[#0f111a] to-[#05060a] p-10 md:p-12 rounded-[2.2rem] border border-white/5 relative overflow-hidden group">
                        {/* Interactive glow inside the left panel */}
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#00d4ff]/10 rounded-full blur-[70px] group-hover:bg-[#00d4ff]/20 transition-all duration-700 ease-in-out group-hover:scale-125"></div>

                        <h3 className="text-3xl font-bold text-white mb-6 relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]">Contact <span className="text-[#00d4ff]">Me</span></h3>
                        <p className="text-[#a1a1aa] leading-relaxed mb-10 relative z-10 text-[1.05rem]">
                            Send me a message and let's build something scalable and production-ready.
                        </p>

                        <div className="space-y-6 relative z-10">
                            {[
                                { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
                                { icon: Linkedin, label: "LinkedIn Profile", href: PROFILE.linkedin },
                                { icon: Github, label: "GitHub Repositories", href: PROFILE.github }
                            ].map((item, i) => (
                                <a key={i} href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-5 p-4 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 text-[#cdd1dc] hover:text-white transition-all duration-300 group/link">
                                    <div className="p-3 bg-black/40 rounded-xl border border-white/5 shadow-inner group-hover/link:border-[#00d4ff]/40 group-hover/link:shadow-[0_0_15px_rgba(0,212,255,0.2)] transition-all duration-300">
                                        <item.icon className="w-5 h-5 text-white group-hover/link:text-[#00d4ff] transition-colors" />
                                    </div>
                                    <span className="font-medium tracking-wide">{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Panel: Form */}
                    <div className="lg:col-span-3 p-8 md:p-12">
                        <form className="space-y-6 flex flex-col h-full justify-center">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2 group">
                                    <label className="text-sm font-semibold text-[#a1a1aa] uppercase tracking-wider pl-1 group-focus-within:text-[#00d4ff] transition-colors">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-black/50 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2 group">
                                    <label className="text-sm font-semibold text-[#a1a1aa] uppercase tracking-wider pl-1 group-focus-within:text-[#00d4ff] transition-colors">Your Email</label>
                                    <input
                                        type="email"
                                        className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-black/50 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 group">
                                <label className="text-sm font-semibold text-[#a1a1aa] uppercase tracking-wider pl-1 group-focus-within:text-[#00d4ff] transition-colors">Message</label>
                                <textarea
                                    rows={5}
                                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-black/50 focus:shadow-[0_0_15px_rgba(0,212,255,0.1)] transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project or what you're looking for..."
                                />
                            </div>

                            <button type="button" className="btn-primary-glow flex justify-center items-center gap-3 w-full sm:w-auto px-8 py-4 mt-4 mt-auto rounded-2xl text-[1.1rem]">
                                <span>Send Message</span>
                                <Send className="w-5 h-5 -mt-1" />
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
