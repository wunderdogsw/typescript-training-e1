import * as first from '~/session_one'
import { Vec2, Vec3, Country } from '~/session_one'

type TestCaseSet<I, R> = Array<{
  input: I,
  result: R
}>

describe('Session one', () => {
  describe('sum(a, b)', () => {
    const { sum } = first
    it('should solve 1 + 2', () => {
      expect(sum(1,2)).toEqual(3)
    })

    it('should solve -2 + -2 ', () => {
      expect(sum(2,-2)).toEqual(0)
    })
  })

  describe('lengthVec2(v)', () => {
    const { lengthVec2} = first
    it('should solve the length of (1,1)', () => {
      const v: Vec2 = {
        x: 1,
        y: 1,
      }
      expect(lengthVec2(v)).toEqual(Math.sqrt(2))
    })

    it('should solve the length of (4,7)', () => {
      const v: Vec2 = {
        x: 4,
        y: 7,
      }
      expect(lengthVec2(v)).toEqual(Math.sqrt(65))
    })
  })

  describe('lengthVec3(v)', () => {
    const { lengthVec3} = first
    it('should solve the length of (1,1,1)', () => {
      const v: Vec3 = {
        x: 1,
        y: 1,
        z: 1,
      }
      expect(lengthVec3(v)).toEqual(Math.sqrt(3))
    })

    it('should solve the length of (4,7,11)', () => {
      const v: Vec3 = {
        x: 4,
        y: 7,
        z: 11
      }
      expect(lengthVec3(v)).toEqual(Math.sqrt(186))
    })
  })

  describe('fibo(n)', () => {
    const { fibo } = first
    const sequence = [0, 1, 1, 2, 3, 5, 8, 13]

    sequence.forEach((result, index ) => {
      const nth = index + 1
      it(`should return ${result} as ${nth}th fibonacci`, () => {
        expect(fibo(nth)).toEqual(result)
      })
    })
  })

  describe('longestOfThree(str, str2, str3)', () => {
    const { longestOfThree} = first
      const cases = [{
        input: {
          0: "foo",
          1: "bar",
          2: "quux"
        },
        result: "quux"
      },
      {
        input: {
          0: "aa",
          1: "b",
          2: "c"
        },
        result: "aa"
      }]
      cases.forEach(({input, result}) =>  {
        const formatted = [input[0], input[1], input[2]].join(', ')
        it(`should return '${result}' for '${formatted}'`, () => {
          expect(longestOfThree(input[0], input[1], input[2])).toEqual(result)
        })
      })
    })

    describe('longestOfMany(...args)', () => {
      const { longestOfMany } = first
        const cases = [{
          input: ["foo", "bar", "quux"],
          result: "quux"
        },
        {
          input: ["aa"],
          result: "aa"
        },
        {
          input: ["aa", "b"],
          result: "aa"
        },
        {
          input: "A quick brown fox jumped over a lazy dog".split(' '),
          result: "jumped"
        }]
        cases.forEach(({input, result}) =>  {
          const formatted = input.join(', ')
          it(`should return '${result}' for '${formatted}'`, () => {
            expect(longestOfMany(...input)).toEqual(result)
          })
        })
      })

    describe('isNumber', () => {
      it('should return false when value is string', () => {
        expect(first.isNumber('string')).toBe(false)
      })

      it('should return false when value is array', () => {
        expect(first.isNumber('string')).toBe(false)
      })

      it('should return true when value is integer', () => {
        expect(first.isNumber(32)).toBe(true)
      })

      it('should return true when value is floating point', () => {
        expect(first.isNumber(32.3)).toBe(true)
      })
    })

    describe('isCountry', () => {
      const { isCountry } = first
      const country: Country = {
        name: 'Finland',
        code: 'fi',
        population: 5700000
      }

      const cases = [
        {
          input: country,
          result: true
        },
        {
          input: {
            name: 'Finland',
            code: 'fi'
          },
          result: false
        },
        {
          input: {
            code: 'fi',
            population: 5700000
          },
          result: false,
        },
        {
          input: {
            name: 'Finland',
            population: 5700000
          },
          result: false,
        }
      ]
      cases.forEach(({input, result}) =>  {
        const prettyInput: string = Object.entries(input).map(pair => pair.join(': ')).join(', ')
        it(`should return ${result} for { ${prettyInput} } `, () => {
          expect(isCountry.apply(null, [input])).toEqual(result)
        })
      })
    })

    describe('greaterThanNumber', () => {
      const { greaterThanNumber} = first
      type ToPowerOfInput = [number[], number]
      const cases: TestCaseSet<ToPowerOfInput, number[]> = [
        {
          input: [[1,2,3], 2],
          result: [3]
        },
        {
          input: [[], 2],
          result: []
        },
        {
          input: [[2,3,4], 2],
          result: [3,4]
        }
      ]
      cases.forEach(({input, result}) =>  {
        it(`should return ${result} for ([${input.join('], ')}) `, () => {
          expect(greaterThanNumber.apply(null, input)).toEqual(result)
        })
      })
    })

    describe('toPowerOf', () => {
      const { toPowerOf } = first
      type ToPowerOfInput = [number[], number]
      const cases: TestCaseSet<ToPowerOfInput, number[]> = [
        {
          input: [[1,2, 3], 2],
          result: [1, 4, 9]
        },
        {
          input: [[], 0],
          result: []
        },
        {
          input: [[1, 2, 3], 1],
          result: [1, 2, 3]
        },
        {
          input: [[1, 2, 3], 1],
          result: [1, 2, 3]
        },
        {
          input: [[1, 2, 3], 0],
          result: [1, 1, 1]
        }
      ]
      cases.forEach(({input, result}) =>  {
        it(`should return ${result} for ([${input.join('], ')})`, () => {
          expect(toPowerOf.apply(null, input)).toEqual(result)
        })
      })
    })

    describe('getUserHandle', () => {
      it("should get users name if no nick doesn't exist", () => {
        expect(first.getUserHandle({ name: 'Jane' })).toBe('Jane')
      })

      it('should get users nick if nick it exist', () => {
        expect(first.getUserHandle({ name: 'Jane', nick: 'jd' })).toBe('jd')
      })
    })
})
