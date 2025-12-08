import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Galaxy Team'),
    heroImage: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const partners = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    focus: z.string(),
    website: z.string().url(),
    logo: z.string(),
  }),
});

const brands = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    website: z.string().url().optional(),
    featuredColor: z.string().default('#0f1e38'),
    logo: z.string().optional(),
    products: z.array(
      z.object({
        name: z.string(),
        category: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const collections = { blog, partners, brands };
