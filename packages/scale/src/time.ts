import { scaleTime } from 'd3-scale'

import type { NumberValue } from 'd3-scale'

export const createTime = <Range>({
  domain,
  range,
}: {
  domain: Iterable<Date | NumberValue>
  range: Iterable<Range>
}) => {
  return scaleTime<Range>(domain, range)
}
