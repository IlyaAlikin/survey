import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
	plugins: [vue()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				widget: resolve(__dirname, 'src/widget.js'),
			},
			output: {
				entryFileNames: '[name].js',
			},
		},
		outDir: 'dist',
		emptyOutDir: true,
		target: 'es2015',
	},
	base: '/survey/',
});
