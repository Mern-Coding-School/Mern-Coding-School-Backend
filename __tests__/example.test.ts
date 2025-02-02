// __tests__/example.test.ts

describe('Example Test Suite', () => {
  test('true is true', () => {
    expect(true).toBe(true)
  })

  test('sum of 1 and 2 should be 3', () => {
    const sum = 1 + 2
    expect(sum).toBe(3)
  })

  test('string concatenation works', () => {
    const str = 'Hello' + ' ' + 'World'
    expect(str).toBe('Hello World')
  })

  test('object equality', () => {
    const obj1 = { name: 'Alice' }
    const obj2 = { name: 'Alice' }
    expect(obj1).toEqual(obj2) // Checks deep equality
  })
})
