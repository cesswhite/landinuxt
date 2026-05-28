import { serverQueryContent } from '#content/server'
import { buildAgentTxtDocument } from '../../../app/utils/aiExport'
import { PARENT_TO_FOLDER } from '../../../app/utils/elementSources'
import { SITE_URL } from '../../../app/utils/siteSeo'

export default defineEventHandler(async (event) => {
  const { pathname } = getRequestURL(event)
  const match = pathname.match(/^\/components\/([^/]+)\/([^/]+)\.txt$/)

  if (!match) {
    throw createError({ statusCode: 404, statusMessage: 'Component not found' })
  }

  const category = match[1]
  const slug = match[2]

  if (!category || !slug) {
    throw createError({ statusCode: 404, statusMessage: 'Component not found' })
  }

  const item = await serverQueryContent(event, category)
    .where({ title: slug })
    .findOne()

  if (!item) {
    throw createError({ statusCode: 404, statusMessage: 'Component not found' })
  }

  const folder = PARENT_TO_FOLDER[category]
  const componentNum = Number(item.component)
  if (!folder || !componentNum) {
    throw createError({ statusCode: 404, statusMessage: 'Component not found' })
  }

  const raw = await useStorage('assets:server').getItem(
    `elements/${folder}/${componentNum}.vue`,
  )

  const code =
    typeof raw === 'string'
      ? raw
      : raw instanceof Uint8Array
        ? new TextDecoder().decode(raw)
        : null

  if (!code?.trim()) {
    throw createError({ statusCode: 404, statusMessage: 'Component not found' })
  }

  const config = useRuntimeConfig(event)

  const meta = {
    category,
    slug,
    title: String(item.title ?? slug),
    description: String(item.description ?? ''),
    code,
    siteUrl: config.public.siteUrl || SITE_URL,
  }

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400')

  return buildAgentTxtDocument(meta)
})
