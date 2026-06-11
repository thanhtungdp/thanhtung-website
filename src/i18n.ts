export const languages = {
	vi: 'Tiếng Việt',
	en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const locales = Object.keys(languages) as Locale[];
export const defaultLocale: Locale = 'vi';

const ui = {
	vi: {
		siteDescription: 'Ghi chép về quản trị, vận hành và chuyển đổi số cho doanh nghiệp Việt Nam.',
		nav: {
			home: 'Trang chủ',
			blog: 'Bài viết',
			about: 'Giới thiệu',
		},
		home: {
			eyebrow: 'Strategy, systems, execution',
			title: 'Góc nhìn gọn gàng cho doanh nghiệp tăng trưởng',
			intro:
				'Tôi viết về quản trị, vận hành và chuyển đổi số từ những dự án thật với doanh nghiệp Việt Nam.',
			primaryCta: 'Đọc bài mới',
			secondaryCta: 'Về tôi',
			sections: {
				thinking: 'Chủ đề chính',
				thinkingText: 'Những ghi chép giúp lãnh đạo biến ý tưởng thành hệ thống vận hành rõ ràng hơn.',
				latest: 'Bài viết mới',
				latestText: 'Các case study, quan sát và framework được viết ngắn gọn để dễ áp dụng.',
			},
			items: [
				'Chiến lược và OKRs',
				'Tối ưu vận hành',
				'Chuyển đổi số thực chiến',
				'Văn hoá quản trị minh bạch',
			],
		},
		about: {
			title: 'Giới thiệu',
			description: 'Một trang giới thiệu về Thanh Tung và các chủ đề đang theo đuổi.',
			updatedPrefix: 'Cập nhật lần cuối vào',
		},
		blog: {
			title: 'Bài viết',
			description: 'Các ghi chép mới nhất về quản trị, vận hành và chuyển đổi số.',
			updatedPrefix: 'Cập nhật lần cuối vào',
			readMore: 'Đọc bài',
		},
		footer: 'Ghi chép độc lập về quản trị và chuyển đổi số.',
	},
	en: {
		siteDescription: 'Notes on management, operations, and digital transformation for growing teams.',
		nav: {
			home: 'Home',
			blog: 'Writing',
			about: 'About',
		},
		home: {
			eyebrow: 'Strategy, systems, execution',
			title: 'Clear thinking for companies that are ready to grow',
			intro:
				'I write about management, operations, and digital transformation through real projects with Vietnamese businesses.',
			primaryCta: 'Read latest',
			secondaryCta: 'About me',
			sections: {
				thinking: 'Core themes',
				thinkingText: 'Practical notes that help leaders turn ideas into clearer operating systems.',
				latest: 'Latest writing',
				latestText: 'Case studies, observations, and frameworks written to be easy to apply.',
			},
			items: [
				'Strategy and OKRs',
				'Operating rhythm',
				'Digital transformation',
				'Transparent management culture',
			],
		},
		about: {
			title: 'About',
			description: 'A short introduction to Thanh Tung and the themes behind this site.',
			updatedPrefix: 'Last updated on',
		},
		blog: {
			title: 'Writing',
			description: 'Latest notes on management, operations, and digital transformation.',
			updatedPrefix: 'Last updated on',
			readMore: 'Read article',
		},
		footer: 'Independent notes on management and digital transformation.',
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
