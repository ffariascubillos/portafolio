import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { getImagesFrom } from "../utils/getImages";

export default function CardTrabajo({ project }) {
  const [selected, setSelected] = useState(false);
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef(null);
  const images = getImagesFrom(project.folder);

  // 🔹 Cerrar modal con tecla ESC
  useEffect(() => {
    const handleKeyDown = (e) => e.key === "Escape" && closeModal();
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // 🔹 Evitar scroll del body cuando la modal está abierta
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";
  }, [selected]);

  // 🔹 Control de zoom con la rueda del mouse
  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const handleWheel = (e) => {
      e.preventDefault();
      setZoom((prev) => {
        let next = prev - e.deltaY * 0.001;
        return Math.min(Math.max(next, 1), 2.5);
      });
    };
    el.addEventListener("wheel", handleWheel);
    return () => el.removeEventListener("wheel", handleWheel);
  }, [selected]);

  const nextImage = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevImage = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const closeModal = () => {
    setSelected(false);
    setZoom(1);
  };

  // 🔹 Doble clic alterna zoom
  const handleDoubleClick = () => {
    setZoom((prev) => (prev === 1 ? 2 : 1));
  };

  return (
    <>
      {/* CARD */}
      <div
        className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
        onClick={() => {
          setSelected(true);
          setCurrent(0);
        }}
      >
        <img
          src={
            project.cover ||
            images.find((img) => !img.includes("portada")) ||
            "https://placehold.co/800x450?text=Sin+imagen"
          }
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-left">
          <h4 className="font-semibold text-lg">{project.title}</h4>
          <p className="text-sm text-gray-600 mt-1 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span key={t} className="px-2 py-1 bg-gray-200 rounded-full text-xs">
                {t}
              </span>
            ))}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelected(true);
              setCurrent(0);
            }}
            className="inline-block px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition text-sm"
          >
            Ver proyecto
          </button>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            ref={containerRef}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-5xl w-auto max-h-[90vh] flex items-center justify-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={images[current]}
                  src={images[current] || "https://placehold.co/800x450?text=Sin+imagen"}
                  alt={project.title}
                  className={`max-h-[90vh] w-auto rounded-lg object-contain select-none ${
                    zoom > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in"
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: zoom }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  drag={zoom > 1 ? true : "x"} // 🔹 libre si hay zoom, horizontal si no
                  dragElastic={0.3}
                  dragConstraints={zoom > 1 ? false : { left: 0, right: 0 }}
                  onDoubleClick={handleDoubleClick}
                  onDragEnd={(e, info) => {
                    if (zoom === 1) {
                      if (info.offset.x > 100) prevImage();
                      if (info.offset.x < -100) nextImage();
                    }
                  }}
                />
              </AnimatePresence>

              {/* Flechas */}
              {zoom === 1 && images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 md:left-6 text-white text-3xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
                  >
                    ‹
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 md:right-6 text-white text-3xl bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Indicador + Cerrar */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 rounded-full px-3 py-1">
                {current + 1} / {images.length}
              </div>

              <button
                className="absolute top-3 right-3 text-3xl font-bold text-white hover:text-gray-300"
                onClick={closeModal}
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
