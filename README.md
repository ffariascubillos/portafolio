# 🚀 Portafolio – Felipe Farías

Desarrollador Web Full Stack. Landing pages, WordPress a medida e integraciones con APIs, siempre con foco en rendimiento. Amo la cerveza 🍺 y la playa 🏖️

[![Ver Portafolio](https://img.shields.io/badge/Ver%20Portafolio-Online-green?style=for-the-badge)](https://ffariascubillos.github.io/portafolio/)

## 🧩 Qué encontrarás

- **Inicio:** perfil, stack y contacto.
- **Experiencia:** CORFO, McCann WorldGroup / MRM y El Living.
- **Proyectos:** selección de trabajos, con demos en `public/proyectos/`.

## 🏗️ Estructura del proyecto

Vite + React + TypeScript + Tailwind v4 + shadcn/ui, con arquitectura por features:

```
src/
  features/    # navigation, hero, experience, projects (cada una con components/ y hooks/)
  shared/      # components/ui (shadcn), components y hooks reutilizables
public/
  proyectos/   # demos estáticas independientes
```

## 🛠️ Tecnologías

React, TypeScript, Tailwind v4, shadcn/ui, Vitest + Testing Library (unit) y Playwright (e2e).

## 💻 Desarrollo local

```bash
npm install
npm run dev       # servidor de desarrollo
npm run build     # tsc -b && vite build
npm run preview   # previsualiza el build de producción
npm test          # unit tests con Vitest
npm run test:e2e  # e2e con Playwright
```

## 📝 Notas

- Cada demo de `public/proyectos/` es independiente: no muevas sus archivos sin revisar sus rutas.
- El despliegue a GitHub Pages es automático vía `.github/workflows/deploy.yml` al pushear a `main`.
- Este repo no debe contener credenciales.

## 📫 Contacto

[ffariascubillos@gmail.com](mailto:ffariascubillos@gmail.com) · [LinkedIn](https://www.linkedin.com/in/fc-felipe/) · [GitHub](https://github.com/ffariascubillos)
