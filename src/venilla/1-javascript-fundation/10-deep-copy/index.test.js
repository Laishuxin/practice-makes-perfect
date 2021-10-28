import { deepCopy, deepCopyBFS, deepCopyDFS } from '.'
describe('deepCopy', () => {
  let keys = []
  const a = new Proxy(
    { a1: 1, a2: 2 },
    {
      get(target, key) {
        if (!keys.includes(key)) keys.push(key)
        return Reflect.get(target, key)
      },
    },
  )
  const b = 1
  const c = new Proxy(
    { c1: 1 },
    {
      get(target, key) {
        if (!keys.includes(key)) keys.push(key)
        return Reflect.get(target, key)
      },
    },
  )
  const proxy = new Proxy(
    { a, b, c },
    {
      get(target, key) {
        if (!keys.includes(key)) keys.push(key)
        return Reflect.get(target, key)
      },
    },
  )

  beforeEach(() => {
    keys = []
  })

  describe('DFS recursive implementation', () => {
    it('should perform the correct deepCopy function', () => {
      // TODO: add test
      expect(deepCopy(null)).toEqual(null)
      function func() {}
      expect(deepCopy(func)).toEqual(func)
      const obj1 = { a: 1, b: 1, c: [1, 2] }
      const copiedObj1 = deepCopy(obj1)
      expect(copiedObj1).toEqual(obj1)
      copiedObj1.c.push(3)
      expect(copiedObj1).not.toEqual(obj1)
    })

    it('should avoid cycle reference', () => {
      const obj1 = { name: 'obj1' }
      const obj2 = { name: 'obj2' }
      // obj1.a = obj2,  obj2.a = obj1
      // cycle reference
      obj1.a = obj2
      obj2.a = obj1
      const copiedObj1 = deepCopy(obj1)
      expect(copiedObj1).toEqual(obj1)
    })

    it('should perform DFS copy', () => {
      deepCopyDFS(proxy)
      expect(keys).toEqual(['a', 'a1', 'a2', 'b', 'c', 'c1'])
    })
  })

  describe('DFS non-recursive implementation', () => {
    it('should perform the correct deepCopy function', () => {
      // TODO: add test
      expect(deepCopyDFS(null)).toEqual(null)
      function func() {}
      expect(deepCopyDFS(func)).toEqual(func)
      expect(deepCopyDFS([1, 2, 3, { a: 1 }])).toEqual([1, 2, 3, { a: 1 }])
      const obj1 = { a: 1, b: 1, c: [1, 2] }
      const copiedObj1 = deepCopyDFS(obj1)
      expect(copiedObj1).toEqual(obj1)
      copiedObj1.c.push(3)
      expect(copiedObj1).not.toEqual(obj1)
    })

    it('should avoid cycle reference', () => {
      const obj1 = { name: 'obj1' }
      const obj2 = { name: 'obj2' }
      // obj1.a = obj2,  obj2.a = obj1
      // cycle reference
      obj1.a = obj2
      obj2.a = obj1
      const copiedObj1 = deepCopyDFS(obj1)
      expect(copiedObj1).toEqual(obj1)
    })

    it('should perform DFS copy', () => {
      deepCopyDFS(proxy)
      expect(keys).toEqual(['a', 'a1', 'a2', 'b', 'c', 'c1'])
    })
  })

  describe('BFS non-recursive implementation', () => {
    it('should perform the correct deepCopy function', () => {
      // TODO: add test
      expect(deepCopyBFS(null)).toEqual(null)
      function func() {}
      expect(deepCopyBFS(func)).toEqual(func)
      expect(deepCopyBFS([1, 2, 3, { a: 1 }])).toEqual([1, 2, 3, { a: 1 }])
      const obj1 = { a: 1, b: 1, c: [1, 2] }
      const copiedObj1 = deepCopyBFS(obj1)
      expect(copiedObj1).toEqual(obj1)
      copiedObj1.c.push(3)
      expect(copiedObj1).not.toEqual(obj1)
    })

    it('should avoid cycle reference', () => {
      const obj1 = { name: 'obj1' }
      const obj2 = { name: 'obj2' }
      // obj1.a = obj2,  obj2.a = obj1
      // cycle reference
      obj1.a = obj2
      obj2.a = obj1
      const copiedObj1 = deepCopyBFS(obj1)
      expect(copiedObj1).toEqual(obj1)
    })

    it('should perform DFS copy', () => {
      deepCopyBFS(proxy)
      expect(keys).toEqual(['a', 'b', 'c', 'a1', 'a2', 'c1'])
    })
  })
})
