/**
 * @param { Function } fn
 * @param {{wait?: number, trailing?: boolean, leading?: boolean}} options
 * @default {wait=500}
 * @returns { Function } throttledFn
 */
export function throttle(fn, options = {}) {
  if (typeof fn !== 'function') {
    throw new TypeError(`Expected fn to be a function, but receive ${fn}`)
  }
  const { wait = 500, leading = false, trailing = true } = options
  let previous = 0
  let timer
  const clear = () => {
    // previous = 0
    timer && clearTimeout(timer)
    timer = void 0
  }

  function throttleFn(...args) {
    const now = Date.now()
    previous = leading ? previous : now
    const remain = wait - (now - previous)

    if (remain < 0 || remain > wait) {
      clear()
      previous = now
      fn.apply(this, args)
    } else if (!timer && trailing) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        previous = now
        timer = void 0
      }, remain)
    }
  }
  return throttleFn
}

function main() {
  function fn() {
    console.log('fn....')
  }
  const throttledFn = throttle(fn, {
    leading: true,
    trailing: true,
    wait: 5000,
  })
  throttledFn()
}
main()
