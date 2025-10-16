import { motion } from "motion/react";
import CardTrabajo from "./CardTrabajo"; // tu nuevo componente de card

export default function Works() {
  const projects = [
    {
      id: 1,
      title: "MetLife Chile",
      folder: "metlife",
      cover: new URL("../assets/trabajos/metlife/portada.png", import.meta.url).href,
      description:
        "Desarrollo de plantillas para correos en HTML, responsive. Testadas (QA) en Litmus para garantizar compatibilidad en los principales clientes de correo.",
      tech: ["HTML", "CSS"],
    },
    {
      id: 2,
      title: "Ripley Giftcard",
      folder: "ripley_giftcard",
      cover: new URL("../assets/trabajos/ripley_giftcard/portada.png", import.meta.url).href,
      description:
        "Landing Page que desarrollé para la campaña Giftcard, esta landing fue alojada en el sitio oficial de Ripley mientras duró la campaña.",
      tech: ["HTML", "CSS", "Javascript"],
    },
    {
      id: 3,
      title: "Super Cerdo - Saborizados",
      folder: "supercerdo_saborizados",
      cover: new URL("../assets/trabajos/supercerdo_saborizados/portada.png", import.meta.url).href,
      description:
        "Desarrollé esta Landing Page con un administrador para que el ejeutivo pueda editar, agregar y eliminar productos.",
      tech: ["HTML5", "PHP", "MySQL", "CSS", "Javascript"],
    },
    {
      id: 4,
      title: "Landing Adidas",
      folder: "adidas",
      cover: new URL("../assets/trabajos/adidas/portada.png", import.meta.url).href,
      description:
        "Campaña Chilean For A Day copa América en Texas Estados Unidos. Página web solamente para mobile.",
      tech: ["HTML5", "CSS", "Javascript"],
    },
    {
      id: 5,
      title: "Super Cerdo - Saborizados 2",
      folder: "supercerdo_saborizados2",
      cover: new URL("../assets/trabajos/supercerdo_saborizados2/portada.png", import.meta.url).href,
      description:
        "Segunda versión de la Landing Page de Super Cerdo, con un diseño más fresco y moderno.",
      tech: ["HTML5", "PHP", "MySQL", "CSS", "Javascript"],
    },
    {
      id: 6,
      title: "Super Cerdo - Sitio Web Corporativo",
      folder: "supercerdo_corporativo",
      cover: new URL("../assets/trabajos/supercerdo_corporativo/portada.png", import.meta.url).href,
      description:
        "Sitio web desarrollado en WordPress para Super Cerdo, con un administrador para gestionar el contenido del sitio. Mantención constantemente.",
      tech: ["HTML5", "PHP", "MySQL", "WordPress", "CSS", "Javascript"],
    },
    {
      id: 7,
      title: "McCann Worldgroup",
      folder: "mccann",
      cover: new URL("../assets/trabajos/mccann/portada.png", import.meta.url).href,
      description:
        "Sitio web diseñado desde cero según marca y colores corporativos de McCann Worldgroup Chile. Desarrollado en WordPress desde cero con un administrador para gestionar el contenido del sitio. Mantención constantemente.",
      tech: ["HTML5", "PHP", "MySQL", "WordPress", "CSS", "Javascript"],
    },
  ];

  return (
    <motion.section
      id="trabajos"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-24 bg-gray-200 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h3 className="text-2xl font-bold mb-4">TRABAJOS</h3>
      <div className="border-b-2 border-black w-12 mb-8"></div>
      <p className="text-1xl font-bold mb-10">Al abrir un trabajo puedes hacer zoom con doble click, con la rueda del mouse o con sus dedos en mobile</p>

      {/* GRID DE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CardTrabajo project={p} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
