import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NAV_ITEMS = ['Home', 'Voyages', 'Innovation', 'Plan Launch'] as const;

export const SiteNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-[max(1rem,env(safe-area-inset-top))] px-4 sm:px-8 lg:px-16 flex flex-col items-stretch gap-3 md:items-center">
      <div className="flex items-center gap-2 md:hidden w-full max-w-lg mx-auto">
        <div className="liquid-glass rounded-full py-1.5 px-2 min-w-0 flex-1 flex items-center gap-2">
          <div className="min-w-0 flex-1 overflow-x-auto no-scrollbar">
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
            onClick={() => navigate('/login')}
            className="shrink-0 bg-white text-black rounded-full px-3 py-2 text-xs font-semibold whitespace-nowrap flex items-center gap-1 transition-transform active:scale-95 sm:text-sm sm:px-4 sm:py-2"
          >
            Claim
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center justify-center gap-2">
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
          onClick={() => navigate('/login')}
          className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap flex items-center gap-1 transition-transform hover:scale-105"
        >
          Claim a Spot
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
