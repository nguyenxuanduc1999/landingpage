import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const BlurText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const words = text.split(' ');

  return (
    <p ref={ref} className={`flex flex-wrap justify-center gap-y-[0.1em] ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={
            isInView
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [50, -5, 0],
                }
              : { filter: 'blur(10px)', opacity: 0, y: 50 }
          }
          transition={{
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: 'easeOut',
            delay: (i * 100) / 1000,
          }}
          className="inline-block"
          style={{ marginRight: '0.28em' }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
};
