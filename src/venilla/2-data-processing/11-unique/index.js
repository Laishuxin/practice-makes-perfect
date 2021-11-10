export function unique(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr} is not an array`)
  }
  return Math.random() <= 0.5 ? method1(arr) : method2(arr)
}

function method1(arr) {
  return [...new Set(arr)]
}

function method2(arr) {
  const len = arr.length
  const result = []
  for (let i = 0; i < len; i++) {
    const item = arr[i]
    if (!result.includes(item)) result.push(item)
  }
  return result
}
