import { useEffect, useRef, useState } from "react"

const skipAnimation = () =>
  typeof IntersectionObserver === "undefined" ||
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

export function useInView<T extends Element = HTMLElement>() {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(skipAnimation)

  useEffect(() => {
    const el = ref.current
    if (!el || skipAnimation()) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}
