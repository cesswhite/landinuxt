import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { serverQueryContent } from '#content/server'
import type { H3Event } from 'h3'
import { PARENT_TO_FOLDER } from '../../app/utils/elementSources'
import { SITE_URL } from '../../app/utils/siteSeo'
import { buildAgentTxtDocument, type ComponentExportMeta } from '../../app/utils/aiExport'

export async function resolveComponentExport(
  event: H3Event,
  category: string,
  slug: string,
) {
  const item = await serverQueryContent(event)
    .where({ parent: category, title: slug })
    .findOne()

  if (!item) {
    return null
  }

  const folder = PARENT_TO_FOLDER[category]
  const componentNum = Number(item.component)
  if (!folder || !componentNum) {
    return null
  }

  const vuePath = join(
    process.cwd(),
    'app/components/Elements',
    folder,
    `${componentNum}.vue`,
  )

  if (!existsSync(vuePath)) {
    return null
  }

  const code = readFileSync(vuePath, 'utf-8')
  const config = useRuntimeConfig(event)

  return {
    category,
    slug,
    title: String(item.title ?? slug),
    description: String(item.description ?? ''),
    code,
    siteUrl: config.public.siteUrl || SITE_URL,
  } satisfies ComponentExportMeta
}
