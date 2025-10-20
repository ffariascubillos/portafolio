import { motion } from "motion/react";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-24 pt-24 
                bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Texto y enlaces */}
      <motion.div
        className="max-w-md text-center"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold">Felipe Farias</h2>
        <p className="text-2xl text-white">Desarrollador Web FullStack</p>
        <p className="mt-3 text-1xl text-white">
          Cuento con 9 años de experiencia desarrollando soluciones web front-end y back-end para diversas agencias digitales en Chile, trabajando con marcas de gran alcance y proyectos personalizados.
        </p>
        <div className="text-center">
          <motion.a
            href="#trabajos"
            className="inline-block mt-10 px-5 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            Ver trabajos
          </motion.a>
        </div>
        <div className="flex gap-5 mt-5 text-2xl justify-center">
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
