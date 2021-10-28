import { shallowCopy } from '.'
describe('shallowCopy', () => {
  it('should perform the correct shallowCopy function', () => {
    expect(shallowCopy(null)).toEqual(null)
    expect(shallowCopy(1)).toEqual(1)

    expect(shallowCopy({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 })
    expect(shallowCopy([1, 2, 3])).toEqual([1, 2, 3])
    const obj = { a: 1, b: 2 }
    const copiedObj = shallowCopy(obj)
    expect(shallowCopy(copiedObj)).toEqual(obj)
    copiedObj.a = 2
    expect(shallowCopy(copiedObj)).not.toEqual(obj)

    const obj2 = { a: 1, b: { c: 1 } }
    const copiedObj2 = shallowCopy(obj2)
    copiedObj2.b.c = 2
    expect(copiedObj2).toEqual(obj2)
  })
})
