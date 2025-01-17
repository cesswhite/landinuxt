import { parse } from 'node-html-parser';

export default defineEventHandler(async (event) => {
    const { url } = getQuery(event) as { url: string };
    if (!url) {
        return { error: 'No valid URL provided.' };
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            return { error: `Failed to fetch the URL: ${response.statusText}` };
        }
        const html = await response.text();
        const root = parse(html);

        const title = root.querySelector('title')?.text || '';
        const description = root
            .querySelector('meta[name="description"]')
            ?.getAttribute('content') || '';
        const image = root
            .querySelector('meta[property="og:image"]')
            ?.getAttribute('content') || '';
        const favicon = root
            .querySelector('link[rel="icon"]')
            ?.getAttribute('href') || '';

        const hostname = new URL(url).hostname;

        return {
            title,
            description,
            image,
            favicon,
            hostname,
        };
    } catch (error) {
        console.error('Error processing the URL:', error);
        return { error: 'Error processing the provided URL.' };
    }
});
