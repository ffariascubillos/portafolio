import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useDisclosure } from './useDisclosure'

describe('useDisclosure', () => {
  it('starts closed by default', () => {
    const { result } = renderHook(() => useDisclosure())
    expect(result.current.open).toBe(false)
  })

  it('opens with onOpenChange and closes with close', () => {
    const { result } = renderHook(() => useDisclosure())
    act(() => result.current.onOpenChange(true))
    expect(result.current.open).toBe(true)
    act(() => result.current.close())
    expect(result.current.open).toBe(false)
  })

  it('accepts an initial value', () => {
    const { result } = renderHook(() => useDisclosure(true))
    expect(result.current.open).toBe(true)
  })
})
