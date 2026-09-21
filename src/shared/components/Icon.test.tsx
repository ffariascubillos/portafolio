import { render, screen } from '@testing-library/react'
import { Mail } from 'lucide-react'
import { describe, expect, it } from 'vitest'
import { Icon } from './Icon'

describe('Icon', () => {
  it('is decorative (aria-hidden) by default', () => {
    const { container } = render(<Icon icon={Mail} />)
    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  it('exposes role img and label when label is given', () => {
    render(<Icon icon={Mail} label="Correo" />)
    expect(screen.getByRole('img', { name: 'Correo' })).toBeInTheDocument()
  })

  it('forwards props such as className', () => {
    const { container } = render(<Icon icon={Mail} className="size-4" />)
    expect(container.querySelector('svg')).toHaveClass('size-4')
  })
})
