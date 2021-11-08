import { window } from '../shared/util'

Function.prototype.bind1 = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('some error')
  }
  const that = this
  function F() {}
  function fBound(...args2) {
    args = [...args, ...args2]
    return that.apply(this instanceof F ? this : context, args)
  }
  F.prototype = this.prototype
  fBound.prototype = new F()
  return fBound
}
