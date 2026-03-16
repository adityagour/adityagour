import { motion } from 'framer-motion';
import Scene from './Scene';
import { dummyData } from '../data/dummyData';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* 3D Background */}
            <Scene />

            {/* Foreground Content */}
            <div className="container mx-auto px-6 relative z-10 pointer-events-none">
                <div className="max-w-3xl">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-[var(--color-text-secondary)] tracking-[0.2em] text-sm md:text-base font-medium mb-4 uppercase"
                    >
                        {dummyData.hero.subtitle}
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-6xl md:text-8xl font-black mb-6 tracking-tight text-white m-0"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        <span className="block">{dummyData.hero.name.split(' ')[0]}</span>
                        <span className="neon-text block">{dummyData.hero.name.split(' ')[1]}</span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="text-2xl md:text-4xl text-gray-300 font-light mb-10 m-0"
                    >
                        {dummyData.hero.title}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="flex gap-6 pointer-events-auto"
                    >
                        <button className="glass-button backdrop-blur-md px-8 py-4 pointer-events-auto">
                            VIEW MY WORK
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto cursor-pointer"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Scroll to Explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[var(--color-neon-blue)] to-transparent"
                />
            </motion.div>
        </section>
    );
}
