import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({ segments, className = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring' as const, damping: 20, stiffness: 100 } },
  };

  const wordsWithStyles: { word: string; className: string }[] = [];
  
  segments.forEach((segment) => {
    const words = segment.text.split(' ');
    words.forEach((word) => {
      wordsWithStyles.push({
        word,
        className: segment.className || '',
      });
    });
  });

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={`inline-flex flex-wrap ${className}`}
    >
      {wordsWithStyles.map((itemObj, i) => (
        <motion.span
          key={i}
          variants={item}
          className={`inline-block ${itemObj.className}`}
        >
          {itemObj.word}
          {i !== wordsWithStyles.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.div>
  );
};
