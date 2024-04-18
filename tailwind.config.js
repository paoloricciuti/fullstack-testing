import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		plugin(({ addComponents, theme }) => {
			addComponents({
				'.full-size': {
					width: 'var(--width)',
					height: 'var(--height)'
				},
				'.with-title': {
					display: 'grid',
					gridTemplateRows: 'min-content 1fr',
					gap: theme('spacing.16')
				}
			});
		})
	]
};

export default config;
