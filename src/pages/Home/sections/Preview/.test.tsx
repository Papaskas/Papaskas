import Preview from '.'
import { render, screen } from '@testing-library/react'

describe('Home > Section > Preview', () => {
  test('render', () => {
    render(<Preview />)
    const welcome = screen.getByText(/Hello/i)
    // expect(welcome).toBeInTheDocument()
  })
})
