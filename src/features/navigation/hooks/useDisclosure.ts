import { useCallback, useState } from "react"

export function useDisclosure(initial = false) {
  const [open, onOpenChange] = useState(initial)
  const close = useCallback(() => onOpenChange(false), [])
  return { open, onOpenChange, close }
}
