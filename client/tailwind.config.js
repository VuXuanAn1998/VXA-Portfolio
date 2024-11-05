/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#72b626', // Màu cho light theme
					dark: '#ffb400', // Màu cho dark theme
				},
				secondary: {
					light: '#666',
					dark: 'white',
				},
				background: {
					light: '#FFFFFF', // Màu nền cho light theme
					dark: '#121212', // Màu nền cho dark theme
				},
				text: {
					light: '#000000', // Màu chữ cho light theme
					dark: 'white', // Màu chữ cho dark theme
				},
				backgroundBody: {
					light: '#000000',
					dark: '#0F1214',
				},
			},
		},
	},
	plugins: [],
}
