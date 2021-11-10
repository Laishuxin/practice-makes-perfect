import { thousandBit } from '.'
describe('thousandBit', () => {
  it('should valid parameters', () => {
    expect(() => thousandBit('134')).not.toThrow()
    expect(() => thousandBit('a134')).toThrow()
    expect(() => thousandBit('a134')).toThrow()
  })

  it('should perform the correct thousandBit function', () => {
    expect(thousandBit(1)).toBe('1')
    expect(thousandBit(100)).toBe('100')
    expect(thousandBit(1000)).toBe('1,000')
    expect(thousandBit(1000000)).toBe('1,000,000')
    expect(thousandBit(10000000)).toBe('10,000,000')

    expect(thousandBit(-100)).toBe('-100')
    expect(thousandBit(-1000)).toBe('-1,000')
    expect(thousandBit(-1000000)).toBe('-1,000,000')
    expect(thousandBit(-10000000)).toBe('-10,000,000')

    expect(thousandBit(100.0)).toBe('100')
    expect(thousandBit('100.1')).toBe('100.1')
    expect(thousandBit('1000000.1')).toBe('1,000,000.1')
  })
})
