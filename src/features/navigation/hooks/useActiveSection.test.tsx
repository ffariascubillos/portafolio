import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { useActiveSection } from './useActiveSection'

const IDS = ['uno', 'dos', 'tres']
let callback: IntersectionObserverCallback

class StubObserver {
  observe = vi.fn()
  disconnect = vi.fn()
  constructor(cb: IntersectionObserverCallback) {
    callback = cb
  }
}

beforeEach(() => {
  vi.stubGlobal('IntersectionObserver', StubObserver)
  IDS.forEach((id) => {
    const el = document.createElement('section')
    el.id = id
    document.body.appendChild(el)
  })
})

afterEach(() => {
  vi.unstubAllGlobals()
  document.body.innerHTML = ''
})

const entry = (id: string, isIntersecting: boolean) =>
  ({ isIntersecting, target: document.getElementById(id) }) as unknown as IntersectionObserverEntry

describe('useActiveSection', () => {
  it('starts with the first section', () => {
    const { result } = renderHook(() => useActiveSection(IDS))
    expect(result.current).toBe('uno')
  })

  it('changes when another section intersects', () => {
    const { result } = renderHook(() => useActiveSection(IDS))
    act(() => callback([entry('dos', true)], {} as IntersectionObserver))
    expect(result.current).toBe('dos')
  })

  it('ignores sections that are not intersecting', () => {
    const { result } = renderHook(() => useActiveSection(IDS))
    act(() => callback([entry('tres', false)], {} as IntersectionObserver))
    expect(result.current).toBe('uno')
  })
})
