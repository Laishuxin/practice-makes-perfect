function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

/**
 * 深度优先，递归实现
 * @param {*} obj
 * @returns deepCopiedObj
 */
export function deepCopy(obj) {
  const seen = new Map()
  seen.set(obj, obj)
  return _deepCopy(obj, seen)
}
/**
 * @param {*} obj
 * @param { Map<any, any> } seen
 */
function _deepCopy(obj, seen) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  return Object.keys(obj).reduce(
    (prev, key) => {
      const value = obj[key]

      if (isObject(value)) {
        if (seen.has(value)) {
          prev[key] = seen.get(value)
        } else {
          const ret = _deepCopy(value, seen)
          prev[key] = ret
          seen.set(value, ret)
        }
      } else {
        prev[key] = value
      }
      return prev
    },
    Array.isArray(obj) ? [] : {},
  )
}

/**
 * 深度优先非递归实现
 * @param {*} obj
 */
export function deepCopyDFS(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  // Map<origin, dest>
  const seen = new Map()
  seen.set(obj, obj)
  const result = Array.isArray(obj) ? [] : {}
  const stack = [[obj, result, null]]

  while (stack.length) {
    const [src, dest, key] = stack.pop()
    if (key === null) {
      const keys = Object.keys(src)
      for (let i = keys.length - 1; i >= 0; i--) {
        stack.push([src, dest, keys[i]])
      }
    } else if (isObject(src[key])) {
      if (seen.has(src[key])) {
        dest[key] = seen.get(src[key])
      } else {
        dest[key] = Array.isArray(src[key]) ? [] : {}
        stack.push([src[key], dest[key], null])
      }
    } else {
      dest[key] = src[key]
    }
  }
  return result
}

export function deepCopyBFS(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  const result = Array.isArray(obj) ? [] : {}
  const queue = [[obj, result, null]]
  const seen = new Map()
  seen.set(obj, obj)
  while (queue.length) {
    const [src, dest, key] = queue.shift()
    if (key === null) {
      Object.keys(src).forEach(key => {
        queue.push([src, dest, key])
      })
    } else if (isObject(src[key])) {
      if (seen.has(src[key])) {
        dest[key] = seen.get(src[key])
      } else {
        dest[key] = Array.isArray(src[key]) ? [] : {}
        queue.push([src[key], dest[key], null])
      }
    } else {
      dest[key] = src[key]
    }
  }
  return result
}
