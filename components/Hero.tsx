
import React from 'react';
import { HERO_DATA } from '../constants';
import { ArrowDown, Mail, Linkedin, Sparkles, Rocket, MousePointer2 } from 'lucide-react';
import { Language } from '../types';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const content = HERO_DATA[language];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      
      {/* Marquee Background */}
      <div className="absolute top-1/2 left-0 w-full -rotate-6 -translate-y-1/2 opacity-5 dark:opacity-10 pointer-events-none select-none overflow-hidden">
        <div className="whitespace-nowrap animate-marquee text-[15rem] font-black text-ink-950 dark:text-white uppercase leading-none">
          Growth • Data • Strategy • Performance • Scale • Growth • Data • Strategy •
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Text Content - Fun & Big */}
          <div className="flex-1 order-2 lg:order-1 relative">
             {/* Decor element */}
             <div className="absolute -top-12 -left-12 text-electric-yellow animate-spin-slow opacity-60 hidden lg:block">
                <Sparkles size={60} />
             </div>

             <div className="inline-block px-4 py-2 bg-electric-cyan text-ink-950 font-bold uppercase tracking-widest text-xs rounded-full border-2 border-ink-950 shadow-pop-sm mb-6 rotate-2 transform hover:-rotate-1 transition-transform cursor-default">
                {content.badge}
             </div>

            <h1 className="text-6xl md:text-8xl font-serif font-black text-ink-950 dark:text-white leading-[0.9] tracking-tight mb-6">
              Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-cyan">Partner.</span><br/>
              Growth <span className="relative inline-block">
                Hacker.
                <svg className="absolute w-[110%] -bottom-2 -left-2 text-electric-coral -z-10 opacity-80" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-200 max-w-lg mb-8 leading-snug">
              {language === 'es' ? 
                <>Transformo el caos de los datos en <span className="bg-electric-violet text-white px-1 font-bold">rentabilidad</span> y crecimiento predecible.</> :
                <>Transforming data chaos into <span className="bg-electric-violet text-white px-1 font-bold">profitability</span> and predictable growth.</>
              }
            </p>
            
            <div className="flex flex-wrap gap-6 items-center">
              {/* High Impact CTA */}
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-white transition-all duration-300 rounded-2xl hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-electric-violet/50"
                style={{
                    boxShadow: '6px 6px 0px 0px #8b5cf6', // electric-violet hard shadow
                }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-ink-950 to-indigo-900 dark:from-white dark:to-slate-200 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                </div>
                
                {/* Glow Effect behind */}
                <div className="absolute -inset-3 bg-electric-violet/40 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>

                {/* Content */}
                <span className="relative z-10 flex items-center gap-3 text-xl dark:text-ink-950">
                    <Rocket className="group-hover:animate-bounce" size={26} /> 
                    {content.cta}
                </span>
              </a>

              <a 
                href="https://linkedin.com/in/migueljaenes/" 
                target="_blank" 
                rel="noreferrer"
                className="group px-8 py-4 bg-white dark:bg-ink-900 text-ink-950 dark:text-white border-2 border-ink-950 dark:border-white rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-ink-800 transition-all flex items-center gap-2 hover:border-electric-cyan hover:text-electric-cyan-700 dark:hover:text-electric-cyan hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] ring-0 hover:ring-2 hover:ring-electric-cyan/50"
              >
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" /> LinkedIn
              </a>
            </div>
            
            {/* Social Proof Mini */}
            <div className="mt-12 flex items-center gap-4 text-sm font-bold text-slate-500 dark:text-slate-400">
               <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-electric-violet border-2 border-white flex items-center justify-center text-white">UK</div>
                  <div className="w-10 h-10 rounded-full bg-electric-coral border-2 border-white flex items-center justify-center text-white">ES</div>
                  <div className="w-10 h-10 rounded-full bg-electric-cyan border-2 border-white flex items-center justify-center text-white">DK</div>
               </div>
               <p className="text-base text-ink-950 dark:text-white">
                  {language === 'es' ? 'Gestionando' : 'Managing'} 
                  <span className="text-2xl font-black text-electric-violet mx-1">£12M</span> 
                  {language === 'es' ? 'anuales en mercados Top.' : 'annually in Top Markets.'}
               </p>
            </div>
          </div>

          {/* Image - Organic Blob Shape & Floating Icons */}
          <div className="flex-1 flex justify-center order-1 lg:order-2 relative">
             <div className="relative w-80 h-96 md:w-[450px] md:h-[550px]">
                
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-full h-full bg-electric-violet rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-electric-coral rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-blob animation-delay-2000 opacity-20"></div>

                {/* Main Card */}
                <div className="relative w-full h-full bg-white dark:bg-ink-900 border-4 border-ink-950 dark:border-white rounded-[2rem] shadow-pop overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-500 z-10 group">
                    {/* Using a high-quality professional stock photo as requested for a 'formal' look */}
                    <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
                        alt="Miguel Ángel Jaenes" 
                        onError={(e) => {
                            e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"; 
                        }}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gloss effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Elements (Stickers) */}
                <div className="absolute -top-6 -right-6 bg-electric-lime text-ink-950 p-4 rounded-xl border-2 border-ink-950 shadow-pop rotate-12 z-20 animate-float">
                    <span className="font-black text-lg md:text-xl">{content.card1}</span>
                </div>

                <div className="absolute bottom-12 -left-8 bg-electric-cyan text-ink-950 p-3 rounded-full border-2 border-ink-950 shadow-pop -rotate-6 z-20 animate-float-delayed flex items-center gap-2">
                    <MousePointer2 size={20} /> <span className="font-bold">{content.card2}</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
