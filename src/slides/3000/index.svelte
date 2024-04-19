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
	<div class="grid grid-cols-[auto,auto] grid-rows-[min-content,min-content,min-contentauto] gap-2">
		<Highlight lang="bash" class="col-span-1 text-3xl" code={`pnpm i drizzle-orm @libsql/client`} />
		<Highlight lang="bash" class="text-3xl row-span-1 col-span-1" code={`pnpm i drizzle-kit -D`} />
		<Highlight
			lang="typescript"
			class="text-3xl col-span-1 row-span-3"
			code={`
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

export const client = createClient({ 
	url: 'file:my-db.sql', 
	authToken: '' 
});

export const db = drizzle(client);
`}
		/>
		<Highlight
			lang="typescript"
			class="text-3xl row-span-1"
			code={`
import { 
	sqliteTable,
	text 
} from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
	id: text('id'),
	name: text('name').notNull()
});
`}
		/>
	</div>
</div>
