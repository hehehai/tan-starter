import {
	Link,
	Outlet,
	createFileRoute,
	redirect,
	useNavigate,
} from "@tanstack/react-router";
import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth/auth.client";

export const Route = createFileRoute("/(www)/post")({
	beforeLoad: async ({ context }) => {
		if (!context.user) {
			throw redirect({
				to: "/signin",
			});
		}
	},
	loader: async ({ context }) => {
		if (!context.user) {
			throw redirect({
				to: "/signin",
			});
		}

		return {
			user: context.user,
		};
	},
	component: RouteComponent,
});

function RouteComponent() {
	const navigate = useNavigate();
	const { user } = Route.useLoaderData();

	return (
		<div className="mx-auto max-w-xl w-full p-4">
			<div className="w-full flex justify-between items-center py-2">
				<div className="flex items-center gap-4">
					<Link to="/" className="underline">
						Home
					</Link>
					<Link to="/post" className="underline">
						Post
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<p>{user.email}</p>
					<Button
						variant="outline"
						onClick={async () =>
							authClient.signOut({
								fetchOptions: {
									onSuccess: () => {
										navigate({ to: "/" });
									},
								},
							})
						}
					>
						Sign out
					</Button>
				</div>
			</div>
			<Outlet />
		</div>
	);
}
