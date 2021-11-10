import { unique } from '.'

describe('unique', () => {
  it('should valid parameters', () => {
    expect(() => unique(1)).toThrow()
    expect(() => unique([])).not.toThrow()
  })

  it('should perform the correct unique function', () => {
    expect(unique([1, 2, 3, 3])).toEqual([1, 2, 3])
    expect(unique([1, 2, 3, 3])).toEqual([1, 2, 3])
    const arr = [1, 2, 3]
    const obj = {}
    expect(unique([1, 2, arr, arr, 1, obj, obj])).toEqual([1, 2, arr, obj])
  })
})
