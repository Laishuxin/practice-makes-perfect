export const window = {}

export function isObject(o) {
  return (o != null && typeof o === 'object') || typeof o === 'function'
}
