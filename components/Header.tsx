
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: language === 'es' ? 'Sobre Mí' : 'About Me', href: '#about' },
    { name: language === 'es' ? 'Personal' : 'Personal', href: '#personal' },
    { name: language === 'es' ? 'Impacto' : 'Impact', href: '#achievements' },
    { name: language === 'es' ? 'Experiencia' : 'Experience', href: '#experience' },
    { name: language === 'es' ? 'Contacto' : 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-center">
        <div className={`relative w-full md:w-auto rounded-full transition-all duration-300 ${
            isScrolled ? 'p-[3px]' : 'p-0'
        }`}>
            {/* Traveling Border Animation */}
            {isScrolled && (
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 w-[200%] h-[1000%] bg-transparent -translate-x-1/2 -translate-y-1/2 animate-spin-slow" 
                        style={{
                            background: 'conic-gradient(from 0deg, transparent 0deg 90deg, #8b5cf6 120deg, #fb7185 180deg, #fde047 240deg, #a3e635 300deg, #22d3ee 330deg, transparent 360deg)'
                        }}
                    ></div>
                </div>
            )}

            {/* Inner Content Container */}
            <div className={`relative rounded-full px-6 py-3 flex justify-between items-center gap-8 overflow-hidden transition-all duration-300 ${
                isScrolled 
                  ? 'bg-white/95 dark:bg-ink-900/95 backdrop-blur-md shadow-sm' 
                  : 'bg-transparent'
            }`}>
                <div className="font-serif font-black text-3xl md:text-4xl tracking-tight text-ink-900 dark:text-white transition-colors relative z-10">
                MAJO<span className="text-electric-violet">.</span>
                </div>

                <div className="hidden md:flex items-center gap-6 relative z-10">
                  <nav className="flex gap-6 items-center">
                  {navLinks.map((link) => (
                      <a 
                      key={link.name} 
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-[11px] font-semibold text-slate-600 dark:text-slate-300 hover:text-electric-violet dark:hover:text-electric-violet transition-colors duration-300 uppercase tracking-wider"
                      >
                      {link.name}
                      </a>
                  ))}
                  </nav>
                  
                  <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-700"></div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={toggleLanguage}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-ink-800 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-electric-cyan hover:text-ink-950 transition-colors"
                    >
                      <Globe size={14} />
                      {language === 'es' ? 'ES' : 'EN'}
                    </button>

                    <button 
                      onClick={toggleTheme}
                      className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-ink-800 transition-colors"
                      aria-label="Toggle Dark Mode"
                    >
                      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:hidden relative z-10">
                  <button 
                      onClick={toggleLanguage}
                      className="flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100 dark:bg-ink-800 text-xs font-bold text-slate-700 dark:text-slate-200"
                    >
                      {language === 'es' ? 'ES' : 'EN'}
                  </button>

                  <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-ink-800 transition-colors"
                  >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  </button>
                  
                  <button 
                  className="p-2 text-slate-800 dark:text-white hover:text-electric-violet transition-colors" 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                  </button>
                </div>
            </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-ink-900/95 backdrop-blur-xl rounded-2xl border border-slate-100 dark:border-white/10 shadow-xl flex flex-col p-4 animate-slide-up z-50">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-slate-800 dark:text-slate-100 font-bold py-3 px-4 rounded-xl hover:bg-slate-50 dark:hover:bg-ink-800 hover:text-electric-violet transition-colors cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
