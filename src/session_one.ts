const TODO = () => Error('Not implemented')

/**
 * 1: Return the sum of two numbers
 */

export function sum(a: number, b: number): number {
  throw TODO()
}

/**
 *  Calculate the length of a Vec2
 */

export interface Vec2 {
  x: number,
  y: number
}

export function lengthVec2(v: Vec2): number {
  throw TODO()
}

 /**
  * Calculate the length of a Vec3
  */

export interface Vec3 extends Vec2 {
   z: number
}

export function lengthVec3(v: Vec3): number {
  throw TODO()
}

 /**
  * Calculate the nth Fibonacci number
  */

export function fibo(n: number): number {
    throw TODO()
}

/**
 * Return the longest string of three
 */

export function longestOfThree(a: string, b: string, c: string): string {
    throw TODO()
}

 /**
  * Return the longest string of many
  */

export function longestOfMany(...strings: string[]): string {
    throw TODO()
}

/**
 * Check if a value is a number
 */
export function isNumber(value: any): value is number {
  throw TODO()
}

export interface User {
  name: string
  nick?: string
}

/**
 * Get users nick name, or return a name if one doesn't exist
 */
export function getUserHandle(user: User): string {
  throw TODO()
}

export interface Country {
  name: string,
  code: string,
  population: number
}

/**
 * Test if a given object is a Country
 */
export function isCountry(obj: unknown): obj is Country {
  throw TODO()
}

/**
 * Return an array only with elements that are greater than the param n
 */

export function greaterThanNumber(input: Array<number>, n: number): Array<number> {
  throw TODO()
}

/**
 * Return the power of n for each value in the input array
 */

export function toPowerOf(input: Array<number>, n: number): Array<number> {
  throw TODO()
}
