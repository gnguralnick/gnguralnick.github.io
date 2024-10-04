import { defineCollection, z } from "astro:content";

const postCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dateFormatted: z.string(),
  }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    urls: z.array(z.object({
      url: z.string(),
      label: z.string(),
    }))
  })
});

export const collections = {
  post: postCollection,
  project: projectCollection,
};
