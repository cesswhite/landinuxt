import type { ContentCollectionItem } from '@nuxt/content'
import type { Elements } from '../../types/index'

export const CONTENT_COLLECTION = 'content' as const

export type ContentElementItem = {
  id?: string
  path?: string
  title?: string
  description?: string
  body?: unknown
  parent: string
  component: number
  dark?: boolean
  animated?: boolean
  preview?: boolean
  copied?: boolean
  tags?: string[]
  meta?: Record<string, unknown>
}

/** Flatten v3 meta fields so templates can keep using `item.parent`, etc. */
export function normalizeContentItem(item: ContentCollectionItem): ContentElementItem {
  const record = item as ContentCollectionItem & Record<string, unknown>
  const meta = (typeof record.meta === 'object' && record.meta !== null ? record.meta : {}) as Record<string, unknown>

  return {
    ...record,
    ...meta,
    path: String(record.path ?? ''),
    title: record.title !== undefined ? String(record.title) : undefined,
    description: record.description !== undefined ? String(record.description) : undefined,
    parent: String(meta.parent ?? record.parent ?? ''),
    component: Number(meta.component ?? record.component ?? 0),
    dark: Boolean(meta.dark ?? record.dark),
    animated: Boolean(meta.animated ?? record.animated),
    preview: meta.preview !== undefined ? Boolean(meta.preview) : record.preview !== undefined ? Boolean(record.preview) : true,
    copied: Boolean(meta.copied ?? record.copied),
    tags: Array.isArray(meta.tags)
      ? meta.tags.map(String)
      : Array.isArray(record.tags)
        ? record.tags.map(String)
        : [],
  }
}

export function sortContentByComponent(items: ContentElementItem[]) {
  return [...items].sort((a, b) => b.component - a.component)
}

export async function queryElementsByParent(parent: Elements | string) {
  const items = await queryCollection(CONTENT_COLLECTION)
    .where('path', 'LIKE', `/${parent}/%`)
    .all()

  return sortContentByComponent(items.map((item) => normalizeContentItem(item)))
}

export async function queryContentPath(path: string) {
  const item = await queryCollection(CONTENT_COLLECTION).path(path).first()
  return item ? normalizeContentItem(item) : null
}

/** Extract the first fenced ```vue block from Nuxt Content v3 minimark bodies. */
export function extractVueCodeBlock(body: unknown): string {
  if (!body || typeof body !== 'object') {
    return ''
  }

  const value = (body as { value?: unknown }).value
  if (!Array.isArray(value)) {
    return ''
  }

  for (const node of value) {
  if (!node || typeof node !== 'object') {
      continue
    }

    const element = node as { tag?: string, props?: { language?: string, code?: string } }
    if (element.tag === 'pre' && element.props?.language === 'vue' && typeof element.props.code === 'string') {
      return element.props.code
    }
  }

  return ''
}
