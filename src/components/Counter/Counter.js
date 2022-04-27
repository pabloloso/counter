import React from 'react'

import useCounter from '../../hooks/useCounter'

import Button from '../Button/Button'

import { StyledCounter, StyledCounterContainer, StyledHeader } from './Counter.styles'

const Counter = () => {
  const { counter, handlePlusCounter, handleLessCounter } = useCounter()

  return (
    <div>
      <StyledHeader>Counter</StyledHeader>
      <StyledCounterContainer>
        <Button onClick={handleLessCounter} label="-" />
        <StyledCounter>{counter}</StyledCounter>
        <Button onClick={handlePlusCounter} label="+" />
      </StyledCounterContainer>
    </div>
  )
}

export default Counter
