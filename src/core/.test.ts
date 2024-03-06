function testing(value: number) {
  return !(value < 0 || value > 100)
}

function moking(value: number) {
  if (value === 1) return value

  return Math.pow(value, 2)
}

describe('testing', () => {
  test('Проверка диапазона принимаемого значения', () => {
    expect(testing(33)).toBe(true)
    expect(testing(50)).toBe(true)

    expect(testing(1)).toBe(true)
    expect(testing(99)).toBe(true)

    expect(testing(0)).toBe(true)
    expect(testing(100)).toBe(true)

    expect(testing(-1)).toBe(false)
    expect(testing(101)).toBe(false)

    expect(testing(-1)).not.toBeUndefined()
    expect(testing(100)).not.toBeNull()
  })

  test('moking + test', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    moking(2)
    expect(spyMathPow).toBeCalledTimes(1)
  })

  test('moking + test', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    moking(1)
    expect(spyMathPow).toBeCalledTimes(0)
  })
})
