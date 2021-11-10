import { add } from '.'
describe('add', () => {
  it('should perform the correct add function', () => {
    expect(add(1)).toBeInstanceOf(Function)
    expect(add(1)(2)).toBeInstanceOf(Function)

    expect(add(1)(2)(3)).toBe(6)
    expect(add(2)(2)(3)).toBe(7)
  })
})
