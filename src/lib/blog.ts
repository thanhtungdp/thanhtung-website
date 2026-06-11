import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, isLocale, localizePath, type Locale } from '../i18n';

export type BlogPost = CollectionEntry<'blog'>;

export function getBlogLocale(post: BlogPost): Locale {
	const [locale] = post.id.split('/');
	return isLocale(locale) ? locale : defaultLocale;
}

export function getBlogSlug(post: BlogPost): string {
	const [locale, ...slugParts] = post.id.split('/');

	if (isLocale(locale)) {
		return slugParts.join('/');
	}

	return post.id;
}

export function getBlogPath(post: BlogPost, locale = getBlogLocale(post)): string {
	return localizePath(`/blog/${getBlogSlug(post)}/`, locale);
}

export async function getBlogPosts(locale: Locale): Promise<BlogPost[]> {
	const posts = await getCollection('blog');

	return posts
		.filter((post) => getBlogLocale(post) === locale)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getBlogStaticPaths(locale: Locale) {
	const posts = await getBlogPosts(locale);

	return posts.map((post) => ({
		params: { slug: getBlogSlug(post) },
		props: post,
	}));
}
