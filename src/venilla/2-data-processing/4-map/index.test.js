import { map } from '.'
describe('map', () => {
  it('should valid parameters', () => {
    expect(() => map()).toThrow()
    expect(() => map(1)).toThrow()
    expect(() => map([])).toThrow()
    expect(() => map([], 1)).toThrow()
  })

  it('should perform the correct map function', () => {
    const arr = [1, 2, 3]
    const func = (item, index, arr) => {
      return [item, index, arr]
    }
    expect(map(arr, func)).toEqual(arr.map(func))
    expect(() =>
      map(arr, () => {
        throw 1
      }),
    ).toThrow()
  })
})
