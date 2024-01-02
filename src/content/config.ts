import { defineCollection, getCollection, z } from "astro:content";

const writing = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    hasMath: z.boolean().optional(),
    summary: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    published: z.boolean().optional(),
  }),
});

export const collections = {
  writing: writing,
};

export const getPublishedWriting = () =>
  getCollection(
    "writing",
    ({ data }) => data.published && data.publishedAt != null,
  );
