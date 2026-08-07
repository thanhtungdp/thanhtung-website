import { getCollection, type CollectionEntry } from 'astro:content';
import { defaultLocale, isLocale, localizePath, type Locale } from '../i18n';

export type Playbook = CollectionEntry<'playbook'>;

export function getPlaybookLocale(pb: Playbook): Locale {
	const [locale] = pb.id.split('/');
	return isLocale(locale) ? locale : defaultLocale;
}

export function getPlaybookSlug(pb: Playbook): string {
	const [locale, ...slugParts] = pb.id.split('/');
	if (isLocale(locale)) {
		return slugParts.join('/');
	}
	return pb.id;
}

export function getPlaybookPath(pb: Playbook, locale = getPlaybookLocale(pb)): string {
	return localizePath(`/playbooks/${getPlaybookSlug(pb)}/`, locale);
}

export async function getPlaybooks(locale: Locale): Promise<Playbook[]> {
	const all = await getCollection('playbook');
	return all
		.filter((pb) => getPlaybookLocale(pb) === locale)
		.sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
}

export async function getPlaybookBySlug(slug: string, locale: Locale): Promise<Playbook | undefined> {
	const all = await getPlaybooks(locale);
	return all.find((pb) => getPlaybookSlug(pb) === slug);
}

export async function getPlaybookStaticPaths(locale: Locale) {
	const items = await getPlaybooks(locale);
	return items.map((pb) => ({
		params: { slug: getPlaybookSlug(pb) },
		props: { playbook: pb, locale },
	}));
}