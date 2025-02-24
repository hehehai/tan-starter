import { createServerFn } from "@tanstack/start";
import { z } from "zod";
import { authMiddleware } from "~/lib/middleware/auth-guard";
import { createPost, getPostById, getPosts } from "../function/post";
import { postCreateSchema } from "../validations/post";

// 查询帖子信息
export const actionGetPostById = createServerFn({ method: "GET" })
	.validator(z.object({ id: z.string() }))
	.handler(async ({ data }) => {
		return getPostById(data.id);
	});

// 查询帖子列表
export const actionGetPosts = createServerFn({ method: "GET" })
	.middleware([authMiddleware])
	.handler(async ({ context }) => {
		return getPosts(context.user.id);
	});

// 创建帖子
export const actionCreatePost = createServerFn({ method: "POST" })
	.middleware([authMiddleware])
	.validator((formData: FormData) => {
		if (!(formData instanceof FormData)) {
			throw new Error("Invalid form data");
		}

		const data = postCreateSchema.parse(Object.fromEntries(formData));

		return data;
	})
	.handler(async ({ data, context }) => {
		await createPost({
			title: data.title,
			content: data.content,
			userId: context.user.id,
		});

		return new Response("ok", { status: 301, headers: { Location: "/post" } });
	});
