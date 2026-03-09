import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../data";
import { ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {

    const featuredProjects = PROJECTS.slice(0, 4); // show first 4

    return (
        <section id="projects" className="py-28 bg-[#05060a] relative overflow-hidden">

            {/* Heading */}
            {/* Heading */}
            <div className="text-center mb-16">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{ padding: "10px" }}
                    className="inline-flex items-center gap-3 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] px-5 py-2 rounded-full font-semibold tracking-widest uppercase backdrop-blur-md shadow-[0_0_20px_rgba(0,212,255,0.2)] mb-6"
                >
                    <Code2 className="w-4 h-4" />
                    <span >My Projects</span>
                </motion.div>



                <p style={{ padding: "12px" }} className="text-gray-400 mt-3  mx-auto">
                    Some of the work I've built recently.
                </p>

            </div>
            <div style={{ padding: "10px" }} className="flex justify-end mt-16">

                <Link
                    to="/projects"
                    style={{ padding: "12px", marginRight: "25px" }}
                    className="group flex items-center gap-2 px-8 py-3 rounded-full border border-indigo-500/40 text-white hover:bg-indigo-500/10 transition"
                >
                    View All Projects
                    <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition" />
                </Link>

            </div>

            {/* Cards */}
            <div style={{ padding: "10px", margin: "30px" }} className="mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {featuredProjects.map((project, i) => (

                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        style={{ padding: "12px" }}
                        className="max-w-lg group bg-[#0b0f1a] border border-white/10 rounded-xl overflow-hidden shadow-xl cursor-pointer"
                    >

                        {/* Image */}
                        <div className="h-[180px] overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        {/* Title */}
                        <div className="p-4 text-center">
                            <h3 className="text-white font-semibold text-sm">
                                {project.title}
                            </h3>
                        </div>

                    </motion.div>

                ))}

            </div>

            {/* View All Button */}


        </section>
    );
};

export default Projects;