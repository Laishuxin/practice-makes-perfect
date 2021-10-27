import { isObject } from './util'

describe('utils', () => {
  it('should perform the correct isObject function', () => {
    expect(isObject(null)).toBeFalsy()
    expect(isObject(undefined)).toBeFalsy()
    expect(isObject({})).toBeTruthy()
    expect(isObject(Array)).toBeTruthy()
  })
})
