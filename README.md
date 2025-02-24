<p align="center">
  Tanstack Start template
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a>
</p>
<br/>

## Features

- [Tanstack Start](https://tanstack.com/start/latest)
  - Full-stack React framework
  - SSR, Streaming, Server Functions, API Routes, bundling and more powered by TanStack Router, Nitro, and Vite. Ready to deploy to your favorite hosting provider.
  - Deploy to any hosting provider that supports Node.js [Netlify, Vercel, Cloudflare, Bun, Deno etc.]
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - Component primitives from [Radix UI](https://radix-ui.com) for accessibility and flexibility
- Data Persistence
  - [Postgres] You can also use postgres from any service provider or local
- [Better Auth](https://www.better-auth.com/)
  - The most comprehensive authentication framework for TypeScript.
  - Whether you need 2FA, multi-tenancy, multi-session support, or even enterprise features like SSO, it lets you focus on building your application instead of reinventing the wheel.
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [Drizzle ORM](https://orm.drizzle.team/) + PostgreSQL

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run Tanstack Start Gemini Chatbot.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your various Google Cloud and authentication provider accounts.

2. Install dependencies:

   ```bash
   pnpm install # npm install
   ```

3. Create a `.env` file based on [`.env.example`](./.env.example).

4. Push the schema to your database with drizzle-kit:

   ```bash
   pnpm db push # npm run db push
   ```

   <https://orm.drizzle.team/docs/migrations>

5. Run the development server:

   ```bash
   pnpm dev # npm run dev
   ```

   The development server should be now running at [http://localhost:3000](http://localhost:3000).
