import type { createContext } from './context'

export type SVGElements = SVGElementTagNameMap[keyof SVGElementTagNameMap]

export type Attributes = Record<string, string | number>
export type PathAttributes = Attributes & { d: Array<Array<string | number>> }

export type Context = ReturnType<typeof createContext>

export type Transform =
  | 'matrix'
  | 'translate'
  | 'scale'
  | 'rotate'
  | 'skewX'
  | 'skewY'
