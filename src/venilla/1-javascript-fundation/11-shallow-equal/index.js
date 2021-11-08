const hasOwnProperty = Object.prototype.hasOwnProperty
/**
 * `shouldComponentUpdate` 底层实现判断原理。
 * @param {any} o1
 * @param {any} o2
 * @returns { boolean }
 */
export function shallowEqual(o1, o2) {
  if (o1 === o2) {
    return true
  }

  if (
    typeof o1 !== 'object' ||
    typeof o2 !== 'object' ||
    o1 === null ||
    o2 === null
  ) {
    return false
  }

  const keys1 = Object.keys(o1)
  const keys2 = Object.keys(o2)
  if (keys1.length !== keys2.length) {
    return false
  }

  for (let i = 0; i < keys1.length; i++) {
    if (
      !hasOwnProperty.call(o2, keys1[i]) ||
      !Object.is(o1[keys1[i]], o2[keys1[i]])
    ) {
      return false
    }
  }

  return true
}
