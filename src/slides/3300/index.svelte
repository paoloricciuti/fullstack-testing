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
	<Highlight
		lang="typescript"
		class="text-3xl col-span-full row-start-2"
		code={`
import { expect, test } from '@playwright/test'; // [!code --]
import { expect } from '@playwright/test'; // [!code ++]
import { test } from './fixtures'; // [!code ++]

test('index page has expected h1', async ({ page }) => { // [!code --]
test('index page has expected h1', async ({ page, db, schemas }) => { // [!code ++]
	await db.insert(schemas.users).values([{ name: 'Paolo' }]); // [!code ++]
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Svelte Summit!' })).toBeVisible();
});
`}
	/>
</div>
