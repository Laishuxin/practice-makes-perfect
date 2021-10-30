import { debounce } from '.'

describe('debounce', () => {
  const fn = jest.fn()
  let debouncedFn
  beforeAll(() => {
    jest.useFakeTimers()
  })
  afterAll(() => {
    jest.useRealTimers()
  })
  beforeEach(() => {
    fn.mockClear()
  })

  it('should call once in a short time', () => {
    const debounceFn = debounce(fn)
    expect(fn).toHaveBeenCalledTimes(0)
    debounceFn()
    debounceFn()
    jest.advanceTimersByTime(600) // 500 by default
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should perform the correct debounce function when passing different argument', () => {
    expect(() => debounce(1)).toThrow()

    fn.mockClear()
    debouncedFn = debounce(fn, {
      wait: 100,
    })
    debouncedFn()
    debouncedFn()
    expect(fn).toHaveBeenCalledTimes(0)
    jest.advanceTimersByTime(101)
    expect(fn).toHaveBeenCalledTimes(1)

    fn.mockClear()
    debouncedFn = debounce(fn, {
      leading: true,
      trailing: false,
    })
    debouncedFn()
    expect(fn).toHaveBeenCalledTimes(1)
    debouncedFn()
    debouncedFn()
    expect(fn).toHaveBeenCalledTimes(1)

    fn.mockClear()
    debouncedFn = debounce(fn, {
      wait: 100,
      leading: true,
      trailing: true,
    })
    debouncedFn()
    expect(fn).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(101)
    expect(fn).toHaveBeenCalledTimes(2)
  })

  it('should call with the correct argument', () => {
    debouncedFn = debounce(fn, {
      wait: 100,
      leading: true,
      trailing: false,
    })
    debouncedFn(1, 2)
    expect(fn).toHaveBeenLastCalledWith(1, 2)
  })
})
