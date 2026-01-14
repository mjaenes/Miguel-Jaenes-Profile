
import React from 'react';
import { ABOUT_ME } from '../constants';
import { Quote, User } from 'lucide-react';
import { Language } from '../types';

interface AboutMeProps {
  language: Language;
}

export const AboutMe: React.FC<AboutMeProps> = ({ language }) => {
  const content = ABOUT_ME[language];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            
            {/* Visual Side with Placeholder */}
            <div className="md:w-5/12 relative group">
                 <div className="absolute inset-0 bg-electric-yellow transform rotate-3 rounded-[2.5rem] shadow-pop group-hover:rotate-6 transition-transform duration-500"></div>
                 
                 <div className="relative bg-slate-200 dark:bg-ink-800 border-4 border-ink-950 dark:border-white rounded-[2.5rem] overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-sm flex items-center justify-center min-h-[400px]">
                    
                    {/* Placeholder Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-ink-900 dark:to-ink-800">
                        <User size={80} strokeWidth={1} className="opacity-30" />
                    </div>

                    <img 
                        src="miguel-jaenes-personal.png" 
                        alt="Miguel Ángel Working" 
                        className="relative z-10 w-full h-auto object-cover transition-all duration-500"
                        onError={(e) => {
                           console.warn("Imagen personal no encontrada en la raíz.");
                        }}
                    />
                 </div>

                 {/* Sticker Badges */}
                 {content.highlights.map((item, idx) => (
                    <div 
                        key={idx}
                        className={`absolute ${
                            idx === 0 ? '-top-6 -left-6 rotate-[-10deg]' : 
                            idx === 1 ? 'top-1/2 -right-10 rotate-[5deg]' : 
                            '-bottom-6 left-12 rotate-[-5deg]'
                        } px-6 py-3 ${item.color} border-2 border-ink-950 shadow-pop text-ink-950 font-black text-sm uppercase tracking-wider z-20 animate-float`}
                        style={{ animationDelay: `${idx * 1.5}s` }}
                    >
                        {item.text}
                    </div>
                 ))}
            </div>

            {/* Content Side */}
            <div className="md:w-7/12">
                <div className="inline-block px-4 py-2 bg-electric-cyan text-ink-950 text-xs font-black uppercase tracking-widest mb-8 rounded-lg border-2 border-ink-950 shadow-pop-sm transform -rotate-1">
                    {content.label}
                </div>
                
                <h3 className="text-5xl md:text-6xl font-serif font-black text-ink-950 dark:text-white mb-10 leading-none">
                    {content.title}
                </h3>

                <div className="prose prose-xl dark:prose-invert max-w-none">
                    <p className="text-xl text-slate-700 dark:text-slate-200 mb-10 leading-relaxed font-medium">
                        {content.story}
                    </p>
                </div>

                <div className="bg-paper-100 dark:bg-ink-800 p-10 rounded-[2rem] border-l-[12px] border-electric-coral relative mt-12 shadow-sm">
                    <Quote className="absolute top-6 right-8 text-electric-coral opacity-20" size={50} />
                    <p className="text-2xl md:text-3xl font-serif italic text-ink-950 dark:text-white font-black leading-snug">
                        "{content.philosophy}"
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
