export type ProjectLink = { label: string; href: string; local?: boolean }

export type Project = {
  title: string
  description: string
  image: { src: string; alt: string; width: number; height: number }
  tags: string[]
  links: ProjectLink[]
}

const cover = (dir: string, file = "portada.png") => `proyectos/${dir}/${file}`
const view = (href: string, local = false): ProjectLink[] => [{ label: "Ver Proyecto", href, local }]

export const projects: Project[] = [
  {
    title: "Ripley - Giftcard",
    description:
      "Apoyo en diseño UX/UI. Maquetación (Responsive Design), Desarrollo de landing page para la campaña Gift Card 2025, enfocada en conversión, performance y experiencia de usuario.",
    image: { src: cover("ripley-giftcard"), alt: "Landing page de Ripley Giftcard", width: 1202, height: 728 },
    tags: ["HTML", "CSS", "SASS", "JavaScript", "Vite", "SEO"],
    links: view("proyectos/ripley-giftcard/", true),
  },
  {
    title: "SuperCerdo.cl",
    description:
      "Desarrollo y mantenimiento del sitio web de Super Cerdo, incorporando mejoras continuas en frontend, SEO, rendimiento y experiencia de usuario.",
    image: { src: cover("sc-cl"), alt: "Sitio web SuperCerdo.cl", width: 1759, height: 872 },
    tags: ["WordPress", "Elementor", "PHP", "JavaScript", "HTML", "CSS"],
    links: view("https://supercerdo.cl"),
  },
  {
    title: "Somos Virutex",
    description:
      "Diseño UX/UI en Figma, maquetación frontend (Responsive Design) y desarrollo de plantilla personalizada para WordPress.",
    image: { src: cover("somosvirutex"), alt: "Sitio web Somos Virutex", width: 1847, height: 837 },
    tags: ["WordPress", "Figma UX/UI", "HTML", "CSS", "JavaScript", "PHP"],
    links: view("https://somosvirutex.cl/"),
  },
  {
    title: "SuperCerdo - Compra y Gana",
    description:
      "Maquetación y Desarrollo de landing para campaña promocional, permitiendo el ingreso y validación de códigos de productos, con foco en usabilidad, conversión y experiencia de usuario.",
    image: { src: cover("sc-concurso-2023", "portada.jpg"), alt: "Campaña SuperCerdo Compra y Gana", width: 1148, height: 1076 },
    tags: ["PHP", "JavaScript", "HTML", "CSS", "SQL"],
    links: view("proyectos/sc-concurso-2023/", true),
  },
  {
    title: "Adidas - Copa América Texas",
    description:
      "Desarrollo de landing page mobile-first para informar a residentes en Estados Unidos en Texas sobre los cantos de la barra chilena, optimizada para dispositivos móviles y experiencia de usuario.",
    image: { src: cover("chileansforaday"), alt: "Landing page Chileans For A Day", width: 195, height: 294 },
    tags: ["HTML", "CSS", "JavaScript", "SEO", "Vite", "Gulp"],
    links: view("proyectos/chileansforaday/", true),
  },
  {
    title: "McCann WorldGroup",
    description:
      "Diseño UX/UI en Figma. Desarrollo de sitio web corporativo desde cero con template personalizado en WordPress, priorizando rendimiento, usabilidad y escalabilidad.",
    image: { src: cover("mccann"), alt: "Sitio web McCann WorldGroup", width: 788, height: 899 },
    tags: ["Figma", "WordPress", "PHP", "JavaScript", "HTML", "CSS"],
    links: view("https://mccann.cl"),
  },
  {
    title: "MetLife - HTML Emails",
    description:
      "Apoyo Diseño UX/UI. Maquetación y desarrollo de más de 80 emails en HTML, optimizados para compatibilidad entre distintos clientes de correo, rendimiento y objetivos de conversión.",
    image: { src: cover("metlife"), alt: "Emails HTML para MetLife", width: 595, height: 485 },
    tags: ["HTML", "CSS"],
    links: [
      { label: "Ver Ejemplo Entel", href: "proyectos/metlife/ejemplo1.html", local: true },
      { label: "Ver Ejemplo Tipo 2", href: "proyectos/metlife/ejemplo2.html", local: true },
    ],
  },
  {
    title: "RayTal",
    description:
      "Diseño UX/UI en Figma, maquetación frontend (Responsive Design) y desarrollo de plantilla personalizada para WordPress.",
    image: { src: cover("raytal"), alt: "Sitio web RayTal", width: 1221, height: 768 },
    tags: ["Figma UX/UI", "HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    links: view("https://raytal.cl/"),
  },
  {
    title: "Ambitrans",
    description:
      "Diseño UX/UI en Figma, maquetación frontend (Responsive Design) y desarrollo de plantilla personalizada para WordPress.",
    image: { src: cover("ambitrans"), alt: "Sitio web Ambitrans", width: 1807, height: 840 },
    tags: ["Figma UX/UI", "HTML", "CSS", "JavaScript", "PHP", "WordPress"],
    links: view("https://ambitrans.cl/"),
  },
]
