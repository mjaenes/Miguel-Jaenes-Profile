
import React from 'react';
import { VALUE_PROP } from '../constants.tsx';
import { Brain, Code, LineChart, Rocket, Briefcase, Check, Terminal, Hash } from 'lucide-react';
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

            {/* Hybrid Capabilities Card */}
            <div className="lg:w-1/2 w-full">
                <div className="relative group perspective-1000">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-violet to-electric-cyan rounded-[2rem] blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

                    <div className="relative bg-white dark:bg-ink-900 border-2 border-ink-950 dark:border-white rounded-[2rem] overflow-hidden shadow-pop transform transition-transform duration-500 group-hover:scale-[1.01]">
                        
                        {/* Header */}
                        <div className="bg-ink-950 dark:bg-white p-5 border-b-2 border-ink-950 dark:border-gray-200 flex justify-between items-center">
                            <p className="font-black text-white dark:text-ink-950 uppercase tracking-widest text-sm flex items-center gap-2">
                                <Rocket size={16} className="text-electric-yellow" />
                                {language === 'es' ? 'Capacidades Híbridas' : 'Hybrid Capabilities'}
                            </p>
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-electric-coral"></div>
                                <div className="w-3 h-3 rounded-full bg-electric-yellow"></div>
                                <div className="w-3 h-3 rounded-full bg-electric-cyan"></div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            {/* Left: Strategy / Business */}
                            <div className="flex-1 p-8 border-b-2 md:border-b-0 md:border-r-2 border-slate-100 dark:border-slate-800 bg-paper-50 dark:bg-ink-900">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-electric-violet text-white rounded-lg">
                                        <Briefcase size={20} />
                                    </div>
                                    <h4 className="font-serif font-black text-xl text-ink-950 dark:text-white">Business</h4>
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="text-electric-violet mt-0.5 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                                            {language === 'es' ? 'Auditoría de Rentabilidad (P&L)' : 'Profitability Audit (P&L)'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="text-electric-violet mt-0.5 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                                            {language === 'es' ? 'Modelado de LTV & CAC' : 'LTV & CAC Modeling'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="text-electric-violet mt-0.5 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                                            {language === 'es' ? 'Planificación de Medios' : 'Media Planning'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Check size={18} className="text-electric-violet mt-0.5 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                                            {language === 'es' ? 'Defensa de Marca' : 'Brand Defense Strategy'}
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            {/* Right: Tech / Execution */}
                            <div className="flex-1 p-8 bg-slate-50 dark:bg-black/40">
                                 <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-electric-cyan text-ink-950 rounded-lg">
                                        <Terminal size={20} />
                                    </div>
                                    <h4 className="font-serif font-black text-xl text-ink-950 dark:text-white">Tech</h4>
                                </div>
                                 <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Hash size={18} className="text-electric-cyan-700 dark:text-electric-cyan mt-0.5 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium font-mono">
                                            {language === 'es' ? 'Tracking Server-Side (GTM)' : 'Server-Side Tracking (GTM)'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Hash size={18} className="text-electric-cyan-700 dark:text-electric-cyan mt-0.5 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium font-mono">
                                            {language === 'es' ? 'Automatización (Scripts)' : 'Automation (Scripts)'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Hash size={18} className="text-electric-cyan-700 dark:text-electric-cyan mt-0.5 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium font-mono">
                                            {language === 'es' ? 'Consultas SQL / BigQuery' : 'SQL / BigQuery Queries'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Hash size={18} className="text-electric-cyan-700 dark:text-electric-cyan mt-0.5 shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300 text-sm font-medium font-mono">
                                            {language === 'es' ? 'Integración de APIs' : 'API Integrations'}
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
