import type { ImageMetadata } from 'astro';
import type { Locale } from '../../../i18n';
import type { BlogPost } from '../../../lib/blog';

export type ProjectAchievement = {
	value: number;
	label: string;
	prefix?: string;
	suffix?: string;
	decimalPlaces?: number;
};

export type ProjectLogo = {
	name: string;
	image: ImageMetadata;
};

export type ProjectBentoFeature = {
	title: string;
	description: string;
	outcome: string;
	image?: ImageMetadata;
	accent: 'orange' | 'teal' | 'blue' | 'neutral';
	size?: 'wide' | 'tall' | 'default';
};

export type ProjectMapMarker = {
	label: string;
	lat: number;
	lng: number;
	detail: string;
	pulse?: boolean;
};

export type ProjectGalleryItem = {
	title: string;
	description?: string;
	image: ImageMetadata;
};

export type RelatedProjectPost = {
	post: BlogPost;
	path: string;
};

export type AchievementFirstProject = {
	locale: Locale;
	seo: {
		title: string;
		description: string;
		image: ImageMetadata;
	};
	hero: {
		backLabel: string;
		backHref: string;
		role: string;
		title: string;
		lead: string;
		primaryCta: string;
		primaryHref: string;
		secondaryCta: string;
		secondaryHref: string;
		image: ImageMetadata;
		imageAlt: string;
		proof: string[];
	};
	achievements: ProjectAchievement[];
	logos: ProjectLogo[];
	bentoHeading: {
		title: string;
		lead: string;
	};
	bentoFeatures: ProjectBentoFeature[];
	map: {
		title: string;
		lead: string;
		markers: ProjectMapMarker[];
	};
	gallery: {
		title: string;
		lead: string;
		items: ProjectGalleryItem[];
	};
	relatedPosts: {
		title: string;
		lead: string;
		ctaLabel: string;
		items: RelatedProjectPost[];
	};
	closing: {
		title: string;
		lead: string;
		cta: string;
		href: string;
	};
};
