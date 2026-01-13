
import React from 'react';
import { ABOUT_ME } from '../constants';
import { Quote } from 'lucide-react';
import { Language } from '../types';

interface AboutMeProps {
  language: Language;
}

export const AboutMe: React.FC<AboutMeProps> = ({ language }) => {
  const content = ABOUT_ME[language];

  // Helper to highlight specific words
  const renderStory = (text: string) => {
    const targetWord = language === 'es' ? 'transformación' : 'transformation';
    const parts = text.split(new RegExp(`(${targetWord})`, 'gi'));
    
    return parts.map((part, index) => {
      if (part.toLowerCase() === targetWord.toLowerCase()) {
        return (
          <span key={index} className="relative inline-block px-1 mx-1">
             <span className="absolute inset-0 bg-electric-lime transform -skew-x-12 rounded-sm -z-10"></span>
             <span className="font-black text-ink-950 relative z-10">{part}</span>
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            
            {/* Visual Side */}
            <div className="md:w-5/12 relative group">
                 {/* Decorative background shape */}
                 <div className="absolute inset-0 bg-electric-yellow transform rotate-3 rounded-[2rem] shadow-pop group-hover:rotate-6 transition-transform duration-500"></div>
                 
                 {/* Image Container */}
                 <div className="relative bg-white dark:bg-ink-900 border-4 border-ink-950 dark:border-white rounded-[2rem] overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-sm">
                    <img 
                        src={content.image} 
                        alt="Miguel Working" 
                        className="w-full h-auto object-cover transition-all duration-500"
                    />
                 </div>

                 {/* Sticker Badges */}
                 {content.highlights.map((item, idx) => (
                    <div 
                        key={idx}
                        className={`absolute ${
                            idx === 0 ? '-top-4 -left-4 rotate-[-10deg]' : 
                            idx === 1 ? 'top-1/2 -right-8 rotate-[5deg]' : 
                            '-bottom-4 left-8 rotate-[-5deg]'
                        } px-4 py-2 ${item.color} border-2 border-ink-950 shadow-pop text-ink-950 font-black text-xs uppercase tracking-wider z-10 animate-float`}
                        style={{ animationDelay: `${idx * 1}s` }}
                    >
                        {item.text}
                    </div>
                 ))}
            </div>

            {/* Content Side */}
            <div className="md:w-7/12">
                <div className="inline-block px-3 py-1 bg-electric-cyan text-ink-950 text-sm font-bold uppercase tracking-widest mb-6 rounded-lg border-2 border-ink-950 shadow-pop-sm transform -rotate-1">
                    {content.label}
                </div>
                
                <h3 className="text-5xl md:text-6xl font-serif font-black text-ink-950 dark:text-white mb-8 leading-tight">
                    {content.title}
                </h3>

                <div className="prose prose-lg dark:prose-invert">
                    <p className="text-xl text-slate-700 dark:text-slate-200 mb-8 leading-relaxed font-medium">
                        {renderStory(content.story)}
                    </p>
                </div>

                <div className="bg-paper-100 dark:bg-ink-800 p-8 rounded-3xl border-l-8 border-electric-coral relative mt-8">
                    <Quote className="absolute top-4 right-4 text-electric-coral opacity-20" size={40} />
                    <p className="text-2xl font-serif italic text-ink-950 dark:text-white font-bold">
                        "{content.philosophy}"
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
