/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			width: {
				'w-570' : '570px'
			}
		},
	},
	plugins: [],
}
