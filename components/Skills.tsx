
import React, { useEffect, useRef, useState } from 'react';
import { SKILLS, UI_TEXT } from '../constants.tsx';
import { Language } from '../types.ts';

interface SkillsProps {
  language: Language;
}

export const Skills: React.FC<SkillsProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const content = SKILLS[language];
  const ui = UI_TEXT[language];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Trigger only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSkillClick = (skill: string) => {
    setSelectedSkill(prev => prev === skill ? null : skill);
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-serif font-black text-ink-950 dark:text-white">
                {ui.skillsTitle}
            </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {content.map((category, idx) => (
                <React.Fragment key={idx}>
                    {category.skills.map((skill, sIdx) => {
                        const isSelected = selectedSkill === skill;

                        // Base styles
                        const colors = [
                            'border-electric-violet text-electric-violet',
                            'border-electric-coral text-electric-coral',
                            'border-electric-lime text-electric-lime-700',
                            'border-electric-cyan text-electric-cyan-700',
                            'border-electric-yellow text-electric-yellow-700',
                        ];
                        const baseColorClass = colors[(idx + sIdx) % colors.length];
                        const randomRotation = (idx + sIdx) % 2 === 0 ? 'rotate-1' : '-rotate-1';
                        
                        // Selected styles override
                        const activeClass = isSelected 
                            ? 'bg-ink-950 text-white border-ink-950 scale-110 shadow-pop-hover z-10' 
                            : `bg-white dark:bg-ink-900 ${baseColorClass} hover:scale-110 hover:shadow-pop`;

                        // Animation delay
                        const delay = (idx * 5 + sIdx) * 50; 

                        return (
                            <button 
                                key={sIdx} 
                                onClick={() => handleSkillClick(skill)}
                                className={`px-6 py-3 rounded-full border-2 font-black text-sm md:text-base shadow-sm transition-all duration-300 cursor-pointer opacity-0 ${activeClass} ${!isSelected ? randomRotation : 'rotate-0'} ${isVisible ? 'animate-fade-in-up' : ''}`}
                                style={{ animationDelay: `${delay}ms` }}
                            >
                                {skill}
                            </button>
                        )
                    })}
                </React.Fragment>
            ))}
        </div>
      </div>
    </section>
  );
};
