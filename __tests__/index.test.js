import { sum, truth } from '../src'

describe('Test Suite', () => {
  test('should be equal to 3', () => {
    const actual = sum(1, 2)
    const expected = 3
    expect(actual).toEqual(expected)
  })

  test('should show the truth', () => {
    const actual = truth()
    const expected = `Something we know: ${process.env.SUPER_SECRET_ENV_VAR}`
    expect(actual).toEqual(expected)
  })
})
