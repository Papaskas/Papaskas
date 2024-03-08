import React from 'react'
import { render, screen } from '@testing-library/react'
import Button from '@src/components/Button'

describe('Button component', () => {
  test('props components', () => {
    const text = 'test TEXT'

    render(<Button>{text}</Button>)
    expect(screen.getByText(text)).toBeInTheDocument()
    expect(text).toHaveStyle({ color: '#FFFFF' })
  })
})
