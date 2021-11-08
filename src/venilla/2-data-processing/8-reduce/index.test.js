import { reduce } from '.'

describe('reduce', () => {
  it('should valid parameters', () => {
    expect(() => reduce([], () => {})).toThrow()
    expect(() => reduce(1, () => {})).toThrow()
    expect(() => reduce([], 1)).toThrow()
    expect(() => reduce([], () => {}, 1)).not.toThrow()
  })

  it('should perform the correct reduce function', () => {
    const arr = [1, 2, 3, 4]
    const func = (prev, curr) => prev + curr
    const func2 = (prev, curr, i) => {
      return [...prev, curr, i]
    }
    expect(reduce(arr, func, 0)).toEqual(arr.reduce(func, 0))
    expect(reduce(arr, func)).toEqual(arr.reduce(func))
    expect(reduce(arr, func2, [])).toEqual(arr.reduce(func2, []))
  })
})
