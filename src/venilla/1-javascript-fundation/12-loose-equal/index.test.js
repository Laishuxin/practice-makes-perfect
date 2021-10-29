import { looseEqual } from '.'
describe('looseEqual', () => {
  const o1 = {
    a: 1,
    b: 1,
  }
  it('should perform the correct looseEqual function', () => {
    expect(looseEqual(1, 1)).toBeTruthy()
    expect(looseEqual(false, 1)).toBeFalsy()
    expect(looseEqual([], {})).toBeFalsy()
  })
  it('should return the correct result given `Date` object', () => {
    expect(looseEqual(new Date('2020-1-1'), new Date('2020-1-1'))).toBeTruthy()
    expect(looseEqual(new Date('2020-10'), new Date('2020-1-1'))).toBeFalsy()
  })
  it('should return the correct result given `Array`', () => {
    expect(looseEqual([0], { 0: 0 })).toBeFalsy()
    expect(looseEqual([1, 2, {}], [1, 2])).toBeFalsy()
    expect(looseEqual([1, 2, '1'], [1, 2, 1])).toBeTruthy()
    expect(looseEqual([1, '2'], [1, '2', 3])).toBeFalsy()

    expect(looseEqual([1, 2, [3, 4, [5]]], [1, 2, [3, 4, [5]]])).toBeTruthy()
    expect(
      looseEqual([1, 2, { a: 1, b: [1, {}] }], [1, 2, { a: 1, b: [1, {}] }]),
    ).toBeTruthy()
  })
  it('should return the correct result given `Object`', () => {
    expect(looseEqual({}, {})).toBeTruthy()
    expect(looseEqual({ a: 1, b: 1 }, { a: 1, b: 1 })).toBeTruthy()
    expect(looseEqual({ a: 1, b: 1 }, { a: 1, b: 1, c: 1 })).toBeFalsy()

    expect(looseEqual({ ...o1, o1 }, { ...o1, o1 })).toBeTruthy()
    expect(
      looseEqual({ ...o1, o: { a: 1, o1 } }, { ...o1, o: { o1, a: 1 } }),
    ).toBeTruthy()
  })

  it('should return the correct result given `Object`', () => {
    expect(looseEqual(Symbol('1'), Symbol('2'))).toBeFalsy()
    expect(looseEqual(1, '1')).toBeTruthy()
    expect(looseEqual(1, {})).toBeFalsy()
    expect(
      looseEqual(
        () => {},
        () => {},
      ),
    ).toBeTruthy()

    const proxyA = new Proxy({ a: 1 }, {})
    const proxyB = new Proxy({ a: 1 }, {})

    const proxyC = new Proxy(
      { a: 1 },
      {
        get(...args) {
          throw new Error()
          // eslint-disable-next-line
          return Reflect.get(...args)
        },
      },
    )
    expect(looseEqual(proxyA, proxyB)).toBeTruthy()
    expect(() => looseEqual(proxyA, proxyC)).not.toThrow()
    expect(looseEqual(proxyA, proxyC)).toBeFalsy()
  })
})
