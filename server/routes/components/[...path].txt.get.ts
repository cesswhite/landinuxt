import { buildAgentTxtDocument } from '../../../app/utils/aiExport'
import { resolveComponentExport } from '../../../server/utils/componentAgent'

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

  const meta = await resolveComponentExport(event, category, slug)

  if (!meta || !meta.code.trim()) {
    throw createError({ statusCode: 404, statusMessage: 'Component not found' })
  }

  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400')

  return buildAgentTxtDocument(meta)
})
