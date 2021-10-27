import '.'
import { window } from '../shared/util'

describe('call', () => {
  const obj = {
    arg0: 'arg0',
    arg1: 'arg1',
    arg2: 'arg2',
  }
  it('should perform the correct call function', () => {
    function a() {
      return this.name
    }
    expect(a.call1({ name: 'a' })).toBe('a')

    function b(arg1, arg2) {
      return {
        arg0: this.arg0,
        arg1,
        arg2,
      }
    }

    expect(b.call1(obj, obj.arg1, obj.arg2)).toEqual(
      b.call(obj, obj.arg1, obj.arg2),
    )

    window.arg0 = 'arg0'
    expect(b.call1(null, obj.arg1, obj.arg2)).toEqual(obj)
    expect(b.call1(null, obj.arg1, obj.arg2)).toEqual(obj)

    function c() {}
    const o = {
      fn: {},
    }

    c.call1(o)
    expect(o.fn).toEqual({})
  })
})
