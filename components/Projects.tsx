
import React from 'react';
import { PROJECTS, UI_TEXT } from '../constants.tsx';
import { ArrowUpRight } from 'lucide-react';
import { Language } from '../types.ts';

interface ProjectsProps {
  language: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ language }) => {
  const content = PROJECTS[language];
  const ui = UI_TEXT[language];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
            <h3 className="text-5xl md:text-7xl font-serif font-black text-ink-950 dark:text-white mb-4">
                {ui.projectsTitle[0]} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-coral">{ui.projectsTitle[1]}</span>
            </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.map((project, index) => (
                <div 
                    key={index} 
                    className="group flex flex-col h-full bg-white dark:bg-ink-900 border-2 border-slate-200 dark:border-slate-700 rounded-3xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] dark:hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] hover:border-electric-violet dark:hover:border-electric-lime"
                >
                    
                    <div className="flex justify-between items-start mb-6">
                        <div className={`w-10 h-10 rounded-full border-2 border-ink-950 dark:border-white flex items-center justify-center text-lg font-black ${
                            index === 0 ? 'bg-electric-yellow text-ink-950' :
                            index === 1 ? 'bg-electric-violet text-white' :
                            'bg-electric-coral text-white'
                        }`}>
                            {index + 1}
                        </div>
                        <ArrowUpRight className="text-slate-300 group-hover:text-ink-950 dark:group-hover:text-electric-lime transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    <h4 className="text-2xl font-black text-ink-950 dark:text-white mb-4 leading-tight">
                        {project.title}
                    </h4>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-8 leading-relaxed flex-grow">
                        {project.description}
                    </p>

                    <div className="mt-auto">
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.technologies.map((tech, tIdx) => (
                                <span key={tIdx} className="px-3 py-1 bg-slate-100 dark:bg-ink-800 text-ink-950 dark:text-slate-200 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 group-hover:border-electric-violet/50 dark:group-hover:border-electric-lime/50 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="p-4 bg-paper-100 dark:bg-ink-800 rounded-xl border-l-4 border-electric-violet group-hover:bg-electric-violet/10 dark:group-hover:bg-electric-lime/10 transition-colors">
                             <p className="text-xs font-bold text-electric-violet uppercase mb-1">{ui.projectsImpact}</p>
                             <p className="text-sm font-medium text-ink-950 dark:text-white">{project.contribution}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
