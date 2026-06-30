import { collectExtraSitemapUrls } from '../../../app/utils/sitemapUrls'

export default defineEventHandler(async (event) => {
  return collectExtraSitemapUrls(event)
})
