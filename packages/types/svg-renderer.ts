export type SVGElements = SVGElementTagNameMap[keyof SVGElementTagNameMap]

export type Attributes = Record<string, string | number>
export type PathAttributes = Attributes & { d: Array<Array<string | number>> }

export type Context = {
  node: SVGSVGElement
  group: SVGGElement
}

export type SVGTransform =
  | 'matrix'
  | 'translate'
  | 'scale'
  | 'rotate'
  | 'skewX'
  | 'skewY'
