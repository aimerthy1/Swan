import { createSVGElement, mount } from './utils'

export const createContext = (
  width: number | string,
  height: number | string
) => {
  const svg = createSVGElement('svg')
  svg.setAttribute('width', `${width}`)
  svg.setAttribute('height', `${height}`)
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`)

  const g = createSVGElement('g')
  mount(svg, g)

  return {
    node: svg,
    group: g,
  }
}
