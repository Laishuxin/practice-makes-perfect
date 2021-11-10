/**
 * @param { number } num
 * @returns { string }
 */
export function thousandBit(num) {
  if (typeof num !== 'number' && isNaN(Number(num))) {
    throw new TypeError(
      `${num} is not a number or cannot be converted to number`,
    )
  }

  num = Number(num)
  const minus = num < 0
  num = String(Math.abs(num))
  let decimals = ''
  if (num.includes('.')) {
    ;[num, decimals] = num.split('.')
  }
  if (num.length <= 3) {
    return `${minus ? '-' : ''}${num}${decimals ? '.' : ''}${decimals}`
  }

  const result = []

  let j = 1
  for (let i = num.length - 1; i >= 0; i--) {
    result.unshift(num[i])
    if (j % 3 === 0 && i !== 0) {
      result.unshift(',')
    }
    ++j
  }

  return `${minus ? '-' : ''}${result.join('')}${
    decimals ? '.' : ''
  }${decimals}`
}
