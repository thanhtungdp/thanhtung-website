export const languages = {
	vi: 'Tiếng Việt',
	en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const locales = Object.keys(languages) as Locale[];
export const defaultLocale: Locale = 'vi';

const ui = {
	vi: {
		siteDescription: 'Chào mừng bạn đến với website của tôi!',
		nav: {
			home: 'Trang chủ',
			blog: 'Blog',
			about: 'Giới thiệu',
		},
		home: {
			title: 'Xin chào, Astro!',
			intro:
				'Đây là starter blog Astro đã được cấu hình song ngữ. Route tiếng Việt giữ nguyên ở gốc website, còn tiếng Anh nằm trong tiền tố /en.',
			integrations:
				'Bạn có thể tiếp tục tuỳ biến cấu hình Astro, thêm integration, hoặc mở rộng nội dung riêng cho từng ngôn ngữ.',
			getStarted: 'Một vài điểm đã được chuẩn bị:',
			items: [
				'Khai báo vi và en trong astro.config.mjs',
				'Header tự đổi link theo ngôn ngữ hiện tại',
				'Route tiếng Anh có sẵn tại /en',
				'Ngày tháng định dạng theo locale',
				'Metadata và thẻ alternate được sinh theo locale',
			],
			docsPrefix: 'Tài liệu tham khảo:',
			docsLink: 'Astro Internationalization',
		},
		about: {
			title: 'Giới thiệu',
			description: 'Một trang giới thiệu mẫu cho website song ngữ.',
			updatedPrefix: 'Cập nhật lần cuối vào',
		},
		blog: {
			updatedPrefix: 'Cập nhật lần cuối vào',
		},
		footer: 'Bản quyền đã được bảo lưu.',
	},
	en: {
		siteDescription: 'Welcome to my website!',
		nav: {
			home: 'Home',
			blog: 'Blog',
			about: 'About',
		},
		home: {
			title: 'Hello, Astro!',
			intro:
				'This Astro blog starter is now configured for two languages. Vietnamese keeps the root routes, while English lives under the /en prefix.',
			integrations:
				'You can keep customizing Astro, add integrations, or split content per locale as the site grows.',
			getStarted: 'A few things are already in place:',
			items: [
				'vi and en are declared in astro.config.mjs',
				'The header keeps links in the active language',
				'English routes are available under /en',
				'Dates format with the current locale',
				'Metadata and alternate links are generated per locale',
			],
			docsPrefix: 'Reference:',
			docsLink: 'Astro Internationalization',
		},
		about: {
			title: 'About',
			description: 'A sample about page for the bilingual website.',
			updatedPrefix: 'Last updated on',
		},
		blog: {
			updatedPrefix: 'Last updated on',
		},
		footer: 'All rights reserved.',
	},
} as const;

export function getLocaleFromUrl(url: URL): Locale {
	const [, locale] = url.pathname.split('/');
	return isLocale(locale) ? locale : defaultLocale;
}

export function isLocale(locale: string | undefined): locale is Locale {
	return Boolean(locale && locales.includes(locale as Locale));
}

export function localizePath(path: string, locale: Locale): string {
	const normalizedPath = path.startsWith('/') ? path : `/${path}`;

	if (locale === defaultLocale) {
		return normalizedPath;
	}

	return `/${locale}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function stripLocale(pathname: string): string {
	const segments = pathname.split('/').filter(Boolean);

	if (isLocale(segments[0])) {
		segments.shift();
	}

	return `/${segments.join('/')}`;
}

export function getAlternateLinks(pathname: string) {
	const pathWithoutLocale = stripLocale(pathname);

	return locales.map((locale) => ({
		locale,
		label: languages[locale],
		path: localizePath(pathWithoutLocale, locale),
	}));
}

export function getTranslations(locale: Locale) {
	return ui[locale];
}
