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
