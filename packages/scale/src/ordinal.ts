import { scaleOrdinal } from 'd3-scale'

export const createOrdinal = <Domain extends { toString(): string }, Range>({
  domain,
  range,
}: {
  domain: Iterable<Domain>
  range: Iterable<Range>
}) => {
  return scaleOrdinal<Domain, Range>(domain, range)
}
