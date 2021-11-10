import { parseParam } from '.'
describe('urlParams', () => {
  it('should perform the correct parseParam function', () => {
    expect(parseParam('')).toEqual({})
    expect(parseParam('www.aa.com')).toEqual({})
    expect(parseParam('www.aa.com?')).toEqual({})
    expect(parseParam('www.aa.com?a=1')).toEqual({ a: 1 })
    expect(parseParam('www.aa.com?a=1&b')).toEqual({ a: 1, b: true })
    expect(parseParam('www.aa.com?a=1&b&a=2')).toEqual({ a: [1, 2], b: true })
    expect(parseParam('www.aa.com?a=1&b&a=2&b')).toEqual({ a: [1, 2], b: true })
    expect(parseParam('www.aa.com?a=1&b=true&a=a')).toEqual({
      a: [1, 'a'],
      b: 'true',
    })

    expect(
      parseParam(
        'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled',
      ),
    ).toEqual({
      user: 'anonymous',
      id: [123, 456], // 重复出现的 key 要组装成数组，能被转成数字的就转成数字类型
      city: '北京', // 中文需解码
      enabled: true, // 未指定值得 key 约定为 true
    })
  })
})
