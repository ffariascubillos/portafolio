import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { mockIntersectionObserver, mockMatchMedia } from '@/test/mocks'
import { useInView } from './useInView'

function Probe() {
  const { ref, inView } = useInView<HTMLDivElement>()
  return <div ref={ref} data-testid="probe" data-inview={String(inView)} />
}

afterEach(() => vi.unstubAllGlobals())

describe('useInView', () => {
  it('starts false and observes the element', () => {
    mockMatchMedia(false)
    const IO = mockIntersectionObserver()
    render(<Probe />)
    expect(screen.getByTestId('probe')).toHaveAttribute('data-inview', 'false')
    expect(IO.instances[0].observe).toHaveBeenCalledWith(screen.getByTestId('probe'))
  })

  it('becomes true and disconnects when it intersects', () => {
    mockMatchMedia(false)
    const IO = mockIntersectionObserver()
    render(<Probe />)
    act(() => IO.instances[0].trigger(false))
    expect(screen.getByTestId('probe')).toHaveAttribute('data-inview', 'false')
    act(() => IO.instances[0].trigger(true))
    expect(screen.getByTestId('probe')).toHaveAttribute('data-inview', 'true')
    expect(IO.instances[0].disconnect).toHaveBeenCalled()
  })

  it('disconnects on unmount', () => {
    mockMatchMedia(false)
    const IO = mockIntersectionObserver()
    const { unmount } = render(<Probe />)
    unmount()
    expect(IO.instances[0].disconnect).toHaveBeenCalled()
  })

  it('is true from the start with prefers-reduced-motion', () => {
    mockMatchMedia(true)
    const IO = mockIntersectionObserver()
    render(<Probe />)
    expect(screen.getByTestId('probe')).toHaveAttribute('data-inview', 'true')
    expect(IO.instances).toHaveLength(0)
  })

  it('is true from the start without IntersectionObserver', () => {
    mockMatchMedia(false)
    vi.stubGlobal('IntersectionObserver', undefined)
    render(<Probe />)
    expect(screen.getByTestId('probe')).toHaveAttribute('data-inview', 'true')
  })
})
