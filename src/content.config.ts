import { defineCollection, z } from 'astro:content';

const highlights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const useCases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const modules = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    duration: z.string(),
    level: z.enum(['Foundational', 'Intermediate', 'Advanced']),
    order: z.number(),
  }),
});

export const collections = { highlights, useCases, modules };
