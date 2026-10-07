import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { WhatsAppButton } from './WhatsAppButton'

describe('WhatsAppButton', () => {
  it('links to WhatsApp in a new tab with an accessible name', () => {
    render(<WhatsAppButton />)
    const link = screen.getByRole('link', { name: 'Escribir por WhatsApp' })
    expect(link).toHaveAttribute('href', 'https://wa.me/56949925241')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
