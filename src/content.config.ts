import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in locale folders such as `src/content/blog/vi/`.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const playbook = defineCollection({
	loader: glob({ base: './src/content/playbook', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			vol: z.string().optional(),
			pages: z.string().optional(),
			publishedDate: z.coerce.date(),
			coverImage: z.optional(image()),
			pdfFile: z.string(),
			toc: z.array(
				z.object({
					id: z.string(),
					title: z.string(),
					description: z.string().optional(),
				}),
			).optional(),
			summary: z.array(z.string()).optional(),
			keyTakeaway: z.string().optional(),
		}),
});

export const collections = { blog, playbook };
