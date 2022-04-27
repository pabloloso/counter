import { useState } from 'react'

import { plusCounter, lessCounter } from '../logic/counter'

const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const handlePlusCounter = () => {
    setCounter(plusCounter(counter))
  }

  const handleLessCounter = () => {
    setCounter(lessCounter(counter))
  }

  return { counter, handlePlusCounter, handleLessCounter }
}

export default useCounter
