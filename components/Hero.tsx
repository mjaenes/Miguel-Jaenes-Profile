
import React from 'react';
import { HERO_DATA } from '../constants.tsx';
import { Mail, Linkedin, Sparkles, Rocket, MousePointer2, FileText, User } from 'lucide-react';
import { Language } from '../types.ts';

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
          Performance • Strategy • Growth • Scale • Data • Performance • Strategy • Growth •
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 order-2 lg:order-1 relative">
             <div className="absolute -top-12 -left-12 text-electric-yellow animate-spin-slow opacity-60 hidden lg:block">
                <Sparkles size={60} />
             </div>

             <div className="inline-block px-5 py-2 bg-electric-cyan text-ink-950 font-black uppercase tracking-widest text-sm rounded-full border-2 border-ink-950 shadow-pop-sm mb-8 rotate-1">
                {content.badge}
             </div>

            <h1 className="text-6xl md:text-[5.5rem] font-serif font-black text-ink-950 dark:text-white leading-[0.85] tracking-tight mb-8">
              {language === 'es' ? 'Experto en' : 'Expert in'}<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-cyan">Adquisición.</span><br/>
              <span className="relative inline-block">
                {language === 'es' ? 'Escalado.' : 'Scaling.'}
                <svg className="absolute w-[110%] -bottom-2 -left-2 text-electric-coral -z-10 opacity-80" viewBox="0 0 100 15" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="10" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-100 max-w-xl mb-6 leading-tight">
              {content.tagline}
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg mb-10 leading-relaxed font-medium">
              {content.intro}
            </p>
            
            <div className="flex flex-wrap gap-5 items-center">
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center px-10 py-5 font-black text-white transition-all duration-300 rounded-2xl hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-electric-violet/50"
                style={{ boxShadow: '6px 6px 0px 0px #8b5cf6' }}
              >
                <div className="absolute inset-0 rounded-2xl bg-ink-950 dark:bg-white overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
                </div>
                <span className="relative z-10 flex items-center gap-3 text-xl dark:text-ink-950">
                    <Rocket className="group-hover:animate-bounce" size={26} /> 
                    {content.cta}
                </span>
              </a>

              <button 
                onClick={() => window.print()} 
                className="px-10 py-5 bg-white dark:bg-ink-900 text-ink-950 dark:text-white border-2 border-ink-950 dark:border-white rounded-2xl font-black text-xl hover:bg-slate-50 dark:hover:bg-ink-800 transition-all flex items-center gap-3 hover:shadow-pop"
              >
                <FileText size={24} className="text-electric-coral" /> {content.cvCta}
              </button>

              <a 
                href="https://linkedin.com/in/migueljaenes/" 
                target="_blank" 
                rel="noreferrer"
                className="p-5 bg-white dark:bg-ink-900 text-ink-950 dark:text-white border-2 border-ink-950 dark:border-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-ink-800 transition-all flex items-center justify-center hover:border-electric-cyan hover:text-electric-cyan"
              >
                <Linkedin size={28} />
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-4 text-sm font-bold">
               <div className="flex -space-x-3">
                  <div className="w-12 h-12 rounded-full bg-electric-violet border-4 border-white dark:border-ink-900 flex items-center justify-center text-white font-black">UK</div>
                  <div className="w-12 h-12 rounded-full bg-electric-coral border-4 border-white dark:border-ink-900 flex items-center justify-center text-white font-black">ES</div>
                  <div className="w-12 h-12 rounded-full bg-electric-cyan border-4 border-white dark:border-ink-900 flex items-center justify-center text-white font-black">DK</div>
               </div>
               <p className="text-lg text-ink-950 dark:text-white font-black">
                  {content.social}
               </p>
            </div>
          </div>

          {/* Image with Robust Placeholder */}
          <div className="flex-1 flex justify-center order-1 lg:order-2 relative">
             <div className="relative w-80 h-[30rem] md:w-[450px] md:h-[38rem]">
                
                {/* Background Shapes */}
                <div className="absolute top-0 right-0 w-full h-full bg-electric-violet rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-blob opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-electric-coral rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-blob animation-delay-2000 opacity-30"></div>

                {/* Main Card with Placeholder Background */}
                <div className="relative w-full h-full bg-slate-200 dark:bg-ink-800 border-4 border-ink-950 dark:border-white rounded-[2.5rem] shadow-pop overflow-hidden rotate-2 hover:rotate-0 transition-all duration-500 z-10 group flex items-center justify-center">
                    
                    {/* Placeholder Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-ink-900 dark:to-ink-800">
                        <User size={120} strokeWidth={1} className="opacity-40" />
                    </div>

                    <img 
                        src="miguel-jaenes-profile.png"
                        alt="Miguel Ángel Jaenes" 
                        className="relative z-20 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          console.warn("Imagen de perfil no encontrada en la raíz.");
                        }}
                    />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-8 bg-electric-lime text-ink-950 px-6 py-4 rounded-2xl border-2 border-ink-950 shadow-pop rotate-12 z-20 animate-float">
                    <span className="font-black text-xl">{content.card1}</span>
                </div>

                <div className="absolute bottom-16 -left-12 bg-electric-cyan text-ink-950 px-5 py-4 rounded-full border-2 border-ink-950 shadow-pop -rotate-6 z-20 animate-float-delayed flex items-center gap-2">
                    <MousePointer2 size={24} /> <span className="font-black text-lg">{content.card2}</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
