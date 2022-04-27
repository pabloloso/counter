import React from 'react'

import useCounter from '../hooks/useCounter'

import Button from './Button'

const Counter = () => {
  const { counter, handlePlusCounter, handleLessCounter } = useCounter()

  return (
    <div>
      <h1>Counter</h1>
      <Button onClick={handlePlusCounter} label="+" />
      <span>{counter}</span>
      <Button onClick={handleLessCounter} label="-" />
    </div>
  )
}

export default Counter
