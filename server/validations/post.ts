import { z } from "zod";

export const postCreateSchema = z.object({
	title: z.string(),
	content: z.string(),
});

export type PostCreateSchema = z.infer<typeof postCreateSchema>;
