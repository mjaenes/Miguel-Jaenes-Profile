
import React from 'react';
import { ExperienceItem, SkillCategory, ProjectItem, TestimonialItem, LocalizedContent } from './types.ts';
import { 
  BarChart3, 
  Target, 
  Users, 
  Database, 
  Globe,
  Camera,
  Plane,
  BookOpen,
  Coffee
} from 'lucide-react';

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
    cvCta: "Descargar Currículum",
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
