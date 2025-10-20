import { motion } from "motion/react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="flex flex-col items-center justify-center px-8 py-24 bg-gray-100 text-center"
    >
      <h3 className="text-2xl font-bold mb-4">CONTACTO</h3>
      <div className="border-b-2 border-black w-12 mb-6"></div>
      <p className="text-gray-700 mb-6">
        Si necesitas más información o quieres conversar, puedes contactarme a:
      </p>
      <div className="flex gap-5 mb-10 text-2xl">
          <motion.a target="_blank" href="https://github.com/ffariascubillos" whileHover={{ scale: 1.2 }} className="hover:text-gray-700">
            <i className="fa-brands fa-github"></i>
          </motion.a>
          <motion.a target="_blank" href="mailto:ffariascubillos@gmail.com" whileHover={{ scale: 1.2 }} className="hover:text-gray-700">
            < i className="fa-solid fa-envelope"></i>
          </motion.a>
      </div>
    </section>
  );
}
