export function create(obj) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    throw new TypeError(
      'Object prototype may only be an Object or null: ' + obj,
    )
  }
  if (obj === null) {
    return {}
  }
  function F() {}
  F.prototype = obj
  return new F()
}
