import { desc, eq } from "drizzle-orm";
import { db } from "../../lib/db";
import { post } from "../../lib/db/schema";

export async function getPostById(id: string) {
	const data = await db.select().from(post).where(eq(post.id, id));
	return data[0];
}

export async function getPosts(userId: string) {
	const posts = await db
		.select()
		.from(post)
		.where(eq(post.userId, userId))
		.orderBy(desc(post.createdAt));
	return posts;
}

export async function createPost(data: {
	title: string;
	content: string;
	userId: string;
}) {
	const newPost = await db.insert(post).values({
		...data,
	});
	return newPost;
}
