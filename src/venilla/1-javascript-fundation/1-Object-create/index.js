export function create(obj) {
  if (typeof obj !== 'function' && typeof obj !== 'object') {
    throw new TypeError(`expected an object type, but receive ${obj}`)
  }
  if (obj === null) {
    return {}
  }
  function F() {}
  F.prototype = obj
  return new F()
}
