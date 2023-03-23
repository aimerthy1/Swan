import { polar as $polar, reflectY, scale, translate } from './transform'

import { curry } from '@swan/utils'

/**
 * ![How to transform from cartesian to polar](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d007b736c1d64c33846aa7c0d591158d~tplv-k3u1fbpfcp-zoom-in-crop-mark:565:0:0:0.awebp?)
 */
const coordinate = (
  transformOptions: {
    innerRadius: number
    outerRadius: number
    startAngle: number
    endAngle: number
  },
  canvasOptions: { width: number; height: number }
) => {
  const { width, height } = canvasOptions
  const { innerRadius, outerRadius, startAngle, endAngle } = transformOptions

  // Guaranteed to end up as a circle after cartesian changes
  const aspect = width / height
  const sx = aspect > 1 ? 1 / aspect : 1
  const sy = aspect > 1 ? 1 : aspect

  return [
    // Flip in the y-direction with the center of the canvas
    translate(0, -0.5),
    reflectY(),
    translate(0, 0.5),

    // Range of adjustment angle and radius
    scale(endAngle - startAngle, outerRadius - innerRadius),
    translate(startAngle, innerRadius),
    $polar(),

    // Change the size of the inner cut canvas
    scale(sx, sy),
    scale(0.5, 0.5),

    // Move to the center of the canvas
    translate(0.5, 0.5),
  ]
}

export const polar = curry(coordinate)
