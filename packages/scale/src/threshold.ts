import { scaleThreshold } from 'd3-scale'

export const createThreshold = <Domain extends number | string | Date, Range>({
  domain,
  range,
}: {
  domain: Iterable<Domain>
  range: Iterable<Range>
}) => {
  return scaleThreshold<Domain, Range>(domain, range)
}
