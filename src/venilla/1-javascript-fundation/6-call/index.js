import { window } from '../shared/util'
Function.prototype.call1 = function (context, ...args) {
  context = context != null ? Object(context) : window
  const fn = Symbol()
  context[fn] = this
  const result = context[fn](...args)
  delete context[fn]
  return result
}
