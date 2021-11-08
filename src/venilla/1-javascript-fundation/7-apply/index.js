import { window } from '../shared/util'
function arrayLike(a) {
  return a && a.length !== void 0
}
/**
 * @param {*} context
 * @param {any[]} args
 */
Function.prototype.apply1 = function (context, args) {
  if (args && !arrayLike(args)) {
    throw new TypeError(`CreateListFromArrayLike called on non-object`)
  }
  context = context != void 0 ? Object(context) : window
  const fn = Symbol()
  context[fn] = this
  const result = args === void 0 ? context[fn]() : context[fn](...args)
  delete context[fn]
  return result
}
