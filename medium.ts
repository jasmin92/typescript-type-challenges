// 2. Get return type
// https://github.com/jasmin92/type-challenges/blob/master/questions/2-medium-return-type/README.md

type MyReturnType<T> = T extends (...args: any[]) => infer T ? T : never
