export const add = curry((a, b, c) => a + b + c)

function curry(func) {
  function curriedFn(...args) {
    if (args.length === func.length) {
      return func(...args)
    }
    return function (...args2) {
      return curriedFn(...args, ...args2)
    }
  }

  return curriedFn
}
