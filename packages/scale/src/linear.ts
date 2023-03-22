import { scaleLinear } from 'd3-scale'

import type { InterpolatorFactory, NumberValue } from 'd3-scale'

export const createLinear = <Range>({
  domain,
  range,
  interpolate,
}: {
  domain: Iterable<NumberValue>
  range: Iterable<Range>
  interpolate?: InterpolatorFactory<Range, Range>
}) => {
  if (interpolate) {
    return scaleLinear<Range>(domain, range).interpolate(interpolate)
  }
  return scaleLinear<Range>(domain, range)
}
