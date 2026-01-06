// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string(),
    summary: z.string(),
  }),
});

// The key here must match your folder name 'blog'
export const collections = {
  'blog': blog,
};