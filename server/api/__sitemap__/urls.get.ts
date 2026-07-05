import { collectExtraSitemapUrls } from '../../../app/utils/sitemapUrls'

export default defineEventHandler(() => {
  return collectExtraSitemapUrls()
})
