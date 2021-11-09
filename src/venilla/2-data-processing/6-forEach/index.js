export function forEach(arr, func) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr} is not an array`)
  }
  if (typeof func !== 'function') {
    throw new TypeError(`${func} is not a function`)
  }

  const len = arr.length
  for (let i = 0; i < len; i++) {
    func(arr[i], i, arr)
  }
}
