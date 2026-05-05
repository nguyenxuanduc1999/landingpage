import React from 'react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';
import { ScrollLinkedText } from './ScrollLinkedText';

export const About: React.FC = () => {
  return (
    <section className="bg-black w-full py-16 sm:py-24 md:py-32 px-4 md:px-6">
      <div className="liquid-glass rounded-2xl md:rounded-[2rem] p-8 sm:p-12 md:p-16 lg:p-24 max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-8 md:gap-12">
        <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-medium">
          Visual arts
        </span>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9]">
          <WordsPullUpMultiStyle
            segments={[
              { text: "I am Xuan Duc Nguyen,", className: "font-normal text-primary" },
              { text: "a self-taught director.", className: "font-serif italic text-primary" },
              { text: "I have skills in color grading, visual effects, and narrative design.", className: "font-normal text-primary" }
            ]}
            className="justify-center"
          />
        </div>

        <div className="max-w-2xl mt-4 sm:mt-8">
          <ScrollLinkedText
            text="Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals."
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed justify-center"
          />
        </div>
      </div>
    </section>
  );
};
