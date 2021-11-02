function isObject(obj) {
  return (obj != null && typeof obj === 'object') || typeof obj === 'function'
}

export function instanceOf(left, right) {
  if (!isObject(left) || !isObject(right)) {
    return false
  }
  const proto = right.prototype
  let leftProto = left.__proto__
  while (leftProto) {
    if (leftProto === proto) {
      return true
    }
    leftProto = leftProto.__proto__
  }
  return false
}
