import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import Counter from './Counter'

describe('Counter component', () => {
  test('render Counter component and buttons functionality', () => {
    render(<Counter />)

    expect(screen.getByRole('heading', { level: 1, label: 'Counter' })).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: '+' }))
    expect(screen.getByText('1')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '+' }))
    expect(screen.getByText('2')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: '-' }))
    expect(screen.getByText('1')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: '-' }))
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})
