'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only enable if pointer is fine (desktop / mouse)
    const media = window.matchMedia('(pointer: fine)');
    setIsFinePointer(media.matches);

    const updateMedia = (e: MediaQueryListEvent) => setIsFinePointer(e.matches);
    media.addEventListener('change', updateMedia);

    if (!media.matches) return;

    document.documentElement.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, select, textarea, .interactive-hover');
      const dragArea = target.closest('[data-cursor-drag]');
      
      if (dragArea) {
        setIsHovered(true);
        setCursorText('DRAG');
      } else if (interactive) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      media.removeEventListener('change', updateMedia);
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  if (!isFinePointer) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Diamond Aura */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 0.8 : isHovered ? (cursorText ? 2.5 : 1.6) : 1,
            rotate: 45,
            borderColor: isHovered ? '#F4E58A' : 'rgba(212, 169, 74, 0.45)',
            backgroundColor: cursorText ? 'rgba(0, 58, 47, 0.9)' : isHovered ? 'rgba(37, 112, 74, 0.2)' : 'rgba(0, 58, 47, 0)',
          }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="w-7 h-7 border border-gold-mid flex items-center justify-center backdrop-blur-[1px]"
        >
          {cursorText && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="-rotate-45 text-[7px] font-sans font-bold tracking-widest text-cream uppercase"
            >
              {cursorText}
            </motion.span>
          )}
        </motion.div>
      </motion.div>

      {/* Center Micro Diamond */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      >
        <motion.div
          animate={{
            scale: isClicking ? 1.5 : isHovered ? 0 : 1,
            rotate: 45,
          }}
          className="w-1.5 h-1.5 bg-gold-light"
        />
      </motion.div>
    </div>
  );
}
