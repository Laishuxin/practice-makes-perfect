export function map(arr, func) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr} is not an array`)
  }
  if (typeof func !== 'function') {
    throw new TypeError(`${func} is not a function`)
  }
  const len = arr.length
  const result = []

  for (let i = 0; i < len; i++) {
    result[i] = func(arr[i], i, arr)
  }
  return result
}
