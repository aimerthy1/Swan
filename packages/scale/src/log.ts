import { scaleLog } from 'd3-scale'

import type { NumberValue } from 'd3-scale'

export const createLog = <Range>({
  domain,
  range,
  base = 10,
}: {
  domain: Iterable<NumberValue>
  range: Iterable<Range>
  base?: number
}) => {
  scaleLog<Range>(domain, range).base(base)
}
