import '.'
import { window } from '../shared/util'

describe('apply', () => {
  const obj = {
    arg0: 'arg0',
    arg1: 'arg1',
    arg2: 'arg2',
  }
  it('should perform the correct apply function', () => {
    function a() {
      return this.name
    }
    expect(a.apply1({ name: 'a' })).toBe('a')
    expect(() => a.apply1({ name: 'a' }, 1)).toThrow()

    function b(arg1, arg2) {
      return {
        arg0: this.arg0,
        arg1,
        arg2,
      }
    }

    expect(b.apply1(obj, [obj.arg1, obj.arg2])).toEqual(
      b.apply(obj, [obj.arg1, obj.arg2]),
    )

    window.arg0 = 'arg0'
    expect(b.apply1(null, [obj.arg1, obj.arg2])).toEqual(obj)
    expect(b.apply1(null, [obj.arg1, obj.arg2])).toEqual(obj)

    function c() {}
    const o = {
      fn: {},
    }

    c.apply1(o)
    expect(o.fn).toEqual({})
  })
})
