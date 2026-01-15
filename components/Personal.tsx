
import React from 'react';
import { PERSONAL_DATA, UI_TEXT } from '../constants.tsx';
import { Language } from '../types.ts';

interface PersonalProps {
  language: Language;
}

export const Personal: React.FC<PersonalProps> = ({ language }) => {
  const content = PERSONAL_DATA[language];
  const ui = UI_TEXT[language];

  return (
    <section id="personal" className="py-24 relative overflow-hidden bg-paper-50 dark:bg-ink-950 transition-colors">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-serif font-black text-ink-950 dark:text-white mb-4">
             {content.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.items.map((item, idx) => {
                const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-3'];
                return (
                    <div 
                        key={idx}
                        className={`group p-8 ${item.color} ${rotations[idx % rotations.length]} hover:rotate-0 border-2 border-ink-950 dark:border-white shadow-pop hover:shadow-pop-hover transition-all duration-300 rounded-3xl flex flex-col items-center text-center`}
                    >
                        <div className="w-16 h-16 bg-white dark:bg-ink-900 border-2 border-ink-950 rounded-2xl flex items-center justify-center mb-6 shadow-pop-sm group-hover:-translate-y-2 transition-transform">
                            {item.icon}
                        </div>
                        <h4 className="text-2xl font-black text-ink-950 dark:text-white mb-3">
                            {item.title}
                        </h4>
                        <p className="text-ink-950/70 dark:text-white/70 font-bold text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};
