import { applyAttributes, createSVGElement, mount } from './utils'

import type { Attributes, Context } from './types'

// @TODO: use specific type instead of `Attributes`, for example: user must provide width in rect shape

export const shape = <K extends keyof SVGElementTagNameMap>(
  type: K,
  context: Context,
  attributes: Attributes
) => {
  const { group } = context

  const el = createSVGElement(type)
  applyAttributes(el, attributes)

  mount(group, el)

  return el
}

export const line = (context: Context, attributes: Attributes) => {
  return shape('line', context, attributes)
}

/**
 * Turn `<rect width="-60" height="-60" x="100" y="100" />`
 * To `<rect width="60" height="60" x="40" y="40" />`
 * @param context
 * @param attributes
 * @returns
 */
export const rect = (context: Context, attributes: Attributes) => {
  const width = +attributes.width
  const height = +attributes.height
  const x = +attributes.x
  const y = +attributes.y

  return shape('rect', context, {
    ...attributes,
    width: Math.abs(width),
    height: Math.abs(height),
    x: width > 0 ? x : x + width,
    y: height > 0 ? y : y + height,
  })
}

export const circle = (context: Context, attributes: Attributes) => {
  return shape('circle', context, attributes)
}

/**
 * Turn `<text text='content' />`
 * To `<text>content</text>`
 * @param context
 * @param attributes
 * @returns
 */
export const text = (context: Context, attributes: Attributes) => {
  const { text, ...styles } = attributes
  const svgTextElement = shape('text', context, styles)
  svgTextElement.textContent = `${text}`
  return svgTextElement
}

/**
 * Turn
 * [
 *   ['M', 10, 10],
 *   ['L', 100, 100],
 *   ['L', 100, 10],
 *   ['Z'],
 * ];
 * To
 * 'M 10 10 L 100 100 L 100 10 Z'
 * @param context
 * @param attributes
 * @returns
 */
export const path = (
  context: Context,
  attributes: Attributes & { d: Array<Array<string | number>> }
) => {
  const { d } = attributes
  return shape('path', context, { ...attributes, d: d.flat().join(' ') })
}
