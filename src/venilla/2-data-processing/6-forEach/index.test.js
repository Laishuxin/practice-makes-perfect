import { forEach } from '.'

describe('forEach', () => {
  it('should valid parameters', () => {
    expect(() => forEach()).toThrow()
    expect(() => forEach(1)).toThrow()
    expect(() => forEach([])).toThrow()
    expect(() => forEach([], 1)).toThrow()
  })

  it('should perform the correct forEach function', () => {
    const arr = [1, 2, 3]
    const result = []
    const func = (item, index, arr) => {
      result.push([item, index, arr])
    }
    forEach(arr, func)
    expect(result).toEqual([
      [1, 0, arr],
      [2, 1, arr],
      [3, 2, arr],
    ])
    expect(() =>
      forEach(arr, () => {
        throw 1
      }),
    ).toThrow()
  })
})
