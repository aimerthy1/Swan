import { scaleQuantile } from 'd3-scale'

import type { NumberValue } from 'd3-scale'

export const createQuantile = <Range>({
  domain,
  range,
}: {
  domain: Iterable<NumberValue | null | undefined>
  range: Iterable<Range>
}) => {
  return scaleQuantile<Range>(domain, range)
}
