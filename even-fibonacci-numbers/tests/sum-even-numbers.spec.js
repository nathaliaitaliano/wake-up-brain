import { evenSum, fibonacciSequence } from '../src/sum-even-numbers'

describe('Fibonacci Sequence', () => {
  describe('Fibonacci Even Numbers Sum', () => {
    test('Sum of a even numbers fibonacci sequence with length 0 should be return 0', () => {
      expect(evenSum(0)).toEqual(0)
    })

    test('Sum of a even numbers fibonacci sequence with length 1 should be return 0', () => {
      expect(evenSum(1)).toEqual(0)
    })

    test('Sum of a even numbers fibonacci sequence with length 2 should be return 2', () => {
      expect(evenSum(1)).toEqual(0)
    })

    test('Sum of a even numbers fibonacci sequence with length 3 should be return 2', () => {
      expect(evenSum(3)).toEqual(2)
    })

    test('Sum of a even numbers fibonacci sequence with length 6 should be return 10', () => {
      expect(evenSum(6)).toEqual(10)
    })

    test('Sum of a even numbers fibonacci sequence with length 10 should be return 44', () => {
      expect(evenSum(10)).toEqual(44)
    })

    test('Sum of a even numbers fibonacci sequence with length 18 should be return 3382', () => {
      expect(evenSum(18)).toEqual(3382)
    })
  })
})