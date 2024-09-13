import { z, defineCollection } from "astro:content";

const charlaSchema = z.object({
    title: z.string(),
    description: z.string(),
    badge: z.string().optional(),
    date: z.coerce.date(),
    heroImage: z.string().optional(),
    link: z.string().optional(),
});

export type CharlaSchema = z.infer<typeof charlaSchema>;

const charlaCollection = defineCollection({ schema: charlaSchema });

export const collections = {
    'charla': charlaCollection,
};
