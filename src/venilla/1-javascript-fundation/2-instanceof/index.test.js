import { instanceOf } from '.'

describe('instanceof', () => {
  it('should perform the correct function', () => {
    expect(instanceOf(null, Object)).toBeFalsy()
    expect(instanceOf(Array, Object)).toBeTruthy()
    expect(instanceOf({}, Array)).toBeFalsy()
    class A {}
    class B extends A {}
    expect(instanceOf(A, B)).toBeFalsy()
    expect(instanceOf(B, A)).toBeFalsy()

    function C() {}
    const D = Object.create(C.prototype)
    expect(instanceOf(D, C))
  })
})
