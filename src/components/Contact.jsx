import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
    Mail,
    Linkedin,
    Github,
    Send,
    MessageSquare,
    CheckCircle,
    AlertCircle,
    Loader2,
} from "lucide-react";
import { PROFILE } from "../data";

/* EmailJS Config */
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';
const Contact = () => {
    const formRef = useRef(null);

    const [status, setStatus] = useState("idle");

    const [form, setForm] = useState({
        from_name: "",
        from_email: "",
        from_phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !form.from_name.trim() ||
            !form.from_email.trim() ||
            !form.from_phone.trim() ||
            !form.message.trim()
        )
            return;

        setStatus("sending");

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );

            setStatus("success");

            setForm({
                from_name: "",
                from_email: "",
                from_phone: "",
                message: "",
            });

            setTimeout(() => setStatus("idle"), 5000);
        } catch (err) {
            console.error("EmailJS error:", err);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

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
                        style={{ padding: "14px", margin: "14px" }}
                        className="inline-flex items-center gap-3 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] px-5 py-2 rounded-full font-semibold tracking-widest uppercase backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.2)] mb-6"
                    >
                        <MessageSquare className="w-4 h-4 animate-pulse" />
                        <span>Let's Connect</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4"
                    >
                        Start a{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-purple-400">
                            Conversation
                        </span>
                    </motion.h2>

                    <p className="text-lg text-[#a1a1aa]">
                        Whether you have a question, a project idea, or just want to say hi.
                    </p>
                </div>

                <div style={{ padding: "20px" }} className="grid lg:grid-cols-5 gap-8 bg-[#090b14]/70 backdrop-blur-2xl border border-white/5 p-2 rounded-[2.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.5)]">

                    {/* Contact Info */}
                    <div style={{ padding: "20px" }} className="lg:col-span-2 bg-gradient-to-br from-[#0f111a] to-[#05060a] p-10 rounded-[2.2rem] border border-white/5">
                        <h3 className="text-3xl font-bold text-white mb-6">
                            Contact <span className="text-[#00d4ff]">Me</span>
                        </h3>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: PROFILE.email, href: `mailto:${PROFILE.email}` },
                                { icon: Linkedin, label: "LinkedIn Profile", href: PROFILE.linkedin },
                                { icon: Github, label: "GitHub Repositories", href: PROFILE.github },
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 text-[#cdd1dc] hover:text-white transition"
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span>{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div style={{ padding: "12px" }} className="lg:col-span-3 p-8 md:p-12">
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid md:grid-cols-3 gap-6">
                                <input
                                    type="text"
                                    name="from_name"
                                    value={form.from_name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    style={{ padding: "12px", margin: "12px" }}
                                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500"
                                />

                                <input
                                    type="email"
                                    name="from_email"
                                    value={form.from_email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    style={{ padding: "12px", margin: "12px" }}
                                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500"
                                />

                                <input
                                    type="tel"
                                    name="from_phone"
                                    value={form.from_phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number"
                                    style={{ padding: "12px", margin: "12px" }}
                                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500"
                                />
                            </div>

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                placeholder="Your Message"
                                style={{ padding: "15px", margin: "12px" }}
                                className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-gray-500"
                            />

                            {/* Success */}
                            {status === "success" && (
                                <div className="flex items-center gap-3 text-green-400">
                                    <CheckCircle size={18} />
                                    Message sent successfully
                                </div>
                            )}

                            {/* Error */}
                            {status === "error" && (
                                <div className="flex items-center gap-3 text-red-400">
                                    <AlertCircle size={18} />
                                    Something went wrong
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="btn-primary-glow flex items-center gap-3 px-8 py-4 rounded-2xl"
                            >
                                {status === "sending" ? (
                                    <>
                                        <Loader2 className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;