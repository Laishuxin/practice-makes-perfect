import { shuffle } from '.'
describe('shuffle', () => {
  it('should perform the better shuffle function', () => {
    expect(() => shuffle(1)).toThrow()
    const arr = [1, 2, 3]
    const epsilon = 200
    const map = {
      123: 0,
      132: 0,
      213: 0,
      231: 0,
      312: 0,
      321: 0,
    }
    for (let i = 0; i < 10000; i++) {
      map[shuffle(arr).join('')]++
    }
    const result = [...Object.values(map)]
    const min = Math.min(...result)
    const max = Math.max(...result)
    console.log(min)
    console.log(max)
    expect(max - min <= epsilon).toBeTruthy()
  })
})
