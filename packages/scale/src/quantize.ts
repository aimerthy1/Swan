import { scaleQuantize } from 'd3-scale'

import type { NumberValue } from 'd3-scale'

export const createQuantize = <Range>({
  domain,
  range,
}: {
  domain: Iterable<NumberValue>
  range: Iterable<Range>
}) => {
  return scaleQuantize<Range>(domain, range)
}
