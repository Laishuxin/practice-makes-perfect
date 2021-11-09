export function reverse(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError(`${arr} is not an array`)
  }

  let l = 0,
    r = arr.length - 1
  while (l < r) {
    swap(arr, l++, r--)
  }
  return arr
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
function main() {
  console.log(reverse([1, 2, 3]))
}

main()
