
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutMe } from './components/AboutMe';
import { Personal } from './components/Personal';
import { StatsSection } from './components/StatsSection';
import { ValueProp } from './components/ValueProp';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Language } from './types';

function App() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    try {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    } catch (e) {
      console.warn("No se pudo acceder a localStorage o matchMedia:", e);
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    try {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    } catch (e) {
      // Ignorar errores de localStorage
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  return (
    <div className="font-sans text-slate-900 dark:text-slate-100 min-h-screen selection:bg-electric-lime selection:text-ink-950 overflow-x-hidden transition-colors duration-300 relative">
      
      {/* Global Animated Background Mesh */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-60 dark:opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-electric-violet/30 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-electric-cyan/30 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-electric-coral/30 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-electric-lime/30 rounded-full blur-[80px] animate-blob"></div>
      </div>

      <div className="relative z-10">
        <Header theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />
        <main>
          <Hero language={language} />
          <AboutMe language={language} />
          <Personal language={language} />
          <StatsSection theme={theme} language={language} />
          <ValueProp language={language} />
          <Projects language={language} />
          <Skills language={language} />
          <ExperienceTimeline language={language} />
          <Testimonials language={language} />
        </main>
        <Contact language={language} />
      </div>
    </div>
  );
}

export default App;
