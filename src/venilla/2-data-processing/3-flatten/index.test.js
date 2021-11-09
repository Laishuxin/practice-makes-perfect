import { flat } from '.'
describe('flat', () => {
  it('should valid parameters', () => {
    expect(() => flat(1)).toThrow()
  })

  it('should perform the correct flat function', () => {
    const arr = [1, 2, [1, 2]]
    expect(flat(arr, 0)).toEqual(arr)
    expect(flat(arr, 0)).not.toBe(arr)
    expect(flat(arr, 1)).not.toBe([1, 2, 1, 2])
    expect(flat([...arr, [1, 2, [1, 2]]], 1)).not.toBe([1, 2, 1, 2, [1, 2]])
    expect(flat([...arr, [1, 2, [1, 2]]], 2)).not.toBe([1, 2, 1, 2, 1, 2])
  })
})
