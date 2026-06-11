import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { defaultLocale } from '../i18n';
import { getBlogPath, getBlogPosts } from '../lib/blog';

export async function GET(context) {
	const posts = await getBlogPosts(defaultLocale);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: getBlogPath(post, defaultLocale),
		})),
	});
}
