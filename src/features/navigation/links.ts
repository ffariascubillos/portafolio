export const NAV_LINKS = [
  { id: "sobre-mi", label: "Inicio" },
  { id: "experiencia", label: "Experiencia" },
  { id: "proyectos", label: "Proyectos" },
] as const

export const NAV_IDS = NAV_LINKS.map((l) => l.id)
