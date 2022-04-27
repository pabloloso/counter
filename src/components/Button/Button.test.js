import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Button from './Button'

const onClick = jest.fn()

describe('Button component', () => {
  test('render Button component', () => {
    render(<Button label='+' onClick={onClick} />)

    const button = screen.getByRole('button', { name: '+' })

    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(onClick).toBeCalled()
  })
})
