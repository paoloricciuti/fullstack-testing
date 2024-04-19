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
			lang="typescript"
			class="text-2xl col-span-1 row-span-1 col-start-1"
			code={`
import { user } from './users';
import { do_migrate } from './migrate'; // [!code ++]

export const schemas = {
	users,
}

export async function reset_db(db) { // [!code ++]
	await db.run(sql\`PRAGMA writable_schema = 1;\`); // [!code ++]
	await db.run(sql\`DELETE FROM sqlite_master;\`); // [!code ++]
	await db.run(sql\`PRAGMA writable_schema = 0;\`); // [!code ++]
	await db.run(sql\`VACUUM;\`); // [!code ++]
	await db.run(sql\`PRAGMA integrity_check;\`); // [!code ++]
	await do_migrate(); // [!code ++]
} // [!code ++]
`}
		/>
		<Highlight
			lang="typescript"
			class="text-2xl row-span-1 col-span-1 col-start-2"
			code={`/* eslint-disable no-empty-pattern */
import { db } from '../src/lib/db';
import { schemas } from '../src/lib/utils'; // [!code --]
import { schemas, reset_db } from '../src/lib/utils'; // [!code ++]
import { test as base } from '@playwright/test';

export const test = base.extend<{ 
	db: typeof db; schemas: typeof schemas 
}>({
	async db({}, use) {
		// init // [!code --]
		await reset_db(db); // [!code ++]
		await use(db);
		// cleanup
	},
	async schemas({}, use) {
		// init
		await use(schemas);
		// cleanup
	}
});
`}
		/>
	</div>
</div>
