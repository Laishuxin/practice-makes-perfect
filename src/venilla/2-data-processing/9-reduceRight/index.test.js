import { reduceRight } from '.'

describe('reduce', () => {
  it('should valid parameters', () => {
    expect(() => reduceRight([], () => {})).toThrow()
    expect(() => reduceRight(1, () => {})).toThrow()
    expect(() => reduceRight([], 1)).toThrow()
    expect(() => reduceRight([], () => {}, 1)).not.toThrow()
  })

  it('should perform the correct reduce function', () => {
    const arr = [1, 2]
    const func = (prev, curr) => prev + curr
    const func2 = (prev, curr, i) => {
      return [...prev, curr, i]
    }
    expect(reduceRight(arr, func, 0)).toEqual(arr.reduce(func, 0))
    expect(reduceRight(arr, func)).toEqual(arr.reduce(func))

    expect(reduceRight(arr, func2, [])).toEqual(arr.reduceRight(func2, []))
    expect(reduceRight(arr, func2, [])).toEqual([2, 1, 1, 0])
  })
})
