import React from 'react';

const Card1Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
    <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
  </svg>
);

const Card2Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z" />
  </svg>
);

const Card3Icon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="currentColor">
    <path d="M17 9H7v8h10V9zm-2 6H9v-4h6v4zM9 21h2v-2H9v2zm4 0h2v-2h-2v2zm-8-4h2v-2H5v2zm0-4h2v-2H5v2zm0-4h2V7H5v2zm0-4h2V3H5v2zm4 0h2V3H9v2zm4 0h2V3h-2v2zm4 0h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
  </svg>
);

export const Features: React.FC = () => {
  return (
    <section className="min-h-screen bg-black relative flex flex-col overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          type="video/mp4"
        />
      </video>

      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-20 pt-20 sm:pt-24 pb-16 sm:pb-24 flex flex-col min-h-screen">
        {/* Header */}
        <div className="mb-auto">
          <div className="text-xs sm:text-sm font-body text-white/80 mb-4 sm:mb-6">// Capabilities</div>
          <h2 className="font-serif italic text-white text-[clamp(2.5rem,10vw,6rem)] md:text-7xl lg:text-[6rem] leading-[0.92] sm:leading-[0.9] tracking-[-0.02em] md:tracking-[-3px]">
            Production<br />evolved
          </h2>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-16">
          
          {/* Card 1 */}
          <a
            href="http://finatap.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass rounded-[1.25rem] p-5 sm:p-6 min-h-0 md:min-h-[360px] flex flex-col hover:scale-[1.02] hover:bg-white/5 active:scale-[0.98] transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="w-11 h-11 shrink-0 liquid-glass rounded-[0.75rem] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Card1Icon />
              </div>
              <div className="flex flex-wrap justify-end gap-1.5 max-w-[min(70%,14rem)] sm:max-w-[70%]">
                {['Personal Finance', 'Smart Budgeting', 'Expense Tracking', 'Analytics'].map(tag => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1" />
            <div className="mt-6">
              <h3 className="font-serif italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none flex items-center gap-1.5">
                finatap.de
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-white/80"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </h3>
              <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                A premium personal finance manager designed to track expenses, automate recurring bills, and visualize your financial health.
              </p>
            </div>
          </a>

          {/* Card 2 */}
          <div className="liquid-glass rounded-[1.25rem] p-5 sm:p-6 min-h-0 md:min-h-[360px] flex flex-col">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="w-11 h-11 shrink-0 liquid-glass rounded-[0.75rem] flex items-center justify-center">
                <Card2Icon />
              </div>
              <div className="flex flex-wrap justify-end gap-1.5 max-w-[min(70%,14rem)] sm:max-w-[70%]">
                {['Autonomous Trading', 'Real-time Execution', 'Risk Management', 'Market Analysis'].map(tag => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1" />
            <div className="mt-6">
              <h3 className="font-serif italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">Agent Trading</h3>
              <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                An autonomous multi-agent system designed for real-time market analysis, quantitative strategy execution, and continuous risk management.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="liquid-glass rounded-[1.25rem] p-5 sm:p-6 min-h-0 md:min-h-[360px] flex flex-col">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="w-11 h-11 shrink-0 liquid-glass rounded-[0.75rem] flex items-center justify-center">
                <Card3Icon />
              </div>
              <div className="flex flex-wrap justify-end gap-1.5 max-w-[min(70%,14rem)] sm:max-w-[70%]">
                {['AGI Research', 'Cognitive Systems', 'Autonomous Planning', 'Neural Networks'].map(tag => (
                  <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1" />
            <div className="mt-6">
              <h3 className="font-serif italic text-white text-3xl md:text-4xl tracking-[-1px] leading-none">AGI Agents</h3>
              <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                Developing advanced cognitive architectures equipped with reasoning, long-term planning, and tool-use to solve complex tasks.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
