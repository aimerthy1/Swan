import type { CoordinateTransform, Transformer } from '@swan/types'

const transform = (type: CoordinateTransform, transformer: Transformer) => {
  transformer.type = () => type
  return transformer
}

export const translate = (tx = 0, ty = 0) => {
  return transform('translate', ([x, y]: [number, number]) => [x + tx, y + ty])
}

export const scale = (sx = 1, sy = 1) => {
  return transform('scale', ([x, y]: [number, number]) => [x * sx, y * sy])
}

export const reflect = () => {
  return transform('reflect', scale(-1, -1))
}

export const reflectX = () => {
  return transform('reflectX', scale(-1, 1))
}

export const reflectY = () => {
  return transform('reflectY', scale(1, -1))
}

export const transpose = () => {
  return transform('transpose', ([x, y]) => [y, x])
}

export const polar = () => {
  return transform('polar', ([theta, radius]) => [
    radius * Math.cos(theta),
    radius * Math.sin(theta),
  ])
}
