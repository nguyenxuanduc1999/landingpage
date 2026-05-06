import React from 'react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { ScrollLinkedText } from './ScrollLinkedText';

export const About: React.FC = () => {
  return (
    <section className="w-full px-4 md:px-6 relative z-20 -mt-32 pt-24 pb-4 bg-gradient-to-b from-transparent via-black/90 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_calc(100%-16px),transparent)] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_calc(100%-16px),transparent)]">
      <div className="liquid-glass rounded-2xl md:rounded-[2rem] p-8 sm:p-12 md:p-16 lg:p-24 max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-8 md:gap-12">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-medium">
          Visual arts
        </span>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9]">
          <WordsPullUpMultiStyle
            segments={[
              { text: "I am Xuan Duc,", className: "font-normal text-primary" },
              { text: "a Software Engineer.", className: "font-serif italic text-primary" },
              { text: "I have skills in computer vision, machine learning, and computer graphics.", className: "font-normal text-primary" }
            ]}
            className="justify-center"
          />
        </div>

        <div className="max-w-2xl mt-4 sm:mt-8">
          <ScrollLinkedText
            text="Results-oriented IT Professional with a Bachelor’s degree in Network Technology and practical experience in Software Development and DevOps. Proven ability to troubleshoot hardware/software issues, configure network infrastructures, and manage Linux/Windows environments."
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed justify-center"
          />
        </div>
      </div>
    </section>
  );
};
