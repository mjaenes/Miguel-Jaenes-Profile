
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from 'recharts';
import {
  BarChart3, Target, Users, Database, Globe, Camera, Plane, BookOpen, Coffee,
  Mail, Linkedin, Sparkles, Rocket, MousePointer2, FileText, User,
  Activity, DollarSign, TrendingUp, Brain, Code, LineChart, ArrowRight, Zap,
  Calendar, MapPin, Briefcase, Send, Menu, X, Sun, Moon, ArrowUpRight, Quote
} from 'lucide-react';

// ==========================================
// TYPES
// ==========================================

export type Language = 'es' | 'en';

export interface LocalizedContent<T> {
  es: T;
  en: T;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  contribution: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company?: string;
}

// ==========================================
// CONSTANTS
// ==========================================

export const HERO_DATA: LocalizedContent<{
  name: string;
  title: string;
  tagline: string;
  intro: string;
  badge: string;
  cta: string;
  cvCta: string;
  social: string;
  card1: string;
  card2: string;
}> = {
  es: {
    name: "Miguel Ángel Jaenes Ordóñez",
    title: "Performance Marketing | Paid Media | User Acquisition | Growth",
    tagline: "Especialista en convertir datos complejos en rentabilidad y crecimiento escalable.",
    intro: "Senior Paid Acquisition Specialist con más de 10 años de experiencia liderando estrategias en mercados competitivos. Experto en optimización de presupuestos millonarios y arquitecturas de datos para marketing.",
    badge: "👋 Miguel A. Jaenes Ordóñez",
    cta: "Contactar ahora",
    cvCta: "Descargar CV",
    social: "Gestionando presupuestos de +£12M/año.",
    card1: "Growth Strategy",
    card2: "Data Analytics"
  },
  en: {
    name: "Miguel Ángel Jaenes Ordóñez",
    title: "Performance Marketing | Paid Media | User Acquisition | Growth",
    tagline: "Specialist in turning complex data into profitability and scalable growth.",
    intro: "Senior Paid Acquisition Specialist with 10+ years of experience leading strategies in competitive markets. Expert in multi-million budget optimization and marketing data architectures.",
    badge: "👋 Miguel A. Jaenes Ordóñez",
    cta: "Contact me",
    cvCta: "Download CV",
    social: "Managing +£12M/year budgets.",
    card1: "Growth Strategy",
    card2: "Data Analytics"
  }
};

export const PERSONAL_DATA: LocalizedContent<{
  title: string;
  subtitle: string;
  items: { title: string; desc: string; icon: React.ReactNode; color: string }[];
}> = {
  es: {
    title: "Vida más allá de los datos",
    subtitle: "Mis pasiones y lo que me mantiene inspirado.",
    items: [
      { title: "Viajero", desc: "Explorador de nuevas culturas y gastronomía internacional.", icon: <Plane className="w-6 h-6" />, color: "bg-electric-cyan" },
      { title: "Fotografía", desc: "Capturando la esencia de los momentos y la luz natural.", icon: <Camera className="w-6 h-6" />, color: "bg-electric-coral" },
      { title: "Lector", desc: "Apasionado de la historia, la ficción y el crecimiento personal.", icon: <BookOpen className="w-6 h-6" />, color: "bg-electric-lime" },
      { title: "Café", desc: "En una misión constante por encontrar el espresso perfecto.", icon: <Coffee className="w-6 h-6" />, color: "bg-electric-yellow" }
    ]
  },
  en: {
    title: "Life beyond data",
    subtitle: "My passions and what keeps me inspired.",
    items: [
      { title: "Traveler", desc: "Explorer of new cultures and international gastronomy.", icon: <Plane className="w-6 h-6" />, color: "bg-electric-cyan" },
      { title: "Photography", desc: "Capturing the essence of moments and natural light.", icon: <Camera className="w-6 h-6" />, color: "bg-electric-coral" },
      { title: "Reader", desc: "Passionate about history, fiction, and personal growth.", icon: <BookOpen className="w-6 h-6" />, color: "bg-electric-lime" },
      { title: "Coffee", desc: "On a constant mission to find the perfect espresso.", icon: <Coffee className="w-6 h-6" />, color: "bg-electric-yellow" }
    ]
  }
};

export const ABOUT_ME: LocalizedContent<{
  title: string;
  label: string;
  story: string;
  philosophy: string;
  image: string;
  highlights: { text: string; color: string }[];
}> = {
  es: {
    title: "Experiencia y Visión",
    label: "Mi trayectoria",
    story: "Mi carrera se define por la transformación. De la ejecución técnica al liderazgo estratégico, he unido tecnología y negocio para crear sistemas de adquisición predecibles. En mercados como UK, España y Dinamarca, he demostrado que el éxito no reside en gastar más, sino en entender mejor los datos.",
    philosophy: "El marketing de resultados no es magia, es una mezcla de curiosidad, técnica y rigor analítico.",
    image: "miguel-jaenes-personal.png",
    highlights: [
      { text: "Curiosidad", color: "bg-electric-lime" },
      { text: "Estrategia", color: "bg-electric-violet text-white" },
      { text: "Resultados", color: "bg-electric-coral text-white" }
    ]
  },
  en: {
    title: "Experience and Vision",
    label: "My path",
    story: "My career is defined by transformation. From technical execution to strategic leadership, I have bridged technology and business to create predictable acquisition systems. In markets like the UK, Spain, and Denmark, I have proven that success isn't about spending more, but about understanding data better.",
    philosophy: "Performance marketing isn't magic; it's a blend of curiosity, technique, and analytical rigor.",
    image: "miguel-jaenes-personal.png",
    highlights: [
      { text: "Curiosity", color: "bg-electric-lime" },
      { text: "Strategy", color: "bg-electric-violet text-white" },
      { text: "Results", color: "bg-electric-coral text-white" }
    ]
  }
};

export const VALUE_PROP: LocalizedContent<{
  title: string;
  highlight: string;
  description: string;
  pillars: { title: string; desc: string; icon: React.ReactNode }[];
}> = {
  es: {
    title: "Mi Propuesta de",
    highlight: "Valor",
    description: "Actúo como el puente necesario entre los objetivos comerciales de alto nivel y la ejecución técnica granular.",
    pillars: [
      {
        title: "Visión de Negocio",
        desc: "Comprensión profunda de LTV, CPA y rentabilidad real (MBA mindset).",
        icon: <Users className="w-6 h-6" />
      },
      {
        title: "Dominio Técnico",
        desc: "Experto en plataformas publicitarias, tracking avanzado y automatización.",
        icon: <Database className="w-6 h-6" />
      },
      {
        title: "Análisis Crítico",
        desc: "Capacidad para extraer 'insights' accionables de grandes volúmenes de datos.",
        icon: <BarChart3 className="w-6 h-6" />
      }
    ]
  },
  en: {
    title: "My Value",
    highlight: "Proposition",
    description: "I act as the necessary bridge between high-level business goals and granular technical execution.",
    pillars: [
      {
        title: "Business Vision",
        desc: "Deep understanding of LTV, CPA, and real profitability (MBA mindset).",
        icon: <Users className="w-6 h-6" />
      },
      {
        title: "Technical Mastery",
        desc: "Expert in advertising platforms, advanced tracking, and automation.",
        icon: <Database className="w-6 h-6" />
      },
      {
        title: "Critical Analysis",
        desc: "Ability to extract actionable insights from large data volumes.",
        icon: <BarChart3 className="w-6 h-6" />
      }
    ]
  }
};

export const EXPERIENCES: LocalizedContent<ExperienceItem[]> = {
  es: [
    {
      id: "1",
      role: "Search Acquisition Manager International",
      company: "tombola (Flutter Group)",
      period: "Oct 2021 - Presente",
      location: "Gibraltar / Remoto",
      description: "Liderazgo de la estrategia de adquisición en mercados altamente competitivos (UK, ES, DK). Transformación de canales PPC Web, GAC y ASA.",
      achievements: [
        "Eficiencia Radical (PPC Web UK): Reducción del gasto de £3.8M a £2.08M (-45%) manteniendo volumen.",
        "Escalado App (GAC): Crecimiento +130% YoY en nuevos jugadores (NDPs).",
        "Consolidación ASA: Protección de marca y ROI cubierto en 1.3 años.",
        "Gestión de presupuestos multimillonarios (+£12M anuales) y equipos multidisciplinares."
      ]
    },
    {
      id: "2",
      role: "Digital Marketing Consultant",
      company: "Collaborations for Digital Companies",
      period: "Jun 2020 - Sep 2021",
      location: "Remoto",
      description: "Consultoría 360° enfocada en captación, CRO y automatización.",
      achievements: [
        "Implementación de campañas de Email Marketing y metodologías ágiles.",
        "Consultoría CRM (Salesforce, HubSpot) y optimización de funnels.",
        "Desarrollo web y CRO para diversos clientes internacionales."
      ]
    },
    {
      id: "3",
      role: "Project Manager",
      company: "Sayonara Marketing",
      period: "Oct 2019 - Ene 2020",
      location: "Jerez, España",
      description: "Gestión de proyectos digitales multi-equipo bajo metodología Agile.",
      achievements: [
        "Transformación e implementación de herramientas digitales.",
        "Coordinación entre clientes, diseño y equipos de desarrollo."
      ]
    },
    {
      id: "4",
      role: "Marketing Executive",
      company: "bChannels",
      period: "Nov 2013 - Ene 2015",
      location: "Oxford, UK",
      description: "Gestión de campañas y CRM para clientes internacionales.",
      achievements: [
        "Soporte técnico a equipos de ventas y marketing.",
        "Administración de grandes bases de datos."
      ]
    }
  ],
  en: [
    {
      id: "1",
      role: "Search Acquisition Manager International",
      company: "tombola (Flutter Group)",
      period: "Oct 2021 - Present",
      location: "Gibraltar / Remote",
      description: "Leading acquisition strategy in highly competitive markets (UK, ES, DK). Transforming PPC Web, GAC, and ASA channels.",
      achievements: [
        "Radical Efficiency (PPC Web UK): Spend reduction from £3.8M to £2.08M (-45%) while maintaining volume.",
        "App Scaling (GAC): +130% YoY growth in New Players (NDPs).",
        "ASA Consolidation: Brand protection and ROI covered in 1.3 years.",
        "Managing multi-million budgets (+£12M annually) and multidisciplinary teams."
      ]
    },
    {
      id: "2",
      role: "Digital Marketing Consultant",
      company: "Collaborations for Digital Companies",
      period: "Jun 2020 - Sep 2021",
      location: "Remote",
      description: "360° consulting focused on acquisition, CRO, and automation.",
      achievements: [
        "Implementation of Email Marketing campaigns and agile methodologies.",
        "CRM Consulting (Salesforce, HubSpot) and funnel optimization.",
        "Web development and CRO for various international clients."
      ]
    },
    {
      id: "3",
      role: "Project Manager",
      company: "Sayonara Marketing",
      period: "Oct 2019 - Jan 2020",
      location: "Jerez, Spain",
      description: "Management of multi-team digital projects under Agile methodology.",
      achievements: [
        "Transformation and implementation of digital tools.",
        "Coordination between clients, design, and development teams."
      ]
    },
    {
      id: "4",
      role: "Marketing Executive",
      company: "bChannels",
      period: "Nov 2013 - Jan 2015",
      location: "Oxford, UK",
      description: "Management of campaigns and CRM for international clients.",
      achievements: [
        "Technical support to sales and marketing teams.",
        "Administration of large databases."
      ]
    }
  ]
};

export const SKILLS: LocalizedContent<SkillCategory[]> = {
  es: [
    {
      title: "Hard Skills & Canales",
      skills: ["Google Ads (PPC Web)", "Google App Campaigns (GAC)", "Apple Search Ads (ASA)", "Smart Bidding", "Search Ads 360"],
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Data & Analítica",
      skills: ["Google Analytics 4 (GA4)", "Looker Studio", "SQL Básico", "Modelos de Atribución (DDA)", "Análisis de Cohortes"],
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Tecnología & Web",
      skills: ["HTML / CSS", "JavaScript (Lectura)", "WordPress / Umbraco", "Integraciones CRM", "Automatización"],
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Soft Skills & Liderazgo",
      skills: ["Pensamiento Sistémico", "Liderazgo Transversal", "Resolución de Problemas", "Comunicación C-Level", "Orientación a Resultados"],
      icon: <Users className="w-5 h-5" />
    }
  ],
  en: [
    {
      title: "Hard Skills & Channels",
      skills: ["Google Ads (PPC Web)", "Google App Campaigns (GAC)", "Apple Search Ads (ASA)", "Smart Bidding", "Search Ads 360"],
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Data & Analytics",
      skills: ["Google Analytics 4 (GA4)", "Looker Studio", "Basic SQL", "Attribution Models (DDA)", "Cohort Analysis"],
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      title: "Tech & Web",
      skills: ["HTML / CSS", "JavaScript (Reading)", "WordPress / Umbraco", "CRM Integrations", "Automation"],
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Soft Skills & Leadership",
      skills: ["Systems Thinking", "Cross-Functional Leadership", "Problem Solving", "C-Level Communication", "Results Orientation"],
      icon: <Users className="w-5 h-5" />
    }
  ]
};

export const PROJECTS: LocalizedContent<ProjectItem[]> = {
  es: [
    {
      title: "Transformación PPC Web UK",
      description: "Reestructuración completa de la cuenta de Google Ads para el mercado de Reino Unido, pasando de una gestión manual ineficiente a un sistema automatizado basado en valor.",
      technologies: ["Google Ads", "Smart Bidding", "SA360", "JavaScript Scripts", "Google Sheets"],
      contribution: "Reducción del gasto anual de £3.8M a £2.08M (-45%) manteniendo el volumen de conversiones. Implementación de scripts de pausa por CPA y migración total a Smart Bidding."
    },
    {
      title: "Escalado Google App Campaigns (GAC)",
      description: "Estrategia de crecimiento para la adquisición de usuarios móviles en un entorno de alta volatilidad.",
      technologies: ["Google App Campaigns", "Firebase", "AppsFlyer", "Looker Studio"],
      contribution: "Logro de un crecimiento del +130% YoY en nuevos jugadores (NDPs). Diseño de señales personalizadas post-install para alimentar el algoritmo de Google."
    },
    {
      title: "Reorganización Apple Search Ads",
      description: "Optimización de la estructura de campañas en Apple Search Ads para mejorar la defensa de marca y la eficiencia.",
      technologies: ["Apple Search Ads", "Excel Avanzado", "Mobile Measurement Partners"],
      contribution: "Consolidación de 200 grupos de anuncios a 40 segmentos eficientes. Mantenimiento de un ROI positivo con recuperación de inversión en 1.3 años."
    }
  ],
  en: [
    {
      title: "UK PPC Web Transformation",
      description: "Complete restructuring of the Google Ads account for the UK market, moving from inefficient manual management to an automated value-based system.",
      technologies: ["Google Ads", "Smart Bidding", "SA360", "JavaScript Scripts", "Google Sheets"],
      contribution: "Annual spend reduction from £3.8M to £2.08M (-45%) while maintaining conversion volume. Implementation of CPA slash scripts and total migration to Smart Bidding."
    },
    {
      title: "Google App Campaigns Scaling (GAC)",
      description: "Growth strategy for mobile user acquisition in a high-volatility environment.",
      technologies: ["Google App Campaigns", "Firebase", "AppsFlyer", "Looker Studio"],
      contribution: "Achieved +130% YoY growth in new players (NDPs). Designed custom post-install signals to feed the Google algorithm."
    },
    {
      title: "Apple Search Ads Reorganization",
      description: "Optimization of Apple Search Ads campaign structure to improve brand defense and efficiency.",
      technologies: ["Apple Search Ads", "Advanced Excel", "Mobile Measurement Partners"],
      contribution: "Consolidation of 200 ad groups into 40 efficient segments. Maintenance of positive ROI with payback in 1.3 years."
    }
  ]
};

export const TESTIMONIALS: LocalizedContent<TestimonialItem[]> = {
  es: [
    {
      quote: "Miguel Ángel y yo comenzamos juntos nuestra andadura por el mundo de la calidad del producto software. Durante el tiempo que trabajamos juntos fue un compañero de máxima confianza, en el que se podía delegar cuando era necesario y que atendía sus tareas asignadas con buenos resultados. Además el día a día, hacía muy agradable la jornada, ya que se trata de alguien con buen sentido del humor y que facilita el trabajo en equipo. Fue un placer trabajar junto a él durante ese periodo de tiempo.",
      author: "Manuel Fernández Fontán",
      role: "Responsable de Selección y Calidad",
      company: ""
    },
    {
      quote: "Miguel y yo hemos trabajado juntos durante este tiempo, y puedo decir que ha sido un verdadero profesional en todos los aspectos. Cuando ha asumido roles de liderazgo, lo ha hecho con una habilidad y confianza impresionantes, demostrando ser un líder excepcional. Además ha sido un excelente compañero de trabajo, siempre dispuesto a colaborar y compartir su conocimiento. He aprendido mucho de él y valoro enormemente su capacidad para crear un ambiente laboral positivo y productivo. Sin duda, Miguel es un activo valioso para cualquier equipo y le recomiendo encarecidamente.",
      author: "Álvaro Jiménez García",
      role: "Digital Marketing Executive",
      company: "Google Ads SME"
    },
    {
      quote: "Tuve el placer de contar con Miguel como parte de mi equipo de Paid Search, donde destacó por su disposición y excelente actitud. Siempre mostró iniciativa para asumir nuevos retos y aportar soluciones, además una energía positiva que hacía trabajar con él fuera muy fácil. Su capacidad para adaptarse, aprender rápido y colaborar con el equipo lo convierte en un gran activo para cualquier empresa. Sin duda lo recomendaría a cualquier equipo de marketing digital que busque un buen profesional.",
      author: "Carmen Aguera",
      role: "Digital Marketing Lead",
      company: "Performance Marketing"
    },
    {
      quote: "He tenido el placer de tener a Miguel en mi equipo durante más de 2 años, puedo decir con confianza que es uno de los profesionales de PPC más hábiles y dedicados que he conocido. Como Senior PPC Executive, Miguel aporta una rara combinación de pensamiento estratégico, toma de decisiones basada en datos, creatividad y experiencia práctica que ofrece consistentemente un rendimiento de campaña sobresaliente. Ya sea Google Ads, Bing o plataformas de redes sociales, Miguel sabe cómo optimizar campañas para maximizar el ROI manteniendo un ojo agudo en los objetivos comerciales más amplios. Su capacidad para profundizar en análisis, identificar oportunidades y ejecutar cambios de alto impacto ha marcado una diferencia tangible en nuestra rentabilidad. Lo que también distingue a Miguel es su espíritu colaborativo y calma bajo presión. Miguel es un gran comunicador que puede explicar estrategias complejas de PPC de una manera clara y accesible, convirtiéndolo en un recurso de referencia no solo para el equipo de marketing, sino también para las partes interesadas multifuncionales. Si buscas a alguien que pueda elevar tu estrategia de medios pagados con experiencia e integridad, Miguel es la persona que estás buscando.",
      author: "Victor Fernández Calvo",
      role: "Senior Acquisition B2B, B2C",
      company: ""
    }
  ],
  en: [
    {
      quote: "Miguel Ángel and I started our journey in the world of software product quality together. During the time we worked together, he was a colleague of utmost trust, someone to whom tasks could be delegated when necessary and who attended to his assigned tasks with good results. In addition, day to day, he made the workday very pleasant, as he is someone with a good sense of humor who facilitates teamwork. It was a pleasure to work with him during that period of time.",
      author: "Manuel Fernández Fontán",
      role: "Head of Recruitment & Quality",
      company: ""
    },
    {
      quote: "Miguel and I have worked together during this time, and I can say that he has been a true professional in all aspects. When he has assumed leadership roles, he has done so with impressive skill and confidence, proving to be an exceptional leader. He has also been an excellent coworker, always willing to collaborate and share his knowledge. I have learned a lot from him and greatly value his ability to create a positive and productivework environment. Without a doubt, Miguel is a valuable asset to any team and I highly recommend him.",
      author: "Álvaro Jiménez García",
      role: "Digital Marketing Executive",
      company: "Google Ads SME"
    },
    {
      quote: "I had the pleasure of counting on Miguel as part of my Paid Search team, where he stood out for his disposition and excellent attitude. He always showed initiative to assume new challenges and provide solutions, plus a positive energy that made working with him very easy. His ability to adapt, learn quickly, and collaborate with the team makes them a great asset to any company. I would definitely recommend him to any digital marketing team looking for a good professional.",
      author: "Carmen Aguera",
      role: "Digital Marketing Lead",
      company: "Performance Marketing"
    },
    {
      quote: "I've had the pleasure of having Miguel in my team for over 2 years, I can confidently say he's one of the most skilled and dedicated PPC professionals I've encountered. As a Senior PPC Executive, Miguel brings a rare combination of strategic thinking, data-driven decision-making, creativity and hands-on expertise that consistently delivers outstanding campaign performance. Whether it's Google Ads, Bing, or social media platforms, Miguel knows how to optimize campaigns to maximize ROI while keeping a sharp eye on broader business goals. His ability to dive deep into analytics, identify opportunities, and execute high-impact changes has made a tangible difference to our bottom line. What also sets Miguel apart is their collaborative spirit and calm under pressure. Miguel is a great communicator who can explain complex PPC strategies in a clear, approachable way—making them a go-to resource not just for the marketing team, but for cross-functional stakeholders as well. If you're looking for someone who can elevate your paid media strategy with both expertise and integrity, Miguel is the person you're looking for.",
      author: "Victor Fernández Calvo",
      role: "Senior Acquisition B2B, B2C",
      company: ""
    }
  ]
};

export const UI_TEXT = {
  es: {
    statsTitle: "Casos de Éxito",
    statsHeading: ["Menos Gasto,", "Más Resultados."],
    statsLabels: {
      reduction: "Ahorro de Presupuesto",
      growth: "Crecimiento de Usuarios",
      payback: "Retorno de Inversión"
    },
    charts: {
      spend: "Gasto vs Rendimiento",
      acquisition: "Captación Mensual"
    },
    skillsTitle: "Tecnología y Aptitudes",
    experienceTitle: "Mi Recorrido Profesional",
    projectsTitle: ["Impacto Directo", "en Negocio."],
    projectsImpact: "Resultado Clave",
    testimonialsTitle: ["Lo que dicen", "mis compañeros."],
    personalTitle: "Un poco más de mí",
    readMore: "Leer más",
    readLess: "Cerrar",
    viewLinkedIn: "Ver perfil completo",
    contactTitle: ["¿Hablamos del", "siguiente paso?"],
    contactDesc: "Si buscas un perfil híbrido que entienda el negocio y domine la ejecución técnica, escríbeme.",
    form: {
      name: "Nombre",
      namePlaceholder: "Escribe tu nombre...",
      email: "Correo electrónico",
      emailPlaceholder: "tu@email.com",
      message: "Mensaje",
      messagePlaceholder: "¿Cómo puedo ayudarte?",
      submit: "Enviar mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!"
    },
    footer: "Diseñado con enfoque en resultados."
  },
  en: {
    statsTitle: "Success Stories",
    statsHeading: ["Less Spend,", "More Results."],
    statsLabels: {
      reduction: "Budget Saving",
      growth: "User Growth",
      payback: "Return on Investment"
    },
    charts: {
      spend: "Spend vs Performance",
      acquisition: "Monthly Acquisition"
    },
    skillsTitle: "Tech & Expertise",
    experienceTitle: "Professional Journey",
    projectsTitle: ["Direct", "Business Impact."],
    projectsImpact: "Key Result",
    testimonialsTitle: ["What", "they say."],
    personalTitle: "A bit more about me",
    readMore: "Read more",
    readLess: "Close",
    viewLinkedIn: "View full profile",
    contactTitle: ["Let's talk about the", "next step?"],
    contactDesc: "If you are looking for a hybrid profile that understands business and masters technical execution, write to me.",
    form: {
      name: "Name",
      namePlaceholder: "Type your name...",
      email: "Email",
      emailPlaceholder: "you@email.com",
      message: "Message",
      messagePlaceholder: "How can I help you?",
      submit: "Send message",
      sending: "Sending...",
      success: "Message sent successfully!"
    },
    footer: "Designed with a results-oriented approach."
  }
};

// ==========================================
// COMPONENTS
// ==========================================

const Hero: React.FC<{ language: Language }> = ({ language }) => {
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
                          e.currentTarget.style.display = 'none';
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

const StatsSection: React.FC<{ theme: string; language: Language }> = ({ theme, language }) => {
  const isDark = theme === 'dark';
  const ui = UI_TEXT[language];

  const spendData = [
    { year: '2024', gasto: 3.81 },
    { year: '2025', gasto: 2.08 },
  ];

  const growthData = [
    { year: '2022', ndps: 7905 },
    { year: '2023', ndps: 9500 },
    { year: '2024', ndps: 10200 },
    { year: '2025', ndps: 11533 },
  ];

  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-ink-950 text-white dark:bg-white dark:text-ink-950 text-sm font-bold uppercase tracking-widest mb-4 transform -rotate-2">
            {ui.statsTitle}
          </div>
          <h3 className="text-5xl md:text-6xl font-serif font-black text-ink-950 dark:text-white mb-6">
            {ui.statsHeading[0]} <br/>
            <span className="text-electric-coral italic">{ui.statsHeading[1]}</span>
          </h3>
        </div>

        {/* Playful Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Card 1 - Violet */}
            <div className="bg-electric-violet/10 dark:bg-electric-violet/20 border-2 border-electric-violet rounded-3xl p-8 transform rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-electric-violet text-white rounded-lg">
                        <Activity size={24} />
                    </div>
                    <span className="font-black text-electric-violet/50 text-4xl">01</span>
                </div>
                <h4 className="text-6xl font-black text-ink-950 dark:text-white mb-2 tracking-tighter">-45%</h4>
                <p className="font-bold text-lg text-electric-violet mb-2">{ui.statsLabels.reduction}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">PPC UK: £3.8M → £2.08M</p>
            </div>

            {/* Card 2 - Lime */}
            <div className="bg-electric-lime/20 dark:bg-electric-lime/10 border-2 border-electric-lime rounded-3xl p-8 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-sm z-10">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-electric-lime text-ink-950 rounded-lg">
                        <Users size={24} />
                    </div>
                    <span className="font-black text-electric-lime/50 text-4xl">02</span>
                </div>
                <h4 className="text-6xl font-black text-ink-950 dark:text-white mb-2 tracking-tighter">+130%</h4>
                <p className="font-bold text-lg text-ink-950 dark:text-white mb-2">{ui.statsLabels.growth}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Google App Campaigns (GAC)</p>
            </div>

            {/* Card 3 - Cyan */}
            <div className="bg-electric-cyan/10 dark:bg-electric-cyan/20 border-2 border-electric-cyan rounded-3xl p-8 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-electric-cyan text-ink-950 rounded-lg">
                        <DollarSign size={24} />
                    </div>
                    <span className="font-black text-electric-cyan/50 text-4xl">03</span>
                </div>
                <h4 className="text-6xl font-black text-ink-950 dark:text-white mb-2 tracking-tighter">1.3y</h4>
                <p className="font-bold text-lg text-electric-cyan-700 dark:text-electric-cyan mb-2">{ui.statsLabels.payback}</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">Apple Search Ads (ASA) ROI.</p>
            </div>
        </div>

        {/* Charts Container - Fun Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-ink-900 border-2 border-ink-950 dark:border-white rounded-3xl p-8 shadow-pop relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <TrendingUp size={100} />
                </div>
                <h4 className="text-xl font-black text-ink-950 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-3 h-3 bg-electric-coral rounded-full"></span> {ui.charts.spend}
                </h4>
                <div className="h-64 w-full relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={spendData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? '#334155' : '#e2e8f0'} />
                            <XAxis dataKey="year" stroke={isDark ? '#94a3b8' : '#64748b'} tickLine={false} axisLine={false} />
                            <YAxis 
                                tickFormatter={(value) => `£${value}M`} 
                                stroke={isDark ? '#94a3b8' : '#64748b'} 
                                tickLine={false} 
                                axisLine={false} 
                            />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                cursor={{fill: 'transparent'}}
                                formatter={(value: number) => [`£${value}M`, 'Gasto']}
                            />
                            <Bar dataKey="gasto" fill="#fb7185" radius={[8, 8, 8, 8]} barSize={50} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white dark:bg-ink-900 border-2 border-ink-950 dark:border-white rounded-3xl p-8 shadow-pop relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Users size={100} />
                </div>
                <h4 className="text-xl font-black text-ink-950 dark:text-white mb-6 flex items-center gap-2">
                    <span className="w-3 h-3 bg-electric-lime rounded-full"></span> {ui.charts.acquisition}
                </h4>
                <div className="h-64 w-full relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={growthData}>
                            <defs>
                                <linearGradient id="colorNdps" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#a3e635" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#a3e635" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? '#334155' : '#e2e8f0'} />
                            <XAxis dataKey="year" stroke={isDark ? '#94a3b8' : '#64748b'} tickLine={false} axisLine={false} />
                            <YAxis stroke={isDark ? '#94a3b8' : '#64748b'} tickLine={false} axisLine={false} />
                            <Tooltip 
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                            />
                            <Area type="monotone" dataKey="ndps" stroke="#a3e635" strokeWidth={4} fillOpacity={1} fill="url(#colorNdps)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

const ValueProp: React.FC<{ language: Language }> = ({ language }) => {
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

            {/* Professional Schematic Diagram */}
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

const Skills: React.FC<{ language: Language }> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null); // Fixed: Removed <string>
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

const ExperienceTimeline: React.FC<{ language: Language }> = ({ language }) => {
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

const Contact: React.FC<{ language: Language }> = ({ language }) => {
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

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, language, toggleLanguage }) => {
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

const Projects: React.FC<{ language: Language }> = ({ language }) => {
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

const Testimonials: React.FC<{ language: Language }> = ({ language }) => {
  const content = TESTIMONIALS[language];
  const ui = UI_TEXT[language];
  const [expandedIndex, setExpandedIndex] = useState(null); // Fixed: Removed <number | null>

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const MAX_LENGTH = 200;

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <h3 className="text-center text-4xl font-serif font-black text-ink-950 dark:text-white mb-16">
            {ui.testimonialsTitle[0]} <span className="underline decoration-wavy decoration-electric-lime">{ui.testimonialsTitle[1]}</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-16">
            {content.map((testimonial, index) => {
                const isLong = testimonial.quote.length > MAX_LENGTH;
                const isExpanded = expandedIndex === index;
                const displayQuote = isExpanded || !isLong 
                    ? testimonial.quote 
                    : `${testimonial.quote.slice(0, MAX_LENGTH)}...`;

                return (
                    <div key={index} className={`relative p-8 rounded-[2rem] border-2 border-ink-950 dark:border-white shadow-pop hover:-translate-y-2 transition-all duration-300 ${index % 2 === 0 ? 'bg-white dark:bg-ink-900 rotate-1' : 'bg-electric-yellow dark:bg-electric-violet -rotate-1'}`}>
                        {/* Chat Tail */}
                        <div className={`absolute bottom-[-2px] ${index % 2 === 0 ? 'left-8' : 'right-8'} w-6 h-6 border-b-2 border-r-2 border-ink-950 dark:border-white bg-inherit transform rotate-45 translate-y-1/2`}></div>
                        
                        <div className={`text-lg font-bold mb-6 leading-relaxed ${index % 2 === 0 ? 'text-ink-950 dark:text-white' : 'text-ink-950 dark:text-white'}`}>
                            "{displayQuote}"
                            {isLong && (
                                <button 
                                    onClick={() => toggleExpand(index)}
                                    className="ml-2 text-sm font-black underline decoration-2 decoration-electric-cyan hover:text-electric-cyan-700 transition-colors cursor-pointer inline-block"
                                >
                                    {isExpanded ? ui.readLess : ui.readMore}
                                </button>
                            )}
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-ink-950 dark:bg-white rounded-full flex items-center justify-center text-white dark:text-ink-950 font-black text-xl shrink-0">
                                {testimonial.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className={`font-black ${index % 2 === 0 ? 'text-ink-950 dark:text-white' : 'text-ink-950 dark:text-white'}`}>
                                    {testimonial.author}
                                </h4>
                                <p className={`text-xs uppercase tracking-wider font-bold ${index % 2 === 0 ? 'text-slate-500 dark:text-slate-400' : 'text-ink-950/70 dark:text-white/80'}`}>
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* LinkedIn Link */}
        <div className="flex justify-center">
            <a 
                href="https://linkedin.com/in/migueljaenes/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-ink-900 text-ink-950 dark:text-white border-2 border-ink-950 dark:border-white rounded-2xl font-bold hover:bg-slate-50 dark:hover:bg-ink-800 transition-all hover:border-electric-cyan hover:text-electric-cyan-700 dark:hover:text-electric-cyan shadow-sm hover:shadow-pop-sm"
            >
                <Linkedin size={20} />
                {ui.viewLinkedIn}
            </a>
        </div>
      </div>
    </section>
  );
};

const AboutMe: React.FC<{ language: Language }> = ({ language }) => {
  const content = ABOUT_ME[language];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-24">
            
            {/* Visual Side with Placeholder */}
            <div className="md:w-5/12 relative group">
                 <div className="absolute inset-0 bg-electric-yellow transform rotate-3 rounded-[2.5rem] shadow-pop group-hover:rotate-6 transition-transform duration-500"></div>
                 
                 <div className="relative bg-slate-200 dark:bg-ink-800 border-4 border-ink-950 dark:border-white rounded-[2.5rem] overflow-hidden transform -rotate-3 group-hover:rotate-0 transition-all duration-500 shadow-sm flex items-center justify-center min-h-[400px]">
                    
                    {/* Placeholder Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-ink-900 dark:to-ink-800">
                        <User size={80} strokeWidth={1} className="opacity-30" />
                    </div>

                    <img 
                        src="miguel-jaenes-personal.png" 
                        alt="Miguel Ángel Working" 
                        className="relative z-10 w-full h-auto object-cover transition-all duration-500"
                        onError={(e) => {
                           e.currentTarget.style.display = 'none';
                        }}
                    />
                 </div>

                 {/* Sticker Badges */}
                 {content.highlights.map((item, idx) => (
                    <div 
                        key={idx}
                        className={`absolute ${
                            idx === 0 ? '-top-6 -left-6 rotate-[-10deg]' : 
                            idx === 1 ? 'top-1/2 -right-10 rotate-[5deg]' : 
                            '-bottom-6 left-12 rotate-[-5deg]'
                        } px-6 py-3 ${item.color} border-2 border-ink-950 shadow-pop text-ink-950 font-black text-sm uppercase tracking-wider z-20 animate-float`}
                        style={{ animationDelay: `${idx * 1.5}s` }}
                    >
                        {item.text}
                    </div>
                 ))}
            </div>

            {/* Content Side */}
            <div className="md:w-7/12">
                <div className="inline-block px-4 py-2 bg-electric-cyan text-ink-950 text-xs font-black uppercase tracking-widest mb-8 rounded-lg border-2 border-ink-950 shadow-pop-sm transform -rotate-1">
                    {content.label}
                </div>
                
                <h3 className="text-5xl md:text-6xl font-serif font-black text-ink-950 dark:text-white mb-10 leading-none">
                    {content.title}
                </h3>

                <div className="prose prose-xl dark:prose-invert max-w-none">
                    <p className="text-xl text-slate-700 dark:text-slate-200 mb-10 leading-relaxed font-medium">
                        {content.story}
                    </p>
                </div>

                <div className="bg-paper-100 dark:bg-ink-800 p-10 rounded-[2rem] border-l-[12px] border-electric-coral relative mt-12 shadow-sm">
                    <Quote className="absolute top-6 right-8 text-electric-coral opacity-20" size={50} />
                    <p className="text-2xl md:text-3xl font-serif italic text-ink-950 dark:text-white font-black leading-snug">
                        "{content.philosophy}"
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

const Personal: React.FC<{ language: Language }> = ({ language }) => {
  const content = PERSONAL_DATA[language];
  const ui = UI_TEXT[language];

  return (
    <section id="personal" className="py-24 relative overflow-hidden bg-paper-50 dark:bg-ink-950 transition-colors">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-serif font-black text-ink-950 dark:text-white mb-4">
             {content.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-medium">
            {content.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.items.map((item, idx) => {
                const rotations = ['rotate-2', '-rotate-2', 'rotate-1', '-rotate-3'];
                return (
                    <div 
                        key={idx}
                        className={`group p-8 ${item.color} ${rotations[idx % rotations.length]} hover:rotate-0 border-2 border-ink-950 dark:border-white shadow-pop hover:shadow-pop-hover transition-all duration-300 rounded-3xl flex flex-col items-center text-center`}
                    >
                        <div className="w-16 h-16 bg-white dark:bg-ink-900 border-2 border-ink-950 rounded-2xl flex items-center justify-center mb-6 shadow-pop-sm group-hover:-translate-y-2 transition-transform">
                            {item.icon}
                        </div>
                        <h4 className="text-2xl font-black text-ink-950 dark:text-white mb-3">
                            {item.title}
                        </h4>
                        <p className="text-ink-950/70 dark:text-white/70 font-bold text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
};

// ==========================================
// APP COMPONENT
// ==========================================

function App() {
  const [theme, setTheme] = useState('light');
  // Fixed: Removed <Language> generic type to avoid Babel syntax errors
  const [language, setLanguage] = useState('es');

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
        {/* Fixed: Removed "as Language" casting */}
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

// ==========================================
// RENDER
// ==========================================

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("No se encontró el elemento root en el DOM.");
} else {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
