import { scalePoint } from 'd3-scale'

import type { NumberValue } from 'd3-scale'

export const createPoint = <Domain extends { toString(): string }>({
  domain,
  range,
}: {
  domain: Iterable<Domain>
  range: Iterable<NumberValue>
}) => {
  return scalePoint<Domain>(domain, range)
}
