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
			fontSize: {
				'14-14-400': ['14px', { lineHeight: '14px', fontWeight: '400' }],
				'16-20-400': ['16px', { lineHeight: '20px', fontWeight: '400' }],
				'16-26-600': ['16px', { lineHeight: '2px', fontWeight: '600' }],
				'26-40-700': ['26px', { lineHeight: '40px', fontWeight: '700' }],
			},
		},
	},
	plugins: [],
}
