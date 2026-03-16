import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: 'transparent',
            border: '2px solid rgba(0, 243, 255, 0.5)',
            boxShadow: '0 0 10px rgba(0, 243, 255, 0.3)',
            transition: {
                type: 'spring',
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            height: 48,
            width: 48,
            backgroundColor: 'rgba(188, 19, 254, 0.2)',
            border: '2px solid rgba(188, 19, 254, 0.8)',
            boxShadow: '0 0 20px rgba(188, 19, 254, 0.5)',
            transition: {
                type: 'spring',
                stiffness: 500,
                damping: 28,
                mass: 0.5
            }
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-screen"
                variants={variants}
                animate={isHovered ? 'hover' : 'default'}
            />
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 mix-blend-difference"
                style={{ left: mousePosition.x, top: mousePosition.y, transform: isHovered ? 'translate(-50%, -50%) scale(0)' : 'translate(-50%, -50%) scale(1)' }}
            />
        </>
    );
}
