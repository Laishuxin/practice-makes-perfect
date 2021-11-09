export function flat(arr, depth = 1) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr} is not an array`)
  }
  return depth > 0
    ? arr.reduce(
        (prev, curr) =>
          prev.concat(Array.isArray(curr) ? flat(curr, depth - 1) : curr),
        [],
      )
    : [...arr]
}
