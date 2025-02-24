import { createFileRoute, notFound } from "@tanstack/react-router";
import { actionGetPostById } from "~/server/actions/post";

export const Route = createFileRoute("/(www)/post/$id")({
	loader: async ({ params }) => {
		const post = await actionGetPostById({
			data: {
				id: params.id,
			},
		});

		if (!post) {
			throw notFound();
		}

		return post;
	},
	head: (ctx) => {
		return {
			meta: [{ title: ctx.loaderData.title }],
		};
	},
	component: RouteComponent,
});

function RouteComponent() {
	const post = Route.useLoaderData();

	return (
		<div className="py-4">
			<h2 className="text-2xl font-bold">{post.title}</h2>
			<p className="text-muted-foreground">
				{post.createdAt.toLocaleDateString()}
			</p>
			<p>{post.content}</p>
		</div>
	);
}
