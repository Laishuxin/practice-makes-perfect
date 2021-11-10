import { dateFormat } from '.'

describe('dateFormat', () => {
  it('should valid parameters', () => {
    expect(() => dateFormat()).toThrow()
    expect(() => dateFormat('a')).toThrow()
    expect(() => dateFormat(1)).not.toThrow()
    expect(dateFormat(1, '')).toBe('')
  })

  it('should perform the correct dateFormat function', () => {
    expect(dateFormat('2020-1-1', 'yyyy:mm:dd')).toBe('2020:01:01')
    expect(dateFormat('2020-1-2', 'yyy-yyyy-dd-dd-mm-mm')).toBe(
      'yyy-2020-02-02-01-01',
    )
    expect(dateFormat(new Date('2021-11-12'), 'yyyy-dd-mm')).toBe('2021-12-11')
  })
})
