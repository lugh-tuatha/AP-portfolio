/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				bkg: "rgb(var(--color-bkg), <alpha-value>)",
				txt: "rgb(var(--color-txt), <alpha-value>)",
				btn: "rgb(var(--color-btn), <alpha-value>)",

				black: {
					200: "rgb(22 27 34 / <alpha-value>)",
					400: "rgb(36 44 56 / <alpha-value>)",
				}
			},
		},
	},
	plugins: [],
	darkMode: 'class',
}
