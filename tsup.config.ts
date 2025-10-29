import { defineConfig } from 'tsup';
import vue from 'unplugin-vue/esbuild'; 

export default defineConfig({
	entry: ['src/index.ts'],
	format: ['esm', 'cjs'],
	dts: true,
	clean: true,
	target: 'es2020',
	sourcemap: true,
	esbuildPlugins: [vue()],
	external: ['vue'],
});
