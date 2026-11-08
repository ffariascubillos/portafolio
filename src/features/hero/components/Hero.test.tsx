import { render, screen, within } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import { profile } from '../data'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    profile.available = true
  })

  it('renders name, role and a single h1', () => {
    render(<Hero />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
    expect(screen.getByText(profile.role)).toBeInTheDocument()
  })

  it('lists the stack in order in a labelled strip', () => {
    render(<Hero />)
    const list = screen.getByRole('list', { name: 'Stack tecnológico' })
    expect(within(list).getAllByRole('listitem').map((t) => t.textContent)).toEqual(profile.stack)
  })

  it('renders the portrait as the only image', () => {
    render(<Hero />)
    const imgs = screen.getAllByRole('img')
    expect(imgs).toHaveLength(1)
    expect(imgs[0]).toHaveAccessibleName('Retrato de Felipe Farías')
  })

  it('shows the profile summary as a paragraph, without card titles', () => {
    render(<Hero />)
    expect(screen.getByText(profile.summary).tagName).toBe('P')
    expect(screen.queryByText('Perfil Profesional')).not.toBeInTheDocument()
    expect(screen.queryByText('Contacto')).not.toBeInTheDocument()
  })

  it('links "Ver proyectos" to the projects section', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Ver proyectos' })).toHaveAttribute('href', '#proyectos')
  })

  it('shows the availability indicator when available', () => {
    profile.available = true
    render(<Hero />)
    expect(screen.getByText('Disponible para proyectos')).toBeInTheDocument()
  })

  it('hides the availability indicator when not available', () => {
    profile.available = false
    render(<Hero />)
    expect(screen.queryByText('Disponible para proyectos')).not.toBeInTheDocument()
  })

  it('renders contact links with accessible names and hrefs', () => {
    render(<Hero />)
    const hrefs = {
      GitHub: 'https://github.com/ffariascubillos',
      Correo: 'mailto:ffariascubillos@gmail.com',
      LinkedIn: 'https://www.linkedin.com/in/fc-felipe/',
      WhatsApp: 'https://wa.me/56949925241',
    }
    for (const [name, href] of Object.entries(hrefs)) {
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', href)
    }
  })

  it('opens external contacts safely in a new tab', () => {
    render(<Hero />)
    for (const name of ['GitHub', 'LinkedIn', 'WhatsApp']) {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    }
    expect(screen.getByRole('link', { name: 'Correo' })).not.toHaveAttribute('target')
  })
})
