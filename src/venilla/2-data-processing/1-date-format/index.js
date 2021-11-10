function normalize(num) {
  return `${num > 0 && num < 10 ? '0' : ''}${num}`
}

/**
 * Format date.
 * @param { Date | string } date A Date object or a date string.
 * @param { string } pattern format pattern like yyyy-mm-dd
 * @returns { string } formatted date string.
 */
export function dateFormat(date, pattern) {
  if (!(date instanceof Date)) {
    date = new Date(date)
    if (date.toString() === 'Invalid Date') {
      throw new Error('Invalid Date')
    }
  }
  pattern = typeof pattern === 'string' ? pattern : ''
  const year = date.getFullYear()
  const month = normalize(date.getMonth() + 1)
  const day = normalize(date.getDate())

  pattern = pattern.replace(/yyyy/g, year)
  pattern = pattern.replace(/mm/g, month)
  pattern = pattern.replace(/dd/g, day)
  return pattern
}
