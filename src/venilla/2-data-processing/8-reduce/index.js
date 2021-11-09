export function reduce(arr, func, initialValue) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr} is not an array`)
  }
  if (typeof func !== 'function') {
    throw new TypeError(`${func} is not a function`)
  }

  const len = arr.length
  if (len === 0 && initialValue === void 0) {
    throw new TypeError('Reduce of empty array with no initial value')
  }

  let i = 0
  if (initialValue === void 0) {
    initialValue = arr[0]
    i += 1
  }
  while (i < len) {
    initialValue = func(initialValue, arr[i], i, arr)
    i++
  }
  return initialValue
}
