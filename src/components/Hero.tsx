import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowUpRight, Play, Clock, Globe } from 'lucide-react';
import { BlurText } from './BlurText';

const NAV_ITEMS = ['Home', 'Voyages', 'Worlds', 'Innovation', 'Plan Launch'] as const;

export const Hero: React.FC = () => {
  const fadeUpVariant: Variants = {
    hidden: { filter: 'blur(10px)', opacity: 0, y: 20 },
    visible: (customDelay: number) => ({
      filter: 'blur(0px)',
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: customDelay, ease: 'easeOut' },
    }),
  };

  return (
    <section className="min-h-screen w-full bg-black relative flex flex-col overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 object-cover object-top" style={{ width: "120%", height: "120%" }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top"
        >
          <source
            // src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50 pt-[max(1rem,env(safe-area-inset-top))] px-4 sm:px-8 lg:px-16 flex flex-col items-stretch gap-3 md:items-center">
          {/* Mobile: scrollable links + CTA */}
          <div className="flex items-center gap-2 md:hidden w-full max-w-lg mx-auto">
            <div className="liquid-glass rounded-full py-1.5 pl-2 pr-1 min-w-0 flex-1 overflow-x-auto no-scrollbar">
              <nav className="flex items-center gap-0.5 w-max">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="shrink-0 px-2.5 py-1.5 text-xs font-medium text-white/90 transition-colors hover:text-white rounded-full hover:bg-white/5"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            <button
              type="button"
              className="shrink-0 bg-white text-black rounded-full px-3 py-2 text-xs font-semibold whitespace-nowrap flex items-center gap-1 transition-transform active:scale-95 sm:text-sm sm:px-4 sm:py-2"
            >
              Claim
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* Desktop: centered pill */}
          <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center justify-center">
            <nav className="flex items-center">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
            <button
              type="button"
              className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap flex items-center gap-1 ml-2 transition-transform hover:scale-105"
            >
              Claim a Spot
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center pt-[max(6.5rem,env(safe-area-inset-top)+5rem)] sm:pt-28 md:pt-24 px-4 sm:px-6 text-center">
          {/*<motion.div
            custom={0.4}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="liquid-glass rounded-full p-1 pl-1 pr-4 flex items-center gap-3 mb-6"
          >
            <span className="bg-white text-black px-3 py-1 text-xs font-semibold rounded-full">New</span>
            <span className="text-sm text-white/90">Maiden Crewed Voyage to Mars Arrives 2026</span>
          </motion.div>*/}

          <BlurText
            text="Welcome to my website"
            className="text-[clamp(2.25rem,9vw,5.5rem)] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-serif italic text-white leading-[0.85] sm:leading-[0.8] max-w-[min(100%,42rem)] px-1 tracking-[-0.03em] sm:tracking-[-0.04em] md:tracking-[-4px]"
          />

          <motion.p
            custom={0.8}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="mt-6 text-sm md:text-base text-white max-w-2xl font-light leading-snug sm:leading-tight px-1"
          >
            Nobody is truly perfect, so I am working hard to improve myself every day and become a better person—free from drama and scandal. Right now, I am living as if today could be my last. That’s partly why I always say, 'Thank you, for every morning that I wake up."
          </motion.p>

          <motion.div
            custom={1.1}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-center gap-6 mt-8"
          >
            <button className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-colors">
              Start Your Voyage
              <ArrowUpRight className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-white hover:text-white/80 transition-colors">
              View Liftoff
              <Play className="h-4 w-4 fill-current" />
            </button>
          </motion.div>

          <motion.div
            custom={1.3}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 mt-10 sm:mt-12 w-full max-w-[28rem] sm:max-w-none"
          >
            {/* Card 1 */}
            <div className="liquid-glass p-5 w-full max-w-[220px] sm:w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between">
              <Clock className="w-7 h-7 text-white mb-6" strokeWidth={1.5} />
              <div>
                <div className="font-serif italic text-white text-4xl tracking-[-1px] leading-none">34.5 Min</div>
                <div className="text-xs text-white/80 font-light mt-2">Average Videos Watch Time</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="liquid-glass p-5 w-full max-w-[220px] sm:w-[220px] rounded-[1.25rem] text-left flex flex-col justify-between">
              <Globe className="w-7 h-7 text-white mb-6" strokeWidth={1.5} />
              <div>
                <div className="font-serif italic text-white text-4xl tracking-[-1px] leading-none">2.8B+</div>
                <div className="text-xs text-white/80 font-light mt-2">Users Across the Globe</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div
          custom={1.4}
          initial="hidden"
          animate="visible"
          variants={fadeUpVariant}
          className="flex flex-col items-center gap-4 pb-8 pt-8"
        >
          {/*
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white">
            Collaborating with top aerospace pioneers globally
          </div>
          <div className="font-serif italic text-white text-2xl md:text-3xl tracking-tight flex items-center gap-12 md:gap-16 flex-wrap justify-center px-4 mt-2">
            <span>Aeon</span>
            <span className="opacity-50">·</span>
            <span>Vela</span>
            <span className="opacity-50">·</span>
            <span>Apex</span>
            <span className="opacity-50">·</span>
            <span>Orbit</span>
            <span className="opacity-50">·</span>
            <span>Zeno</span>
          </div>
          */}
        </motion.div>
      </div>
    </section>
  );
};
