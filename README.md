# 🚀 Portafolio Web – Felipe Farías

Desarrollador Web con enfoque en soluciones rápidas, eficientes y escalables.
Amo la cerveza 🍺 y la playa 🏖️

## 🌐 Ver portafolio en vivo

[![Ver Portafolio](https://img.shields.io/badge/Ver%20Portafolio-Online-green?style=for-the-badge)](https://ffariascubillos.github.io/portafolio/)

---

## 🧩 Sobre este proyecto

Este portafolio fue desarrollado para mostrar proyectos reales en los que he trabajado, incluyendo desarrollo frontend, backend y soluciones en WordPress.

Incluye:

- Landing pages
- Desarrollo WordPress (themes y customizaciones)
- Integraciones con APIs
- Optimización de rendimiento

---

## Estructura

- `index.html`: contenido del portafolio y tarjetas de proyectos.
- `assets/css/app.css`: estilos propios del portafolio.
- `assets/css/aos.css`: estilos locales de Animate On Scroll.
- `assets/js/app.js`: inicialización de AOS.
- `assets/js/aos.js`: biblioteca AOS local.
- `assets/images/`: imágenes generales del portafolio.
- `proyectos/`: demos frontend independientes y portadas de proyectos externos.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3 / SASS
- JavaScript
- PHP
- WordPress

---

## 📌 Objetivo

Seguir mejorando y actualizando este portafolio con nuevos proyectos y tecnologías, especialmente enfocado en React y desarrollo moderno.

---

## 📫 Contacto

- Email: [ffariascubillos@email.com](mailto:ffariascubillos@email.com)
- LinkedIn: https://www.linkedin.com/in/fc-felipe/

---

## Desarrollo local

El sitio debe servirse por HTTP para comprobar correctamente rutas, scripts y recursos:

```powershell
python -m http.server 8000
```

Luego se puede abrir `http://localhost:8000/`. Los archivos HTML, CSS y JavaScript servidos son la fuente canónica; no existe un paso de build.

---

## Mantenimiento

- Las tarjetas se editan directamente en `index.html`.
- Los estilos visuales se mantienen en `assets/css/app.css`.
- Cada demo dentro de `proyectos/` conserva sus rutas y dependencias locales para funcionar de manera aislada.
- Ripley carga `dist/assets/app-iMa0ba-F.js`; ese bundle forma parte de la demo publicada y no debe eliminarse sin actualizar su HTML.
- No se deben consolidar fuentes o librerías entre demos sin comprobar todas sus rutas relativas.
- Antes de publicar, se deben validar enlaces, recursos locales y las vistas de 375, 768 y 1440 píxeles.

---

## Seguridad

Este repositorio no debe contener credenciales, configuración de servidores ni backends históricos. Los secretos eliminados del árbol actual pueden seguir existiendo en commits anteriores.

Acciones externas pendientes para cualquier credencial que haya sido publicada anteriormente:

1. Rotar la contraseña en el proveedor de base de datos.
2. Invalidar usuarios o accesos históricos innecesarios.
3. Coordinar una reescritura del historial Git si se necesita eliminar los valores de commits anteriores.
4. Informar a quienes tengan clones existentes antes de realizar cualquier `force-push`.
