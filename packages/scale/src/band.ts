import { scaleBand } from 'd3-scale'

import type { NumberValue } from 'd3-scale'

export const createBand = <Domain extends { toString(): string }>({
  domain,
  range,
  padding,
}: {
  domain: Iterable<Domain>
  range: Iterable<NumberValue>
  padding?: number
}) => {
  if (padding) {
    return scaleBand<Domain>(domain, range).padding(padding)
  }
  return scaleBand<Domain>(domain, range)
}
