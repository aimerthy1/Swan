import { applyTransform, createSVGElement, mount } from './utils'

import type { Context, Transform } from './types'

const transform = (
  type: Transform,
  context: Context,
  ...params: Array<string | number>
) => {
  const { group } = context
  applyTransform(group, `${type}(${params.join(', ')})`)
}

export const translate = (
  context: Context,
  tx: string | number,
  ty: string | number
) => {
  transform('translate', context, tx, ty)
}

export const scale = (
  context: Context,
  sx: string | number,
  sy: string | number
) => {
  transform('scale', context, sx, sy)
}

export const rotate = (context: Context, theta: string | number) => {
  transform('rotate', context, theta)
}

export const save = (context: Context) => {
  const { group } = context
  const g = createSVGElement('g')
  mount(group, g)
  context.group = g
}

export const restore = (context: Context) => {
  const { group } = context
  const { parentNode: parent } = group

  if (!parent || parent.nodeName !== 'g')
    throw new Error('Cannot restore, no parent or parent is not a group')

  context.group = parent as SVGGElement
}
