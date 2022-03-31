// Easy

// 4. Pick
// https://github.com/jasmin92/type-challenges/blob/master/questions/4-easy-pick/README.md

type MyPick<T, K extends keyof T> = { [key in K]: T[key] }

// 7. Readonly
// https://github.com/jasmin92/type-challenges/blob/master/questions/7-easy-readonly/README.md

type MyReadonly<T> = { readonly [key in keyof T]: T[key] }

// 11. Tupple to object
// https://github.com/jasmin92/type-challenges/blob/master/questions/11-easy-tuple-to-object/README.md

type TupleToObject<T extends readonly any[]> = { [key in T[number]]: key }

// 14. First of Array
// https://github.com/jasmin92/type-challenges/blob/master/questions/14-easy-first/README.md

type First<T extends any[]> = T extends [] ? never : T[0]

// 18. - Length of Tuple
// https://github.com/jasmin92/type-challenges/blob/master/questions/18-easy-tuple-length/README.md

type Length<T extends readonly any[]> = T["length"]

// 43. Exclude
// https://github.com/jasmin92/type-challenges/blob/master/questions/43-easy-exclude/README.md

type MyExclude<T, U> = T extends U ? never : T

// 189. Awaited
// https://github.com/jasmin92/type-challenges/blob/master/questions/189-easy-awaited/README.md

type MyAwaited<T> = T extends Promise<infer P>
  ? P extends Promise<any>
    ? MyAwaited<P>
    : P
  : never

// 268. IF
// https://github.com/jasmin92/type-challenges/blob/master/questions/268-easy-if/README.md

type If<C, T, F> = C extends true ? T : F

// 533 Concat
// https://github.com/jasmin92/type-challenges/blob/master/questions/533-easy-concat/README.md

type Concat<T extends any[], U extends any[]> = [...T, ...U]

// 898. Incldues
// https://github.com/jasmin92/type-challenges/blob/master/questions/898-easy-includes/README.md

type Equal<X, Y> = <T>() => T extends X
  ? 1
  : 2 extends <T>() => T extends Y ? 1 : 2
  ? true
  : false

type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false

// 3057. Push
// https://github.com/jasmin92/type-challenges/blob/master/questions/3057-easy-push/README.md

type Push<T extends any[], U> = [...T, U]

// 3060. Unshift
// https://github.com/jasmin92/type-challenges/blob/master/questions/3060-easy-unshift/README.md

type Unshift<T extends any[], U> = [U, ...T]
