import { Link, createFileRoute } from "@tanstack/react-router";
import ThemeToggle from "~/components/shared/theme-toggle";
import { Button } from "~/components/ui/button";

export const Route = createFileRoute("/")({
	component: Home,
	loader: async ({ context }) => {
		return {
			user: context.user,
			message: "Hello, world!",
		};
	},
});

function Home() {
	const { user } = Route.useLoaderData();
	return (
		<div className="p-4 mx-auto max-w-xl w-full">
			<h2 className="text-2xl font-bold">Home</h2>
			{user ? (
				<div>
					<h3 className="text-lg font-bold">User Info</h3>
					<Button asChild>
						<Link to="/dashboard">To Dashboard</Link>
					</Button>
					<pre>{JSON.stringify(user, null, 2)}</pre>
				</div>
			) : (
				<Button asChild>
					<Link to="/signin">Sign in</Link>
				</Button>
			)}
			<div className="mt-4">
				<ThemeToggle />
			</div>
		</div>
	);
}
