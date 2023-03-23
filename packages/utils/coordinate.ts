export const curry = <T extends (...args: any) => any>(fn: T) => {
  const arity = fn.length
  return function $curry(
    ...args: Array<Parameters<T>[number]>
  ): ReturnType<T> | typeof $curry {
    // different to lodash.curry, treat the case of no parameters being passed as passing undefined
    args = args ? args : [undefined]
    if (args.length >= arity) {
      return fn(...args)
    }
    return $curry.bind(null, ...args)
  }
}

const identity = <T>(x: T) => x

// @TODO: better Type annotation
export const compose = (...fns: Array<any>) => {
  return fns.reduce((p, c) => (x: any) => c(p(x)), identity)
}
