import { getHighlighter, type BundledTheme, type BundledLanguage } from 'shiki';

const themes: BundledTheme[] = ['github-dark-default'];
const langs: BundledLanguage[] = ['javascript', 'typescript', 'svelte', 'diff', 'bash', 'json'];
const highlighter = await getHighlighter({ themes, langs });

export default highlighter;
