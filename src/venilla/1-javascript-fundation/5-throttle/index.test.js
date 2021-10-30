import { throttle } from '.'

describe('throttle', () => {
  const fn = jest.fn()
  let throttledFn
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
    throttledFn = throttle(fn)
    expect(fn).toHaveBeenCalledTimes(0)
    throttledFn()
    throttledFn()
    jest.advanceTimersByTime(600) // 500 by default
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should perform the correct throttle function when passing different argument', () => {
    expect(() => throttle(1)).toThrow()
    fn.mockClear()
    throttledFn = throttle(fn, {
      wait: 100,
    })
    throttledFn()
    throttledFn()
    expect(fn).toHaveBeenCalledTimes(0)
    jest.advanceTimersByTime(101)
    expect(fn).toHaveBeenCalledTimes(1)

    fn.mockClear()
    throttledFn = throttle(fn, {
      wait: 20,
      leading: true,
      trailing: false,
    })

    throttledFn()
    expect(fn).toHaveBeenCalledTimes(1)
    throttledFn()
    expect(fn).toHaveBeenCalledTimes(1)
    jest.advanceTimersByTime(21)
    expect(fn).toHaveBeenCalledTimes(1)

    fn.mockClear()
    throttledFn = throttle(fn, {
      wait: 20,
      leading: true,
      trailing: true,
    })
    throttledFn()
    throttledFn()
    expect(fn).toHaveBeenCalledTimes(1)
    jest.runAllTimers()
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
