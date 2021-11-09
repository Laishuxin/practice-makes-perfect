import { reverse } from '.'

describe('reverse', () => {
  it('should valid parameters', () => {
    expect(() => reverse()).toThrow()
    expect(() => reverse(1)).toThrow()
    expect(() => reverse([])).not.toThrow()
    expect(() => reverse([], 1)).not.toThrow()
  })

  it('should perform the correct reverse function', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3, 4]
    const arr3 = [1, 2, 3]
    expect(reverse(arr1)).toEqual(arr3.reverse())
    expect(reverse(arr2)).toEqual([4, 3, 2, 1])
    expect(arr1).toEqual([3, 2, 1])
  })
})
