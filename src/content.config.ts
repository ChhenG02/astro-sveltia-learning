import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string().min(1),
		slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
		description: z.string().min(1),
		category: z.string().min(1),
		location: z.string().min(1),
		year: z.string().min(1),
		scope: z.string().min(1),
		publishedDate: z.coerce.date().optional(),
		sortOrder: z.number().int().positive(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
		coverImage: z.string().min(1),
		coverImageAlt: z.string().min(1),
		gallery: z
			.array(
				z.object({
					src: z.string().min(1),
					alt: z.string().min(1),
				}),
			)
			.default([]),
	}),
});

const services = defineCollection({
	loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
	schema: z.object({
		number: z.string().regex(/^\d{2}$/),
		title: z.string().min(1),
		slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
		summary: z.string().min(1),
		icon: z.enum(['automation', 'electrical', 'integration', 'delivery', 'modernization', 'technology']),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
	}),
});

const partners = defineCollection({
	loader: glob({ base: './src/content/partners', pattern: '**/*.md' }),
	schema: z.object({
		name: z.string().min(1),
		slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
		sortOrder: z.number().int().positive(),
		logo: z.string().optional(),
		website: z.string().url().optional(),
		description: z.string().optional(),
	}),
});

const news = defineCollection({
	loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string().min(1),
		slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
		description: z.string().min(1),
		coverImage: z.string().optional(),
		publishedDate: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { projects, services, partners, news };
