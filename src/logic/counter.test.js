import { plusCounter, lessCounter } from './counter'

describe('counter logic', () => {
  test('should return param plus 1', () => {
    expect(plusCounter(0)).toBe(1)
    expect(plusCounter(1)).toBe(2)
    expect(plusCounter(2)).toBe(3)
    expect(plusCounter(3)).toBe(4)
  })

  test('should return param less 1', () => {
    expect(lessCounter(0)).toBe(-1)
    expect(lessCounter(1)).toBe(0)
    expect(lessCounter(2)).toBe(1)
    expect(lessCounter(3)).toBe(2)
  })
})
