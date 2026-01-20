
import React from 'react';
import { VALUE_PROP } from '../constants.tsx';
import { Brain, Code, LineChart, Users, Database, BarChart3, ArrowRight } from 'lucide-react';
import { Language } from '../types.ts';

interface ValuePropProps {
  language: Language;
}

export const ValueProp: React.FC<ValuePropProps> = ({ language }) => {
  const content = VALUE_PROP[language];

  return (
    <section className="py-32 relative overflow-hidden bg-slate-50/50 dark:bg-black/20">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
            
            <div className="lg:w-1/2">
                <h2 className="text-5xl md:text-6xl font-serif font-black text-ink-950 dark:text-white mb-8">
                    {content.title} <br/>
                    <span className="inline-block bg-electric-violet text-white px-2 transform -rotate-1">{content.highlight}</span>
                </h2>
                <p className="text-xl text-slate-700 dark:text-slate-200 mb-10 leading-relaxed">
                    {content.description}
                </p>

                <div className="flex flex-col gap-6">
                    {content.pillars.map((pillar, idx) => (
                        <div key={idx} className="flex items-center gap-6 group cursor-default">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-ink-950 dark:border-white shadow-pop group-hover:-translate-y-1 transition-transform ${
                                idx === 0 ? 'bg-electric-coral text-white' : 
                                idx === 1 ? 'bg-electric-cyan text-ink-950' : 
                                'bg-electric-yellow text-ink-950'
                            }`}>
                                {idx === 0 ? <Brain size={28} /> : idx === 1 ? <Code size={28} /> : <LineChart size={28} />}
                            </div>
                            <div>
                                <h4 className="font-black text-xl text-ink-950 dark:text-white">{pillar.title}</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-snug">{pillar.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Professional Schematic Diagram (Restored) */}
            <div className="lg:w-1/2 w-full flex justify-center">
                <div className="relative w-full max-w-md p-6">
                    <div className="flex items-center justify-between relative">
                        {/* Connecting Line */}
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-300 dark:bg-slate-700 -z-10 transform -translate-y-1/2"></div>

                        {/* Node 1: Business */}
                        <div className="flex flex-col items-center gap-4 group">
                            <div className="w-24 h-24 bg-white dark:bg-ink-900 border-4 border-electric-coral rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                <Brain size={40} className="text-electric-coral" />
                            </div>
                            <span className="font-black text-ink-950 dark:text-white uppercase tracking-wider text-sm bg-white dark:bg-ink-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                                {language === 'es' ? 'Negocio' : 'Business'}
                            </span>
                        </div>

                        {/* Center Node: The Bridge (Me) */}
                        <div className="flex flex-col items-center gap-2 relative z-10 group">
                            {/* Animated pulses */}
                            <div className="absolute top-1/2 left-1/2 w-full h-1 bg-electric-violet/50 blur-sm animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
                            
                            <div className="w-32 h-32 bg-ink-950 dark:bg-white rounded-full border-4 border-electric-yellow flex flex-col items-center justify-center shadow-pop-hover transform hover:scale-110 transition-transform cursor-crosshair relative overflow-hidden">
                                <div className="absolute inset-0 bg-electric-violet/20 animate-pulse"></div>
                                <span className="text-4xl relative z-10">🚀</span>
                                <span className="font-black text-white dark:text-ink-950 text-xl relative z-10">
                                    {language === 'es' ? 'YO' : 'ME'}
                                </span>
                            </div>
                             <span className="font-black text-electric-violet uppercase tracking-wider text-xs bg-electric-violet/10 px-2 py-1 rounded">
                                {content.highlight}
                            </span>
                        </div>

                        {/* Node 2: Tech */}
                        <div className="flex flex-col items-center gap-4 group">
                             <div className="w-24 h-24 bg-white dark:bg-ink-900 border-4 border-electric-cyan rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                                <Code size={40} className="text-electric-cyan-700 dark:text-electric-cyan" />
                            </div>
                            <span className="font-black text-ink-950 dark:text-white uppercase tracking-wider text-sm bg-white dark:bg-ink-900 px-2 py-1 rounded border border-slate-200 dark:border-slate-700">
                                Tech
                            </span>
                        </div>
                    </div>

                    {/* Data Flow Arrows */}
                    <div className="absolute top-[40%] left-[25%] text-slate-400 dark:text-slate-500 animate-float-delayed">
                        <ArrowRight size={24} />
                    </div>
                    <div className="absolute top-[40%] right-[25%] text-slate-400 dark:text-slate-500 animate-float">
                        <ArrowRight size={24} />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
