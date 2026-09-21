import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { mockIntersectionObserver, mockMatchMedia } from '@/test/mocks'
import { Section } from './Section'

afterEach(() => vi.unstubAllGlobals())

describe('Section', () => {
  it('renders an accessible section labelled by its title, with children', () => {
    mockMatchMedia(true)
    render(
      <Section id="about" title="Sobre mí">
        <p>contenido</p>
      </Section>,
    )
    const region = screen.getByRole('region', { name: 'Sobre mí' })
    expect(region).toHaveAttribute('id', 'about')
    expect(screen.getByRole('heading', { level: 2, name: 'Sobre mí' })).toHaveAttribute('id', 'about-title')
    expect(screen.getByText('contenido')).toBeInTheDocument()
  })

  it('is hidden until visible, then shown', () => {
    mockMatchMedia(false)
    const IO = mockIntersectionObserver()
    render(<Section id="x" title="T">c</Section>)
    const region = screen.getByRole('region', { name: 'T' })
    expect(region).toHaveClass('opacity-0')
    act(() => IO.instances[0].trigger(true))
    expect(region).toHaveClass('opacity-100')
  })

  it('is visible immediately with reduced motion', () => {
    mockMatchMedia(true)
    render(<Section id="x" title="T">c</Section>)
    expect(screen.getByRole('region', { name: 'T' })).toHaveClass('opacity-100')
  })
})
