import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
    collections: {
        proyectos: defineCollection({
                type: 'page',
                source: 'proyectos/*.md',
                schema: z.object({
                    title: z.string(),
                    description: z.string(),
                    image: z.string(),
                    github: z.string(),
                    tags: z.array(z.string()),
                    date: z.date(),
                    slug: z.string(),
                })
            }),
            posts: defineCollection({
                type: 'page',
                source: 'posts/*.md',
                schema: z.object({
                    slug: z.string(),
                    title: z.string(),
                    description: z.string(),
                    image: z.string(),
                    date: z.string(),
                    tags: z.array(z.string()),
                }),
            }),
        },
    },
);