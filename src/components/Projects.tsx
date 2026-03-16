import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { dummyData } from '../data/dummyData';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    });

    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);

    const isEven = index % 2 === 0;

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
                rotateX: rotateX
            }}
            className={`relative flex flex-col md:flex-row gap-8 items-center mb-32 ${isEven ? '' : 'md:flex-row-reverse'}`}
        >
            {/* Project Image Mockup */}
            <div className="w-full md:w-3/5 group cursor-pointer relative perspective-1000">
                <div className="relative glass-panel rounded-xl overflow-hidden aspect-video transition-transform duration-500 group-hover:rotate-y-5 group-hover:rotate-x-5 group-hover:scale-[1.02]">
                    {/* We'll use a cool abstract gradient placeholder if no image exists */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-black mix-blend-overlay"></div>
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                        {/* Visual representation of project */}
                        <div className="w-full h-full border border-white/10 rounded-lg shadow-2xl bg-black/50 backdrop-blur flex items-center justify-center relative overflow-hidden">
                            <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_var(--color-neon-blue)_0%,_transparent_50%)] opacity-20 -top-1/2 -left-1/2 mix-blend-screen animate-pulse duration-3000"></div>
                            <span className="text-4xl font-bold tracking-widest opacity-20 text-white select-none">{project.title.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Info */}
            <div className={`w-full md:w-2/5 flex flex-col ${isEven ? 'md:items-end text-left md:text-right' : 'md:items-start text-left'}`}>
                <p className="neon-text text-sm font-semibold tracking-wider mb-2">Featured Project</p>
                <h3 className="text-3xl font-bold text-white mb-6">{project.title}</h3>

                <div className="glass-panel p-6 mb-6 z-10 w-[110%] md:-mx-8">
                    <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm lg:text-base">
                        {project.description}
                    </p>
                </div>

                <ul className={`flex flex-wrap gap-4 text-sm text-[var(--color-text-secondary)] font-mono mb-8 ${isEven ? 'justify-end' : 'justify-start'}`}>
                    {project.tags.map((tag: string) => (
                        <li key={tag} className="bg-white/5 px-3 py-1 rounded-full border border-white/5">{tag}</li>
                    ))}
                </ul>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors">
                        <FiGithub size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[var(--color-neon-blue)] transition-colors">
                        <FiExternalLink size={24} />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-20 flex items-center gap-6"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white whitespace-nowrap">Selected Works</h2>
                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent flex-grow"></div>
            </motion.div>

            <div className="mt-10">
                {dummyData.projects.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                ))}
            </div>
        </section>
    );
}
