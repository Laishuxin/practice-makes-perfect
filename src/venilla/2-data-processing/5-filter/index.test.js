import { filter } from '.'

describe('filter', () => {
  it('should valid parameters', () => {
    expect(() => filter()).toThrow()
    expect(() => filter(1)).toThrow()
    expect(() => filter([])).toThrow()
    expect(() => filter([], 1)).toThrow()
  })

  it('should perform the correct filter function', () => {
    const arr = [1, 2, 3]
    const func = (item, index, arr) => {
      return item - 1
    }
    expect(filter(arr, func)).toEqual(arr.filter(func))
    expect(() =>
      filter(arr, () => {
        throw 1
      }),
    ).toThrow()
  })
})
