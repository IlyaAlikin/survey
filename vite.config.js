import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig(({ command }) => {
	const isWidgetBuild = process.env.BUILD_WIDGET === 'true';

	return {
		plugins: [vue()],
		build: {
			lib: isWidgetBuild
				? {
						entry: resolve(__dirname, 'src/widget.js'),
						name: 'SurveyWidget',
						fileName: () => 'widget.js',
						formats: ['iife'], // Важно: IIFE для обычного <script>
				  }
				: undefined,
			rollupOptions: {
				input: !isWidgetBuild
					? resolve(__dirname, 'index.html')
					: undefined,
			},
			outDir: 'dist',
			emptyOutDir: true,
		},
		base: '/survey/',
	};
});
