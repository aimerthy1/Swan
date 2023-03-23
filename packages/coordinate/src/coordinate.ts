import { compose } from '@swan/utils'

export const createCoordinate = ({
  x,
  y,
  width,
  height,
  transforms = [],
}: {
  x: number
  y: number
  width: number
  height: number
  transforms?: any[]
}) => {
  // [[transpose, reflect], [transpose, reflect]]
  // -> [transpose, reflect, transpose, reflect]
  transforms = transforms
    .map((transform) =>
      transform({
        x,
        y,
        width,
        height,
      })
    )
    .flat()
  const output = compose(...transforms)

  const types = transforms.map((d) => d.type())

  output.isPolar = () => types.indexOf('polar') !== -1

  // Determine whether it is transposed
  // Only when there are an odd number of 'transpose' is it a transpose.
  // Here, XOR is used: a ^ b. It only returns true when the values of a and b are different, otherwise it returns false.
  output.isTranspose = () =>
    types.reduce((is, type) => is ^ (type === 'transpose' ? 1 : 0), false)

  output.center = () => [x + width / 2, y + height / 2]

  return output
}
