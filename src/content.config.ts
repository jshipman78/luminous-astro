import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// City/Service Area collection
const cities = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cities" }),
  schema: z.object({
    title: z.string(),
    city: z.string(),
    state: z.string(),
    slug: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroHeadline: z.string(),
    heroDescription: z.string(),
    isHomeBase: z.boolean().optional().default(false),
    nearbyAreas: z.array(z.string()).optional(),
    localLandmarks: z.array(z.string()).optional(),
    publishDate: z.date().optional(),
    updatedDate: z.date().optional(),
  }),
});

// Service pages collection
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    heroHeadline: z.string(),
    heroDescription: z.string(),
    icon: z.enum(['camera', 'users', 'monitor', 'video', 'home', 'plane', 'cube']).optional(),
    featured: z.boolean().optional().default(false),
    order: z.number().optional(),
    publishDate: z.date().optional(),
    updatedDate: z.date().optional(),
  }),
});

// Portfolio collection
const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.enum(['real-estate', 'portrait', 'wedding', 'event', 'aerial', 'commercial']),
    description: z.string(),
    client: z.string().optional(),
    location: z.string().optional(),
    date: z.date(),
    featured: z.boolean().optional().default(false),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  cities,
  services,
  portfolio,
};
