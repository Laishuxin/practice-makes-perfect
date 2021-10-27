import { isObject } from '../shared/util'
export function new1(constructor, ...args) {
  if (typeof constructor !== 'function') {
    throw new TypeError(`${constructor} is not a constructor`)
  }
  const obj = Object.create(constructor.prototype)
  const result = constructor.apply(obj, args)
  return isObject(result) ? result : obj
}
