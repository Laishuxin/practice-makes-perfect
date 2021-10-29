import { shallowEqual } from '.'
describe('shallowEqual', () => {
  const o1 = {}
  const o2 = {
    a: 1,
    b: 2,
  }
  const o3 = {
    a: 1,
    b: 2,
    o1,
  }
  const o4 = [1, 2]
  const o5 = [1, 2, {}]
  const o6 = [1, 2, o3]
  it('should perform the correct shallowEqual function', () => {
    expect(shallowEqual(1, 1)).toBeTruthy()
    expect(shallowEqual(true, 1)).toBeFalsy()
    expect(shallowEqual({}, {})).toBeTruthy()
    expect(shallowEqual([], [])).toBeTruthy()
    expect(shallowEqual(o1, o1)).toBeTruthy()
    expect(shallowEqual(o3, { b: 2, a: 1, o1 })).toBeTruthy()
    expect(shallowEqual(o3, { ...o3, c: 3 })).toBeFalsy()

    expect(shallowEqual(o5, [1, 2, {}])).toBeFalsy()
    expect(shallowEqual(o6, [1, 2, o3])).toBeTruthy()
  })
})
