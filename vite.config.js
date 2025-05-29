import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: 'src/main.js',
			name: 'MyWidget',
			fileName: 'my-widget',
			formats: ['iife'], // embeddable via <script>
		},
	},
	define: {
		'process.env': {}, // <== ВАЖНО: предотвратить ошибку в браузере
	},
	base: '/survey/',
});
