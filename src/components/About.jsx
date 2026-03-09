import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="mx-auto frosted-card relative overflow-hidden my-10">
                    {/* Stars specific to about card mimicking original */}
                    <div className="absolute inset-0 w-full h-full -z-10 opacity-70 pointer-events-none" style={{
                        backgroundImage: `radial-gradient(3px 3px at 20px 30px, #ffffff99, transparent),
                                          radial-gradient(2px 2px at 80px 120px, #ffffff77, transparent),
                                          radial-gradient(2px 2px at 200px 80px, #ffffff55, transparent),
                                          radial-gradient(3px 3px at 400px 200px, #ffffff66, transparent),
                                          radial-gradient(2px 2px at 600px 400px, #ffffff44, transparent),
                                          radial-gradient(4px 4px at 150px 350px, #ffffffaa, transparent),
                                          radial-gradient(2px 2px at 250px 150px, #ffffff77, transparent),
                                          radial-gradient(2px 2px at 300px 250px, #ffffff55, transparent),
                                          radial-gradient(3px 3px at 500px 100px, #ffffff66, transparent),
                                          radial-gradient(2px 2px at 80px 300px, #ffffff44, transparent),
                                          radial-gradient(2px 2px at 450px 350px, #ffffff88, transparent),
                                          radial-gradient(3px 3px at 350px 50px, #ffffff99, transparent),
                                          radial-gradient(2px 2px at 550px 250px, #ffffff55, transparent),
                                          radial-gradient(2.5px 2.5px at 100px 50px, #ffffff88, transparent),
                                          radial-gradient(2px 2px at 50px 250px, #ffffff66, transparent),
                                          radial-gradient(3px 3px at 120px 400px, #ffffff99, transparent),
                                          radial-gradient(2px 2px at 320px 180px, #ffffff77, transparent),
                                          radial-gradient(2px 2px at 420px 280px, #ffffff55, transparent),
                                          radial-gradient(4px 4px at 580px 120px, #ffffffaa, transparent),
                                          radial-gradient(2px 2px at 20px 380px, #ffffff44, transparent),
                                          radial-gradient(2px 2px at 480px 380px, #ffffff88, transparent),
                                          radial-gradient(3px 3px at 280px 80px, #ffffff99, transparent),
                                          radial-gradient(2px 2px at 520px 280px, #ffffff55, transparent),
                                          radial-gradient(2.5px 2.5px at 150px 80px, #ffffff88, transparent),
                                          radial-gradient(2px 2px at 80px 280px, #ffffff66, transparent)`,
                        backgroundSize: '500px 500px',
                        backgroundRepeat: 'repeat',
                        animation: 'moveStars 80s linear infinite'
                    }}></div>

                    <div style={{ padding: "13px" }} className="text-center mb-8">
                        <div style={{ padding: "13px", margin: "12px" }} className="inline-flex items-center gap-2.5 bg-white/15 border border-white/30 shadow-[0_0_25px_rgba(255,255,255,0.5)] text-white px-4 py-1.5 rounded-2xl font-semibold tracking-[2px] uppercase text-sm backdrop-blur-[20px] relative z-10">
                            <span className="spark-icon">✦</span>
                            <span>ABOUT</span>
                            <span className="spark-icon">✦</span>
                        </div>

                        <h3 className="mt-6 text-2xl md:text-3xl font-medium tracking-[1.5px] text-[#f0f0f0] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] relative z-10">
                            Code - Create - Discover
                        </h3>

                        <p style={{ margin: "7px" }} className="mt-2 text-lg md:text-xl tracking-[1.2px] text-[#f0f0f0] drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] mb-5">
                            Journey through <strong>Code</strong>, <strong>Creativity</strong>, and <strong>Discovery</strong>.
                        </p>
                    </div>

                    <div className="text-center text-[#f5f5f5] leading-[1.7] mx-auto px-5 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">

                        <p style={{ paddingBottom: "30px" }} className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 px-2 sm:px-3 md:px-4">
                            I'm <strong>Sumit</strong>, a <strong>.NET Developer</strong> who loves turning ideas into interactive,
                            meaningful digital experiences.
                            With 1–2 years of experience navigating both <strong>frontend and backend realms</strong>, I craft systems
                            where <em className="italic">logic dances with design and performance meets elegance</em>.
                        </p>

                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl italic text-[#ddd] px-2 sm:px-3 md:px-4">
                            Beyond the screen, I find inspiration in <strong>cooking and reading</strong>, where creativity takes a
                            different form — experimenting with flavors and stories that spark new perspectives.
                            Every project I build carries a bit of that curiosity and passion for exploring the unknown.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
