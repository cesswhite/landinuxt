import type { ElementCatalogItem, Elements } from '../../types/index'
import { PARENT_TO_FOLDER } from './elementSources'

export function resolveElementPreviewComponent(
  parent: Elements,
  component: number,
) {
  const folder = PARENT_TO_FOLDER[parent]
  if (!folder || !component) {
    return null
  }

  return resolveComponent(`LazyElements${folder}${component}`)
}

export function elementPreviewScaleClass(
  item: Pick<ElementCatalogItem, 'parent' | 'title'>,
) {
  if (item.parent === 'headers') {
    return item.title === 'agency' ? 'scale-[0.36]' : 'scale-[0.4]'
  }

  if (item.parent === 'hero') {
    return 'scale-[0.24]'
  }

  if (item.parent === 'footers') {
    return 'scale-[0.34]'
  }

  if (item.parent === 'features') {
    return 'scale-[0.3]'
  }

  if (item.parent === 'cta') {
    return 'scale-[0.26]'
  }

  if (item.parent === 'testimonials' || item.parent === 'gallery') {
    return 'scale-[0.18]'
  }

  return 'scale-[0.34]'
}

export function elementPreviewAlignClass(parent: Elements) {
  if (parent === 'footers') {
    return 'items-end'
  }

  if (parent === 'headers' || parent === 'cta') {
    return 'items-center'
  }

  return 'items-start'
}
