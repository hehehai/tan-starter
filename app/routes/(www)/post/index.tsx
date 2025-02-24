import { Link, createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { actionCreatePost, actionGetPosts } from "~/server/actions/post";

export const Route = createFileRoute("/(www)/post/")({
	loader: async () => {
		const posts = await actionGetPosts();
		return posts;
	},
	component: Posts,
});

function Posts() {
	const posts = Route.useLoaderData();

	return (
		<div className="py-4">
			<h1 className="text-2xl font-bold">
				Posts <span className="text-muted-foreground">{posts.length}</span>
			</h1>
			<form className="w-full" action={actionCreatePost.url} method="post">
				<Label htmlFor="title">Title</Label>
				<Input type="text" name="title" />
				<Label htmlFor="content">Content</Label>
				<Input type="text" name="content" />
				<Button type="submit" className="mt-2">
					Create
				</Button>
			</form>
			<div className="flex flex-col gap-4 mt-8">
				{posts.map((post) => (
					<div
						key={post.id}
						className="border border-border rounded-md p-2 flex justify-between items-center"
					>
						<Link to="/post/$id" params={{ id: post.id }} className="underline">
							{post.title}
						</Link>
						<span className="text-muted-foreground">
							{post.createdAt.toLocaleDateString()}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
