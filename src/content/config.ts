import { z, defineCollection } from "astro:content";
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

const charlaSchema = z.object({
    title: z.string(),
    description: z.string(),
    badge: z.string().optional(),
    date: z.coerce.date(),
    heroImage: z.string().optional(),
    link: z.string().optional(),
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type charlaSchema = z.infer<typeof charlaSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const charlaCollection = defineCollection({ schema: charlaSchema });

export const collections = {
    'blog': blogCollection,
    'charla': charlaCollection
}