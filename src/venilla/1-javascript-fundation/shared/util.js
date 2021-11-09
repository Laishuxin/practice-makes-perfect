export const window = {}

export function isObject(o) {
  return (o != null && typeof o === 'object') || typeof o === 'function'
}

export function isSorted(arr, ascending = true) {
  if (!Array.isArray(arr)) return false
  if (ascending) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) return false
    }
  }
  return true
}
