
import React, { useState } from 'react';
import { TESTIMONIALS, UI_TEXT } from '../constants.tsx';
import { Language } from '../types.ts';
import { Linkedin } from 'lucide-react';

interface TestimonialsProps {
  language: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const content = TESTIMONIALS[language];
  const ui = UI_TEXT[language];
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const MAX_LENGTH = 200;

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h3 className="text-center text-4xl font-serif font-black text-ink-950 dark:text-white mb-16">
            {ui.testimonialsTitle[0]} <span className="underline decoration-wavy decoration-electric-lime">{ui.testimonialsTitle[1]}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            {content.map((testimonial, index) => {
                const isLong = testimonial.quote.length > MAX_LENGTH;
                const isExpanded = expandedIndex === index;
                const displayQuote = isExpanded || !isLong 
                    ? testimonial.quote 
                    : `${testimonial.quote.slice(0, MAX_LENGTH)}...`;

                return (
                    <div key={index} className={`relative p-8 rounded-[2rem] border-2 border-ink-950 dark:border-white shadow-pop hover:-translate-y-2 transition-all duration-300 ${index % 2 === 0 ? 'bg-white dark:bg-ink-900 rotate-1' : 'bg-electric-yellow dark:bg-electric-violet -rotate-1'}`}>
                        {/* Chat Tail */}
                        <div className={`absolute bottom-[-2px] ${index % 2 === 0 ? 'left-8' : 'right-8'} w-6 h-6 border-b-2 border-r-2 border-ink-950 dark:border-white bg-inherit transform rotate-45 translate-y-1/2`}></div>
                        
                        <div className={`text-lg font-bold mb-6 leading-relaxed ${index % 2 === 0 ? 'text-ink-950 dark:text-white' : 'text-ink-950 dark:text-white'}`}>
                            "{displayQuote}"
                            {isLong && (
                                <button 
                                    onClick={() => toggleExpand(index)}
                                    className="ml-2 text-sm font-black underline decoration-2 decoration-electric-cyan hover:text-electric-cyan-700 transition-colors cursor-pointer inline-block"
                                >
                                    {isExpanded ? ui.readLess : ui.readMore}
                                </button>
                            )}
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-ink-950 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-ink-950 font-black text-xl shrink-0">
                                {testimonial.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className={`font-black ${index % 2 === 0 ? 'text-ink-950 dark:text-white' : 'text-ink-950 dark:text-white'}`}>
                                    {testimonial.author}
                                </h4>
                                <p className={`text-xs uppercase tracking-wider font-bold ${index % 2 === 0 ? 'text-slate-500 dark:text-slate-400' : 'text-ink-950/70 dark:text-white/80'}`}>
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* LinkedIn Link */}
        <div className="flex justify-center">
            <a 
                href="https://linkedin.com/in/migueljaenes/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-ink-900 text-ink-950 dark:text-white border-2 border-ink-950 dark:border-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-ink-800 transition-all hover:border-electric-cyan hover:text-electric-cyan-700 dark:hover:text-electric-cyan shadow-sm hover:shadow-pop-sm"
            >
                <Linkedin size={20} />
                {ui.viewLinkedIn}
            </a>
        </div>
      </div>
    </section>
  );
};
