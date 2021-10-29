function isObject(o) {
  return o != null && typeof o === 'object'
}

export function looseEqual(o1, o2) {
  if (o1 === o2) {
    return true
  }
  const isObjectA = isObject(o1)
  const isObjectB = isObject(o2)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(o1)
      const isArrayB = Array.isArray(o2)
      if (isArrayA && isArrayB) {
        return (
          o1.length === o2.length && o1.every((el, i) => looseEqual(el, o2[i]))
        )
      } else if (o1 instanceof Date && o2 instanceof Date) {
        return o1.getTime() === o2.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(o1)
        const keysB = Object.keys(o2)
        return (
          keysA.length === keysB.length &&
          keysA.every(key => looseEqual(o1[key], o2[key]))
        )
      } else {
        return false
      }
    } catch (_) {
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(o1) === String(o2)
  } else {
    return false
  }
}
