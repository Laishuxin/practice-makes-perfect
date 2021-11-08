export function reduceRight(arr, func, initialValue) {
  if (!Array.isArray(arr)) {
    throw new TypeError('expect to receive an array but receive ', arr)
  }
  if (typeof func !== 'function') {
    throw new TypeError('expect to receive function but receive ', func)
  }

  const len = arr.length
  if (len === 0 && initialValue === void 0) {
    throw new TypeError('Reduce of empty array with no initial value')
  }

  let i = len - 1
  if (initialValue === void 0) {
    initialValue = arr[i]
    i -= 1
  }
  while (i >= 0) {
    initialValue = func(initialValue, arr[i], i, arr)
    i--
  }
  return initialValue
}
