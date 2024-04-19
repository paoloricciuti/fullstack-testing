<script lang="ts" context="module">
	import Highlight from '@lib/components/highlight.svelte';
	import Sticky from '@lib/components/sticky.svelte';
	import type { Props } from '@slides/types';

	export const props: Props = {
		animate: true
	};
</script>

<div class="full-size with-title">
	<Sticky as="h1" data-id="title" class="text-slate-950 p-4">End to end testing</Sticky>
	<div class="grid grid-cols-[auto,auto] grid-rows-[min-content,min-content,auto] gap-2">
		<Highlight
			lang="bash"
			class="text-3xl row-span-1 col-span-1 col-start-1"
			code={`pnpm drizzle-kit generate:sqlite`}
		/>
		<Highlight
			lang="bash"
			class="text-3xl row-span-1 col-span-1 col-start-1"
			code={`npx tsm ./migrate.ts`}
		/>
		<Highlight
			lang="typescript"
			class="text-3xl col-span-1 row-span-1 col-start-1"
			code={`
import { 
	migrate
} from 'drizzle-orm/libsql/migrator';

export async function do_migrate() {
	await migrate(db, { 
		migrationsFolder: './drizzle'
	 });
}

await do_migrate();
`}
		/>
		<Highlight
			lang="typescript"
			class="text-3xl col-span-1 row-span-3 col-start-2 row-start-1"
			code={`
import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/schemas',
	out: './drizzle',
	driver: 'libsql',
	dbCredentials: {
		url: 'file:my-db.sql'
	}
} satisfies Config;
`}
		/>
	</div>
</div>
