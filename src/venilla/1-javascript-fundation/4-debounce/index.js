/**
 * @param { Function } fn
 * @param {{wait?: number, trailing?: boolean, leading?: boolean}} options
 * @default {wait=500}
 * @returns { Function } debouncedFn
 */
export function debounce(fn, options = {}) {
  if (typeof fn !== 'function') {
    throw new TypeError(`Expected fn to be a function, but receive ${fn}`)
  }
  const { wait = 500, leading = false, trailing = true } = options
  let timer
  const clear = () => {
    if (timer) {
      clearTimeout(timer)
      timer = void 0
    }
  }

  function debounceFn(...args) {
    const canCall = !timer
    clear()

    if (leading && !trailing) {
      canCall && fn.apply(this, args)
      timer = setTimeout(() => {
        timer = void 0
      }, wait)
    } else if (leading && trailing) {
      canCall && fn.apply(this, args)
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = void 0
      }, wait)
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, wait)
    }
  }
  return debounceFn
}
