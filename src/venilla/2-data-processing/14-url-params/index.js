/**
 * @param { string } url
 * @returns { object }
 */
export function parseParam(url) {
  if (!url) return {}
  const queryIndex = url.indexOf('?')
  if (queryIndex === -1) {
    return {}
  }
  // www.aaa.com?a=1&b=2  => query = a=1&b=2
  const query = url.substring(queryIndex + 1)
  // query = ""
  if (!query) return {}

  const res = {}
  const params = query.split('&')
  const re = /=/
  params.forEach(param => {
    if (re.test(param)) {
      let [key, value] = param.split('=')
      value = decodeURIComponent(value)
      if (!isNaN(Number(value))) {
        value = parseFloat(value)
      }

      if (Object.prototype.hasOwnProperty.call(res, key)) {
        res[key] = [].concat(res[key], value)
      } else {
        res[key] = value
      }
    } else {
      // &a&b=1 => {a: true, b: 1}
      res[param] = true
    }
  })

  return res
}
