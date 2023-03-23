export type CoordinateTransform =
  | 'translate'
  | 'scale'
  | 'reflect'
  | 'reflectX'
  | 'reflectY'
  | 'transpose'
  | 'polar'

export interface Transformer {
  ([x, y]: [number, number]): [number, number]
  type?: () => CoordinateTransform
}
