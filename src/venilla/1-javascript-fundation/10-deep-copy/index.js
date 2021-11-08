function isObject(obj) {
  return (typeof obj === 'object' && obj !== null) || typeof obj === 'function'
}

/**
 * 深度优先，递归实现
 * @param {*} obj
 * @returns deepCopiedObj
 */
export function deepCopy(obj) {}

/**
 * 深度优先非递归实现
 * @param {*} obj
 */
export function deepCopyDFS(obj) {}

export function deepCopyBFS(obj) {}
