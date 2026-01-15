
import React from 'react';
import { EXPERIENCES, UI_TEXT } from '../constants.tsx';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Language } from '../types.ts';

interface ExperienceTimelineProps {
  language: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ language }) => {
  const content = EXPERIENCES[language];
  const ui = UI_TEXT[language];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-ink-950 transition-colors duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
            <h3 className="text-4xl font-serif font-black text-ink-950 dark:text-white transition-colors">
                {ui.experienceTitle}
            </h3>
        </div>

        <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 md:ml-6 space-y-12 pb-12 transition-colors">
                
                {content.map((exp, index) => (
                    <div key={exp.id} className="relative pl-8 md:pl-16 group">
                        {/* Dot */}
                        <div className="absolute top-1 left-[-9px] w-5 h-5 bg-white dark:bg-ink-950 rounded-full border-4 border-electric-violet shadow-sm z-10 group-hover:scale-125 transition-transform duration-300"></div>
                        
                        <div className="bg-paper-50 dark:bg-ink-900 p-8 rounded-2xl border border-slate-100 dark:border-white/5 hover:shadow-lg transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                <div>
                                    <h4 className="text-xl font-bold text-ink-950 dark:text-white transition-colors">{exp.role}</h4>
                                    <div className="text-lg text-electric-violet font-serif font-bold italic">
                                        {exp.company}
                                    </div>
                                </div>
                                <div className="text-sm text-slate-400 dark:text-slate-500 font-medium">
                                    {exp.period}
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider transition-colors">
                                <MapPin size={12} /> {exp.location}
                            </div>
                            
                            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed transition-colors">
                                {exp.description}
                            </p>
                            
                            <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm transition-colors">
                                        <span className="mt-2 w-1.5 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full shrink-0"></span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
