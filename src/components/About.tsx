import { motion } from 'framer-motion';
import { dummyData } from '../data/dummyData';
import { FiMail, FiMapPin, FiTerminal } from 'react-icons/fi';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto relative">
            <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--color-neon-purple)_0%,_transparent_50%)] opacity-5 pointer-events-none -z-10 mix-blend-screen -translate-y-1/2"></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-20 flex items-center gap-6"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap">About Me</h2>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent flex-grow"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
                {/* Left Col - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full md:w-1/2 flex flex-col justify-center"
                >
                    <div className="glass-panel p-8 md:p-10 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)]"></div>
                        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
                            Hello! I'm <span className="text-white font-medium">{dummyData.hero.name}</span>. {dummyData.about.text}
                        </p>
                        <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                            My current focus is on building accessible, inclusive products and digital experiences at the intersection of design and engineering.
                        </p>

                        <div className="flex flex-col gap-4 mt-8 pt-8 border-t border-white/10">
                            <a href="mailto:hello@example.com" className="flex items-center gap-4 text-gray-300 hover:text-[var(--color-neon-blue)] transition-colors group w-fit">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[var(--color-neon-blue)]/10 transition-colors">
                                    <FiMail size={18} />
                                </div>
                                <span>hello@example.com</span>
                            </a>
                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                                    <FiMapPin size={18} />
                                </div>
                                <span>Tokyo, Japan</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Col - Skills */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full md:w-1/2 flex flex-col justify-center"
                >
                    <div className="flex items-center gap-3 mb-8">
                        <FiTerminal className="text-[var(--color-neon-blue)]" size={24} />
                        <h3 className="text-2xl font-semibold text-white">Technologies I Use</h3>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {dummyData.about.skills.map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * i }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="glass-panel px-6 py-4 flex items-center justify-center shadow-lg hover:border-[var(--color-neon-purple)] transition-colors cursor-default"
                            >
                                <span className="text-white font-medium tracking-wide">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
