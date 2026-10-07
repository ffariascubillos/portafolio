import { whatsapp } from "@/features/hero/data"

export function WhatsAppButton() {
  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed right-6 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:ring-[3px] focus-visible:ring-ring focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-7">
        <path d={whatsapp.path} />
      </svg>
    </a>
  )
}
