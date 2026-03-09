import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "../data";
import { GraduationCap, BookOpen, Calendar, Award } from "lucide-react";

/* Gradient per card */
const ACCENTS = [
    { from: "#6366f1", to: "#a855f7" },
    { from: "#06b6d4", to: "#3b82f6" },
];

const Education = () => {
    return (
        <section id="education" className="py-28 bg-[#05060a] relative overflow-hidden">

            {/* Subtle grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* ── HEADING ─────────────────────────────────── */}
            <div style={{ margin: "10px" }} className="text-center mb-16 relative">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ padding: "12px", margin: "15px" }}
                    className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/25 text-indigo-400 px-5 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
                >
                    <GraduationCap className="w-4 h-4" />
                    Education
                </motion.div>

            </div>

            {/* ── CARDS ───────────────────────────────────── */}
            <div style={{ padding: "13px", margin: "12px" }} className="mx-auto px-6 grid md:grid-cols-2 gap-6 relative">

                {/* Vertical connecting line (desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

                {EDUCATION.map((edu, i) => {
                    const acc = ACCENTS[i % ACCENTS.length];
                    return (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.12 }}
                            whileHover={{ y: -6 }}
                            style={{ padding: "10px" }}
                            className="group relative bg-[#0c101c] border border-white/[0.08] rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:border-white/20"
                        >
                            {/* Top color bar */}
                            <div
                                className="h-1 w-full"
                                style={{ background: `linear-gradient(90deg, ${acc.from}, ${acc.to})` }}
                            />

                            {/* Image Banner */}
                            <div className="relative h-[180px] overflow-hidden rounded-t-2xl">

                                <img
                                    src={edu.image}
                                    alt={edu.degree}
                                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />



                                {/* Index badge */}
                                {/* <span
                                    className="absolute top-4 left-4 text-4xl font-black"
                                    style={{
                                        background: `linear-gradient(135deg, ${acc.from}, ${acc.to})`,
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        opacity: 0.7
                                    }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span> */}

                                {/* Period */}
                                <div style={{ padding: "7px" }} className="absolute bottom-3 right-4 flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-black/60 border border-white/10 text-white/80 backdrop-blur-sm">
                                    <Calendar className="w-3 h-3" />
                                    {edu.period}
                                </div>

                            </div>

                            {/* Body */}
                            <div className="p-6">

                                {/* Degree */}
                                <h3 className="text-white font-bold text-base leading-snug mb-1">
                                    {edu.degree}
                                </h3>

                                {/* Institution + Board */}
                                <div className="flex flex-wrap items-center gap-2 mb-4">
                                    <span className="flex items-center gap-1.5 text-sm font-medium"
                                        style={{ color: acc.from }}>
                                        <BookOpen className="w-3.5 h-3.5" />
                                        {edu.institution}
                                    </span>
                                    <span className="text-gray-600">·</span>
                                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">
                                        {edu.board}
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                    {edu.description}
                                </p>

                                {/* Grade badge */}
                                <div style={{ padding: "14px", paddingLeft: "0px" }} className="flex items-center gap-2">
                                    <Award className="w-4 h-4" style={{ color: acc.from }} />
                                    <span className="text-xs text-gray-500">Result:</span>
                                    <span
                                        className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
                                        style={{
                                            background: `${acc.from}18`,
                                            padding: "7px",
                                            border: `1px solid ${acc.from}40`,
                                            color: acc.from,
                                        }}
                                    >
                                        {edu.grade}
                                    </span>
                                </div>

                            </div>
                        </motion.div>
                    );
                })}
            </div>

        </section>
    );
};

export default Education;
