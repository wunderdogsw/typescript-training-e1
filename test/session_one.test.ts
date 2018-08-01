import * as first from '~/session_one'
import { Vec2, Vec3 } from '~/session_one'

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
      expect(lengthVec2(v)).toEqual(1)
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
      expect(lengthVec3(v)).toEqual(1)
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
})
