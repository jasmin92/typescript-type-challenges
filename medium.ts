// 2. Get return type
// https://github.com/jasmin92/type-challenges/blob/master/questions/2-medium-return-type/README.md

type MyReturnType<T> = T extends (...args: any[]) => infer T ? T : never

// 3. Omit
// https://github.com/type-challenges/type-challenges/blob/master/questions/3-medium-omit/README.md

type MyOmit<T, K> = { [key in Exclude<keyof T, K>]: T[key] }

// 8. Readonly 2
// https://github.com/jasmin92/type-challenges/blob/master/questions/8-medium-readonly-2/README.md

type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & { [key in Exclude<keyof T, K>]: T[key] }
