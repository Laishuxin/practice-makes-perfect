export function filter(arr, predicate) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr} is not an array`)
  }
  if (typeof predicate !== 'function') {
    throw new TypeError(`${predicate} is not a function`)
  }

  const result = []
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const ret = predicate(arr[i], i, arr)
    if (ret) result.push(arr[i])
  }
  return result
}
