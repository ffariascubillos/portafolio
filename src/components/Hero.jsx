import { motion } from "motion/react";
import fotoPerfil from "../assets/foto-avatar.jpeg"; // <-- guarda tu imagen en src/assets

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-24 pt-24 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Imagen de perfil */}
      <motion.img 
        src={fotoPerfil}
        alt="Foto Avatar"
        className="w-64 h-64 object-cover rounded-lg shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      />

      {/* Texto y enlaces */}
      <motion.div
        className="max-w-md text-center md:text-left"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold">Felipe Farias</h2>
        <p className="text-2xl text-gray-700">Desarrollador Web FullStack</p>
        <p className="mt-3 text-1xl text-gray-600">
          Cuento con 9 años de experiencia desarrollando soluciones web front-end y back-end para diversas agencias digitales en Chile, trabajando con marcas de gran alcance y proyectos personalizados.
        </p>
        {/* <motion.div
          className="flex flex-wrap justify-center gap-3 mt-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {["html", "css", "js", "react", "php", "wordpress", "mysql"].map((icon) => (
            <motion.img
              key={icon}
              src={`https://skillicons.dev/icons?i=${icon}&size=30`}
              alt={icon}
              className="transition-transform hover:scale-110"
              whileHover={{ scale: 1.15 }}
            />
          ))}
        </motion.div> */}
        <div className="text-center md:text-left">
          <motion.a
            href="#trabajos"
            className="inline-block mt-10 px-5 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            Ver trabajos
          </motion.a>
        </div>
        <div className="flex gap-5 mt-5 text-2xl justify-center md:justify-start">
          <motion.a target="_blank" href="https://github.com/ffariascubillos" whileHover={{ scale: 1.2 }} className="hover:text-gray-700">
            <i className="fa-brands fa-github"></i>
          </motion.a>
          <motion.a target="_blank" href="mailto:ffariascubillos@gmail.com" whileHover={{ scale: 1.2 }} className="hover:text-gray-700">
            <i className="fa-solid fa-envelope"></i>
          </motion.a>
        </div>
      </motion.div>
    </motion.section>
  );
}
