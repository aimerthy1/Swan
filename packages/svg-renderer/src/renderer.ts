import { createContext } from './context'
import { circle, line, path, rect, text } from './shapes'
import { restore, rotate, save, scale, translate } from './transform'
import type { Attributes, PathAttributes } from './types'

export const createRenderer = (width: string | number, height: string | number) => {
  const context = createContext(width, height)
  return {
    node: () => context.node,
    group: () => context.group,

    line: (attributes: Attributes) => line(context, attributes),
    circle: (attributes: Attributes) => circle(context, attributes),
    text: (attributes: Attributes) => text(context, attributes),
    rect: (attributes: Attributes) => rect(context, attributes),
    path: (attributes: PathAttributes) => path(context, attributes),

    translate: (tx: string | number, ty: string | number) => translate(context, tx, ty),
    scale: (sx: string | number, sy: string | number) => scale(context, sx, sy),
    rotate: (theta: string | number) => rotate(context, theta),

    save: () => save(context),
    restore: () => restore(context),
  }
}
