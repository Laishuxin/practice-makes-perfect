export function shallowCopy1(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  return Array.isArray(obj) ? [...obj] : { ...obj }
}

export function shallowCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }
  const result = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    result[key] = obj[key]
  }
  return result
}
