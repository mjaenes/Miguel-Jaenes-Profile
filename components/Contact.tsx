
import React, { useState } from 'react';
import { Mail, Linkedin, Send, Coffee } from 'lucide-react';
import { Language } from '../types';
import { UI_TEXT } from '../constants';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const ui = UI_TEXT[language];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Formar el mailto para que llegue a migueljaenes@gmail.com
    const emailTo = "migueljaenes@gmail.com";
    const subject = encodeURIComponent(`Nuevo mensaje de ${formData.name} (Portafolio Web)`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Mensaje:\n${formData.message}`
    );
    
    // Pequeño delay para feedback visual
    setTimeout(() => {
      window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 800);
  };

  return (
    <footer id="contact" className="py-24 bg-ink-950 dark:bg-black text-white relative overflow-hidden">
      
      {/* Footer Decor */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-electric-violet via-electric-coral to-electric-lime"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
            
            <div className="lg:w-5/12">
                <div className="w-16 h-16 bg-electric-lime text-ink-950 rounded-2xl flex items-center justify-center mb-8 rotate-3">
                    <Coffee size={32} />
                </div>
                <h2 className="text-5xl md:text-6xl font-serif font-black mb-8">
                    {ui.contactTitle[0]} <br/> <span className="text-electric-lime">{ui.contactTitle[1]}</span>
                </h2>
                <p className="text-slate-300 text-xl mb-10 leading-relaxed">
                    {ui.contactDesc}
                </p>
                
                <div className="flex gap-4">
                     <a href="mailto:migueljaenes@gmail.com" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-electric-violet transition-colors">
                        <Mail size={24} />
                     </a>
                     <a href="https://linkedin.com/in/migueljaenes" target="_blank" rel="noreferrer" className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center hover:bg-electric-cyan transition-colors">
                        <Linkedin size={24} />
                     </a>
                </div>
            </div>

            <div className="lg:w-7/12">
                <div className="bg-white dark:bg-ink-900 p-8 md:p-10 rounded-[2rem] shadow-pop text-ink-950 dark:text-white rotate-1">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-black uppercase tracking-wider mb-2">{ui.form.name}</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder={ui.form.namePlaceholder}
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-paper-50 dark:bg-ink-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl focus:border-electric-violet focus:ring-0 outline-none transition-all font-bold"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-black uppercase tracking-wider mb-2">{ui.form.email}</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder={ui.form.emailPlaceholder}
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-6 py-4 bg-paper-50 dark:bg-ink-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl focus:border-electric-violet focus:ring-0 outline-none transition-all font-bold"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-black uppercase tracking-wider mb-2">{ui.form.message}</label>
                            <textarea 
                                name="message"
                                placeholder={ui.form.messagePlaceholder}
                                required
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-6 py-4 bg-paper-50 dark:bg-ink-800 border-2 border-slate-200 dark:border-slate-700 rounded-2xl focus:border-electric-violet focus:ring-0 outline-none transition-all font-bold resize-none"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full py-5 bg-electric-violet text-white rounded-2xl font-black text-xl hover:bg-electric-violet/90 hover:-translate-y-1 hover:shadow-pop-sm transition-all flex items-center justify-center gap-3"
                        >
                            {isSubmitting ? ui.form.sending : <>{ui.form.submit} <Send size={24} /></>}
                        </button>
                        {isSent && (
                            <div className="p-4 bg-green-100 text-green-800 rounded-xl font-bold text-center animate-bounce">
                                {ui.form.success}
                            </div>
                        )}
                    </form>
                </div>
            </div>

        </div>
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-slate-500 font-medium">
            © {new Date().getFullYear()} Miguel A. Jaenes Ordóñez. {ui.footer}
        </div>
      </div>
    </footer>
  );
};
