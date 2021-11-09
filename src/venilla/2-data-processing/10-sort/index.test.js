import { sort } from '.'
import { isSorted } from '../../1-javascript-fundation/shared/util'

describe('sort', () => {
  it('should valid parameters', () => {
    expect(() => sort()).toThrow()
    expect(() => sort(1)).toThrow()
    expect(() => sort([], 1)).toThrow()
  })

  it('should perform the correct filter function', () => {
    expect(sort([])).toEqual([])
    expect(sort([1, 2, 3])).toEqual([1, 2, 3])
    for (let i = 1; i < 1000; i++) {
      const arr = []
      for (let j = 0; j <= i; j++) {
        arr.push(Math.random())
      }
      sort(arr)
      // console.log(i, arr)
      expect(isSorted(arr)).toBeTruthy()
    }

    const a = { a: 1 }
    const b = { a: 2 }
    const c = { a: 3 }
    expect(sort([c, a, b], (a, b) => a.a - b.a)).toEqual([a, b, c])
  })
})
