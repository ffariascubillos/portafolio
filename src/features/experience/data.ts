export type Experience = {
  company: string
  role?: string
  period: string
  description: string
  clients?: string
  tags?: string[]
}

export const experience: Experience[] = [
  {
    company: "Desarrollador Web & Mobile Freelance",
    period: "Marzo 2026 – Presente",
    description:
      "Desarrolloooo de aplicación móvil veterinaria con React Native, Expo, Node.js, Express y PostgreSQL, implementando API REST, arquitectura modular y persistencia de datos. Desarrollo freelance de sitios y plataformas web en WordPress, desde la maquetación hasta el despliegue, con optimización WPO y buenas prácticas de SEO. Formación continua mediante certificaciones en React y TypeScript, incorporando herramientas y agentes de IA para optimizar el flujo de desarrollo y pruebas de código.",
  },
  {
    company: "CORFO",
    role: "Desarrollador WordPress",
    period: "Nov 2025 - Feb 2026",
    description:
      "Desarrollo de módulos, funcionalidades y plugins con PHP y JavaScript, optimización de rendimiento (WPO) y resolución de incidencias en producción. Migración, configuración y administración de plataformas web en servidores.",
    tags: ["PHP", "JavaScript", "WordPress", "MySQL", "SSH", "Nginx", "Git"],
  },
  {
    company: "McCann WorldGroup / MRM",
    role: "Desarrollador web",
    period: "Sep 2021 – Oct 2025",
    description:
      "Desarrollo de sitios web, landing pages, emails HTML y herramientas internas, incluyendo dashboards, módulos CRUD e integración de APIs. Desarrollo de templates desde cero y plugins a medida para WordPress, además de administración, configuración y despliegue de entornos de producción en servidores.",
    clients: "Cenco Malls, Entel, Ripley, SuperCerdo, MetLife, Adidas, Nestlé, Rheem, Virutex.",
    tags: ["PHP", "WordPress", "Bootstrap", "JavaScript (ES6+)", "MySQL", "HTML5", "CSS3", "Git"],
  },
  {
    company: "EL LIVING (Zoo Digital)",
    role: "Desarrollador Web",
    period: "Feb 2017 – Ago 2021",
    description:
      "Desarrollo y maquetación de interfaces responsive a partir de diseños UX/UI, creación de templates desde cero y plugins para WordPress, e integración de WooCommerce y pasarelas de pago.",
    clients: "Cruz Verde, Total, UNIACC, IACC, Tronwell, Jardín Infantil Vitamina.",
    tags: ["JavaScript", "WordPress", "PHP", "jQuery", "HTML5", "CSS3", "Bootstrap", "Git"],
  },
]
