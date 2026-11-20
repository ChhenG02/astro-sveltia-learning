import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string().min(1),
		slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
		client: z.string().optional(),
		category: z.string().min(1),
		location: z.string().min(1),
		year: z.string().min(1),
		scope: z.string().min(1),
		summary: z.string().min(1),
		challenge: z.string().optional(),
		solution: z.string().optional(),
		results: z.array(z.string()).default([]),
		services: z.array(z.string()).default([]),
		sortOrder: z.number().int().positive().default(1),
		featured: z.boolean().default(true),
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

const news = defineCollection({
	loader: glob({ base: './src/content/news', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string().min(1),
		slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
		summary: z.string().min(1),
		contentType: z.enum(['Article', 'Video']).default('Article'),
		source: z.string().default('PATech'),
		publishedDate: z.coerce.date(),
		featuredImage: z.string().min(1),
		featuredImageAlt: z.string().default('PATech News & Media'),
		externalUrl: z.string().optional(),
		embedUrl: z.string().optional(),
		linkLabel: z.string().optional(),
		topics: z.array(z.string()).default([]),
		featured: z.boolean().default(true),
		draft: z.boolean().default(false),
	}),
});

const services = defineCollection({
	loader: glob({ base: './src/content/services', pattern: '**/*.md' }),
	schema: z.object({
		number: z.string().regex(/^\d{2}$/),
		title: z.string().min(1),
		shortTitle: z.string().min(1),
		slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
		summary: z.string().min(1),
		coverImage: z.string().min(1),
		coverImageAlt: z.string().min(1),
		highlights: z.array(z.string()).default([]),
		benefits: z
			.array(
				z.object({
					title: z.string().min(1),
					description: z.string().min(1),
				}),
			)
			.default([]),
		workflow: z
			.array(
				z.object({
					step: z.string().min(1),
					title: z.string().min(1),
					description: z.string().min(1),
				}),
			)
			.default([]),
		solutions: z
			.array(
				z.object({
					title: z.string().min(1),
					category: z.string().optional(),
					summary: z.string().min(1),
					problem: z.string().optional(),
					applications: z.string().optional(),
					benefits: z.string().optional(),
					specs: z.array(z.string()).optional(),
					image: z.string().optional(),
				}),
			)
			.default([]),
		featured: z.boolean().default(true),
		draft: z.boolean().default(false),
	}),
});

const testimonials = defineCollection({
	loader: glob({ base: './src/content/testimonials', pattern: '**/*.md' }),
	schema: z.object({
		name: z.string().min(1),
		slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
		role: z.string().min(1),
		projectType: z.string().min(1),
		quote: z.string().min(1),
		rating: z.number().int().min(1).max(5).default(5),
		avatar: z.string().min(1),
		highlight: z.boolean().default(false),
		sortOrder: z.number().int().positive().default(1),
	}),
});

export const collections = { projects, news, services, testimonials };
