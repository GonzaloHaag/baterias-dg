/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
			  'rojo-dg':'#FF2929',
			  'negro-dg':'#323232',
			  'azul-dg':'#0055D4'
			}
		  },
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
