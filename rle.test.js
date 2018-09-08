import rle from './rle'

describe('Basic edge cases to check',() => {
  it('should throw an error if string 123AAA is not valid', () => {
    const wrongInputString = '123AAA'
    expect(() => {
      rle(wrongInputString)
    }).toThrow()
  })

  it('should throw an error if empty string', () => {
    const wrongInputString = ''
    expect(() => {
      rle(wrongInputString)
    }).toThrow()
  })

  it('should not throw an error if string is valid', () => {
    const wrongInputString = 'AAZZ'
    expect(() => {
      rle(wrongInputString)
    }).not.toThrow()
  })
})

describe('Normal cases',() => {
  it('should returns A4B3C2XYZD4E3F3A6B28 on AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB', () => {
    const inputString = 'AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB'
    const expectedResultString = 'A4B3C2XYZD4E3F3A6B28'

    expect(rle(inputString)).toBe(expectedResultString)
  })

  it('should returns A4B3 on AAAABBB', () => {
    const inputString = 'AAAABBB'
    const expectedResultString = 'A4B3'

    expect(rle(inputString)).toBe(expectedResultString)
  })

  it('should returns ABCDABCD on ABCDABCD', () => {
    const inputString = 'ABCDABCD'
    const expectedResultString = 'ABCDABCD'

    expect(rle(inputString)).toBe(expectedResultString)
  })
})
