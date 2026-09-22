export type Experience = {
  company: string
  role: string
  period: string
  bullets: string[]
  clients: string
  tags: string[]
}

export const experience: Experience[] = [
  {
    company: "CORFO",
    role: "Desarrollador WordPress",
    period: "Nov 2025 - Feb 2026",
    bullets: [
      "**Desarrollo de módulos, funcionalidades y plugins** con PHP y JavaScript.",
      "**Optimización de rendimiento (WPO)** y resolución de incidencias en producción.",
      "**Migración y configuración de plataformas web** en servidores.",
      "Trabajo con Git, SSH, Nginx, MySQL y WordPress.",
    ],
    clients: "corfo.cl, soy.corfo.cl, startupchile.org",
    tags: ["PHP", "JavaScript", "WordPress", "MySQL", "SSH", "Nginx", "Git", "Docker"],
  },
  {
    company: "McCann WorldGroup / MRM",
    role: "Desarrollador web",
    period: "Sep 2021 - Oct 2025",
    bullets: [
      "**Desarrollo de sitios web, landing pages, emails HTML** y herramientas internas",
      "**Desarrollo de dashboards** y módulos CRUD.",
      "**Integración de APIs** y desarrollo de funcionalidades backend.",
      "**Desarrollo de Templates desde cero** y plugins a medida para WordPress.",
      "**Administración, despliegue y configuración de entornos de producción** en servidores Apache/Nginx vía SSH.",
    ],
    clients: "Cenco Malls, Entel, Ripley, SuperCerdo, MetLife, Adidas, Nestlé, Rheem, Virutex.",
    tags: ["Figma", "HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "WordPress", "MySQL", "Git"],
  },
  {
    company: "EL LIVING (Zoo Digital)",
    role: "Desarrollador web",
    period: "Feb 2017 - Ago 2021",
    bullets: [
      "**Desarrollo y maquetación de interfaces responsive** a partir de diseños UX/UI.",
      "**Integración de APIs** y pasarelas de pago.",
      "**Desarrollo de Templates desde cero** y plugins para WordPress. Integración de WooCommerce y pasarelas de pago.",
    ],
    clients: "Cruz Verde, Total, UNIACC, IACC, Tronwell, Jardín Infantil Vitamina.",
    tags: ["Figma", "HTML", "CSS", "Bootstrap", "JavaScript", "WordPress", "PHP", "jQuery", "Git"],
  },
]
