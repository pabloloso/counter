import { plusCounter } from './counter'

test('should return param plus 1', () => {
  expect(plusCounter(0)).toBe(1)
  expect(plusCounter(1)).toBe(2)
  expect(plusCounter(2)).toBe(3)
  expect(plusCounter(3)).toBe(4)
})
