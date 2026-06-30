import type { H3Event } from 'h3'
import type { Elements } from '../../types/index'
import {
  CONTENT_COLLECTION,
  normalizeContentItem,
  sortContentByComponent,
  type ContentElementItem,
} from '../../app/utils/contentElements'

export async function queryElementsByParentOnServer(event: H3Event, parent: Elements | string) {
  const items = await queryCollection(event, CONTENT_COLLECTION)
    .where('path', 'LIKE', `/${parent}/%`)
    .all()

  return sortContentByComponent(items.map((item) => normalizeContentItem(item)))
}

export async function queryContentPathOnServer(event: H3Event, path: string): Promise<ContentElementItem | null> {
  const item = await queryCollection(event, CONTENT_COLLECTION).path(path).first()
  return item ? normalizeContentItem(item) : null
}

export async function queryContentItemByTitleOnServer(
  event: H3Event,
  category: string,
  title: string,
): Promise<ContentElementItem | null> {
  const item = await queryCollection(event, CONTENT_COLLECTION)
    .where('path', 'LIKE', `/${category}/%`)
    .where('title', '=', title)
    .first()

  return item ? normalizeContentItem(item) : null
}
