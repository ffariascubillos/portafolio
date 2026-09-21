import { vi } from 'vitest'

export function mockMatchMedia(reduced: boolean) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn((query: string) => ({
      matches: reduced && query.includes('prefers-reduced-motion'),
      media: query,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  )
}

export class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []
  observe = vi.fn()
  disconnect = vi.fn()
  unobserve = vi.fn()
  constructor(public callback: IntersectionObserverCallback) {
    MockIntersectionObserver.instances.push(this)
  }
  trigger(isIntersecting: boolean) {
    this.callback([{ isIntersecting } as IntersectionObserverEntry], this as unknown as IntersectionObserver)
  }
}

export function mockIntersectionObserver() {
  MockIntersectionObserver.instances = []
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  return MockIntersectionObserver
}
