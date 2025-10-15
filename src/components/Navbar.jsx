import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md flex justify-between items-center px-6 py-3 z-50">
      <h1 className="text-lg font-bold">Felipe Farias</h1>

      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl focus:outline-none"
      >
        {open ? "✕" : "☰"}
      </button>

      <AnimatePresence>
        {(open || window.innerWidth >= 768) && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:flex flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto bg-black md:bg-transparent text-white md:text-black text-center md:space-x-6`}
          >
            <li><a href="#home" onClick={() => setOpen(false)} className="block py-3 md:py-0 hover:underline">HOME</a></li>
            <li><a href="#trabajos" onClick={() => setOpen(false)} className="block py-3 md:py-0 hover:underline">TRABAJOS</a></li>
            <li><a href="#contacto" onClick={() => setOpen(false)} className="block py-3 md:py-0 hover:underline">CONTACTO</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
