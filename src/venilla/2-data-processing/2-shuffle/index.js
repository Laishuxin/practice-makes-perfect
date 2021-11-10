/**
 * shuffle an array in place.
 * @param { Array<an> } arr
 */
export function shuffle(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr} is not an array`)
  }

  // return arr.sort(() => Math.random() - 0.5)
  for (let i = arr.length - 1; i > 0; --i) {
    const j = ~~(Math.random() * (i + 1))
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  return arr
}
