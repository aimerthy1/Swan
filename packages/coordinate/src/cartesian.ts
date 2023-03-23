import { scale, translate } from './transform'

import { curry } from '@swan/utils'

const coordinate = (
  _transformOptions: undefined,
  canvasOptions: {
    x: number
    y: number
    width: number
    height: number
  }
) => {
  const { x, y, width, height } = canvasOptions
  return [scale(width, height), translate(x, y)]
}

export const cartesian = curry(coordinate)
