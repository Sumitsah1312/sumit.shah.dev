import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { PROJECTS } from "../data";
import { ArrowLeft, ExternalLink, Github, X, Terminal, CheckCircle2 } from "lucide-react";

const ProjectsPage = () => {
    const location = useLocation();

    // Check if we navigated here with a selected project state and open modal automatically
    const initialProjectId = location.state?.selectedProjectId;
    const initialProject = initialProjectId
        ? PROJECTS.find((p) => p.id === initialProjectId)
        : null;

    const [selectedProject, setSelectedProject] = useState(initialProject);
    const [isModalOpen, setIsModalOpen] = useState(!!initialProject);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isModalOpen]);

    const getProjectImage = (proj) => {
        return (
            proj?.image ||
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070"
        );
    };

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // We don't clear selectedProject immediately so the exit animation has data to show
    };

    return (
        <div className="container min-h-screen bg-[#05060a] pt-28 pb-20 relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-[#00d4ff]/5 blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] pointer-events-none"></div>

            <div className="mx-auto px-6 md:px-12 relative z-10">
                {/* Header */}
                <div className="mb-14">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-[#8a8a94] hover:text-white transition mb-6"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>

                    <h1 style={{ paddingTop: "50px" }} className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Project{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-purple-400">
                            Archive
                        </span>
                    </h1>


                </div>

                {/* Grid Layout for Cards */}
                <div style={{ paddingTop: "40px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => openModal(project)}
                            className="group flex flex-col bg-[#090b14]/70 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-[#00d4ff]/30 hover:shadow-[0_10px_30px_rgba(0,212,255,0.1)] transition-all duration-300 transform hover:-translate-y-2 relative"
                        >
                            {/* Image */}
                            <div className="h-56 relative overflow-hidden bg-black/50">
                                <div className="absolute inset-0 bg-[#00d4ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay"></div>
                                <img
                                    src={getProjectImage(project)}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-6 flex flex-col flex-grow relative z-20">
                                <h2 style={{ padding: "10px" }} className="text-xl font-bold text-white mb-4 group-hover:text-[#00d4ff] transition-colors line-clamp-2">
                                    {project.title}
                                </h2>

                                <div style={{ padding: "12px" }} className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-white/5">
                                    <div className="flex items-center gap-3">
                                        {project.github ? (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-[#a1a1aa] hover:text-white transition-colors"
                                                title="Source Code"
                                            >
                                                <Github size={20} />
                                            </a>
                                        ) : (
                                            <Github size={20} className="text-[#a1a1aa]/30 cursor-not-allowed" />
                                        )}

                                        {project.live ? (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="text-[#00d4ff]/80 hover:text-[#00d4ff] hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.8)] transition-all"
                                                title="Live Preview"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        ) : (
                                            <ExternalLink size={20} className="text-[#00d4ff]/20 cursor-not-allowed" />
                                        )}
                                    </div>
                                    <span style={{ padding: "7px" }} className="text-[10px] uppercase tracking-widest text-[#60606a] group-hover:text-[#a1a1aa] transition-colors font-bold">
                                        View Details →
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Popup */}
            <AnimatePresence>
                {isModalOpen && selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        ></motion.div>

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative w-full max-w-5xl bg-[#090b14] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col max-h-[90vh] z-10"
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 bg-black/50 hover:bg-white/10 border border-white/10 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-all transform hover:scale-110"
                            >
                                <X size={20} />
                            </button>

                            <div className="overflow-y-auto custom-scrollbar flex-grow flex flex-col md:flex-row">
                                {/* Left: Image Section */}
                                <div style={{ padding: "20px" }} className="w-full md:w-1/2 relative bg-black/50 border-b md:border-b-0 md:border-r border-white/10 min-h-[250px] md:min-h-full flex-shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#090b14] via-transparent to-transparent z-10 pointer-events-none opacity-80"></div>
                                    <img
                                        src={getProjectImage(selectedProject)}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover absolute inset-0"
                                    />
                                    <div className="absolute top-6 left-6 z-20">
                                        <div className="flex items-center gap-2 bg-black/50 border border-white/10 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest text-white/80 backdrop-blur-md">
                                            <Terminal size={12} className="text-[#00d4ff]" />
                                            Project Details
                                        </div>
                                    </div>
                                </div>

                                {/* Right: Details Section */}
                                <div style={{ padding: "10px" }} className="w-full md:w-1/2 p-6 md:p-10 flex flex-col">
                                    <h2 style={{ padding: "10px" }} className="text-3xl md:text-4xl font-black text-white mb-4">
                                        {selectedProject.title}
                                    </h2>

                                    <p style={{ padding: "10px" }} className="text-[#a1a1aa] text-sm md:text-base leading-relaxed mb-8">
                                        {selectedProject.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div style={{ padding: "10px" }} className="mb-8">
                                        <h4 style={{ padding: "7px" }} className="text-[10px] uppercase tracking-[0.2em] text-[#60606a] mb-3 font-bold">
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech?.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    style={{ padding: "5px" }}
                                                    className="px-3 py-1.5 text-xs bg-white/[0.04] border border-white/10 rounded-lg text-[#d0d0d5]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features (Optional) */}
                                    {selectedProject.features && selectedProject.features.length > 0 && (
                                        <div style={{ padding: "10px" }} className="mb-8">
                                            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#60606a] mb-3 font-bold">
                                                Key Features
                                            </h4>
                                            <ul style={{ padding: "7px" }} className="flex flex-col gap-2">
                                                {selectedProject.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#a1a1aa]">
                                                        <CheckCircle2 size={16} className="text-[#00d4ff] flex-shrink-0 mt-0.5" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div style={{ padding: "20px" }} className="mt-auto pt-6"></div>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-4 mt-auto pt-8">
                                        {selectedProject.github && (
                                            <a
                                                href={selectedProject.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{ padding: "10px" }}
                                                className="flex-1 min-w-[140px] flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/30 transition-all duration-300 font-bold text-white text-sm group shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                                            >
                                                <Github size={20} className="group-hover:scale-110 transition-transform duration-300" />
                                                <span>Source Code</span>
                                            </a>
                                        )}

                                        {selectedProject.live && (
                                            <a
                                                href={selectedProject.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                style={{ padding: "10px" }}
                                                className="flex-1 min-w-[140px] flex items-center justify-center gap-3 px-6 py-4 bg-[#00d4ff]/5 border border-[#00d4ff]/20 text-[#00d4ff] rounded-2xl hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] transition-all duration-300 font-black text-sm group relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                                <ExternalLink size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                                                <span>Live Preview</span>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background-color: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
                .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                    background-color: rgba(0, 212, 255, 0.4);
                }
            `}} />
        </div >
    );
};

export default ProjectsPage;