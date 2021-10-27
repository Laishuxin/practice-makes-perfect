import { new1 } from '.'

describe('new', () => {
  it('should create the correct objects by the custom new function', () => {
    expect(() => new1(null)).toThrow()
    expect(() => new1(undefined)).toThrow()
    expect(() => new1('')).toThrow()
    expect(() => new1({})).toThrow()
    function A() {
      return null
    }
    expect(() => new1(A)).not.toThrow()
  })

  it('should return the correct object', () => {
    function A() {
      return null
    }
    expect(new1(A)).toEqual(new A())

    const obj = { a: 1 }
    function B() {
      return obj
    }
    expect(new1(B)).toBe(new B())

    function C(name) {
      this.name = name
    }
    C.prototype.show = function () {
      console.log(this.name)
    }

    expect(new1(C, 'a')).toEqual(new C('a'))
  })
  // it('should perform the correct new function with es6 class', () => {
  //   class A {
  //     constructor(name) {
  //       this.name = name
  //     }
  //     show() {
  //       console.log(this.name)
  //     }
  //   }

  //   class B extends A {
  //     greeting() {
  //       console.log('hello ', this.name)
  //     }
  //   }

  //   const a = new1(A, 'a')
  //   expect(a).toEqual(new A('a'))
  //   expect(a.name).toEqual('a')
  //   expect(a.show).toBe(A.prototype.show)

  //   const b = new1(B, 'b')
  //   expect(b).toEqual(new B('b'))
  //   expect(b.name).toBe('b')
  //   expect(b.greeting).toBe(B.prototype.greeting)
  //   expect(b.show).toBe(A.show)
  // })
})
