import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedLetterProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
};

interface ScrollLinkedTextProps {
  text: string;
  className?: string;
}

export const ScrollLinkedText: React.FC<ScrollLinkedTextProps> = ({ text, className = '' }) => {
  const container = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={container} className={`flex flex-wrap ${className}`}>
      {characters.map((char, i) => {
        const charProgress = i / characters.length;
        const start = Math.max(0, charProgress - 0.1);
        const end = Math.min(1, charProgress + 0.05);

        return (
          <AnimatedLetter key={i} progress={scrollYProgress} range={[start, end]}>
            {char === ' ' ? '\u00A0' : char}
          </AnimatedLetter>
        );
      })}
    </p>
  );
};
