export function sort(arr, comparator) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr} is not an array`)
  }
  if (typeof comparator !== 'function' && comparator !== void 0) {
    throw new TypeError(
      `The comparison function must be either a function or undefined`,
    )
  }
  comparator =
    comparator != void 0 ? comparator : (a, b) => (a === b ? 0 : a > b ? 1 : -1)

  const len = arr.length
  if (len <= 1) {
    return arr
  }
  return quickSort(arr, 0, len - 1, comparator)
}

function quickSort(arr, l, r, comparator) {
  if (r - l <= 12) {
    return insertSort(arr, l, r, comparator)
  }
  const x = arr[~~(Math.random() * (r - l)) + l]
  let i = l - 1,
    j = r + 1
  while (i < j) {
    do i++
    while (comparator(arr[i], x) < 0)
    do j--
    while (comparator(arr[j], x) > 0)
    if (i < j) {
      swap(arr, i, j)
    }
  }
  quickSort(arr, l, j, comparator)
  quickSort(arr, j + 1, r, comparator)

  return arr
}

function insertSort(arr, l, r, comparator) {
  if (l >= r) return arr

  for (let i = 1; i <= r; i++) {
    const tmp = arr[i]
    let j = i - 1
    while (j >= l && comparator(arr[j], tmp) > 0) {
      arr[j + 1] = arr[j]
      --j
    }
    arr[j + 1] = tmp
  }
  return arr
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
