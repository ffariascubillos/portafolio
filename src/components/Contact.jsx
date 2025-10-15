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

      {/* <form className="grid gap-4 max-w-lg w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input type="text" placeholder="Nombre" className="border p-2 rounded" />
          <input type="text" placeholder="Apellido" className="border p-2 rounded" />
          <input type="email" placeholder="Correo" className="border p-2 rounded" />
        </div>
        <textarea placeholder="Mensaje" rows="5" className="border p-2 rounded"></textarea>
        <button type="submit" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          ENVIAR
        </button>
      </form> */}
    </section>
  );
}
