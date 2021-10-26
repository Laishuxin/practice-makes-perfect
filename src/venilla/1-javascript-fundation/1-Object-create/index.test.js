import { create } from './index'
describe('Object.create', () => {
  let obj1
  let obj2
  let obj3
  beforeEach(() => {
    obj1 = function () {}
    obj2 = { a: 1 }
    obj3 = function () {}
    obj3.prototype.show = function () {}
  })
  it('should create the correct objects', () => {
    expect(() => create()).toThrow()
    expect(() => create(1)).toThrow()

    expect(() => create(obj1)).not.toThrow()
    expect(create(null)).toEqual({})
    expect(create({})).toEqual({})
    expect(create(obj2).a).toEqual(obj2.a)
    expect(create(obj3.prototype).show).toBe(obj3.prototype.show)
  })
})
