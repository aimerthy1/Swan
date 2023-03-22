import type { Attributes, SVGElements } from './types'

/**
 * Why not use `type: keyof SVGElementTagNameMap` directly?
 * @param type
 * @returns
 */
export const createSVGElement = <K extends keyof SVGElementTagNameMap>(
  type: K
) => {
  return document.createElementNS('http://www.w3.org/2000/svg', type)
}

export const mount = (parent: SVGElements, child: SVGElements) => {
  parent.appendChild(child)
}

export const applyAttributes = (
  element: SVGElements,
  attributes: Attributes
) => {
  for (const [key, value] of Object.entries(attributes)) {
    // Turn `strokeWidth` to `stroke-width`
    const kebabCaseKey = key.replace(
      /[A-Z]/g,
      (d) => `-${d.toLocaleLowerCase()}`
    )
    element.setAttribute(kebabCaseKey, `${value}`)
  }
}

export const applyTransform = (element: SVGElements, transform: string) => {
  const currentTransform = element.getAttribute('transform')
    ? `${element.getAttribute('transform')} `
    : ''
  element.setAttribute('transform', `${currentTransform}${transform}`)
}
