import { reflectX, translate, transpose as $transpose } from './transform'

import { curry } from '@swan/utils'

function coordinate(_transformOptions: undefined, _canvasOptions: undefined) {
  return [$transpose(), translate(-0.5, -0.5), reflectX(), translate(0.5, 0.5)]
}

export const transpose = curry(coordinate)
