import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Tech Stack", href: "#tech" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const handleNavClick = (href) => {
        setIsOpen(false);

        // If not on landing page, navigate first
        if (location.pathname !== "/") {
            navigate("/");

            setTimeout(() => {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 120);
        } else {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <nav
            style={{ padding: "9px" }}
            className={`fixed top-0 w-full z-50 transition-all duration-400 ${scrolled
                ? "bg-black/55 backdrop-blur-[16px] border-b border-white/15 shadow-[0_0_35px_rgba(0,212,255,0.25)]"
                : "bg-black/20 backdrop-blur-[16px] border-b border-white/5 shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center transition-all duration-300">

                {/* Logo */}
                <button
                    onClick={() => navigate("/")}
                    className="font-bold text-2xl uppercase tracking-[1.5px] text-white hover:text-[#00d4ff] drop-shadow-[0_0_12px_rgba(0,212,255,0.6)] hover:drop-shadow-[0_0_25px_rgba(0,212,255,0.9)] transition-all duration-300"
                >
                    Sumit Shah
                </button>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => handleNavClick(link.href)}
                            className="relative text-[#e0e0e0] font-medium mx-[15px] text-[1rem] transition-all duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-0 hover:after:w-full after:h-[2px] after:bg-gradient-to-r after:from-white after:to-[#00d4ff] after:transition-all after:duration-300"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-neutral-900 border-b border-neutral-800"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.href)}
                                    className="text-left text-gray-300 hover:text-white py-3 text-lg font-medium border-b border-neutral-800/50 last:border-0"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;