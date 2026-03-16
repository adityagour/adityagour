import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 w-full z-40 px-6 py-4 flex justify-between items-center bg-transparent backdrop-blur-sm border-b border-white/5"
        >
            <div className="text-xl font-bold tracking-wider group cursor-pointer">
                <span className="text-white">ALEX</span>
                <span className="neon-text ml-1 opacity-80 group-hover:opacity-100 transition-opacity">CHEN</span>
            </div>

            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
                <a href="#home" className="text-gray-300 hover:text-white transition-colors relative group">
                    HOME
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-neon-blue)] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors relative group">
                    PROJECTS
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-neon-blue)] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors relative group">
                    ABOUT
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-neon-blue)] transition-all duration-300 group-hover:w-full"></span>
                </a>
            </div>

            <button className="glass-button text-sm">
                CONTACT ME
            </button>
        </motion.nav>
    );
}
