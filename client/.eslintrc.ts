module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended', // Sử dụng plugin TypeScript
		'plugin:prettier/recommended', // Kết hợp ESLint và Prettier
	],
	parserOptions: {
		ecmaVersion: 7,
	},
	settings: {
		react: {
			version: 'detect', // Tự động xác định phiên bản React
		},
	},
	'no-unused-vars': 'off',
	'@typescript-eslint/no-unused-vars': ['error'],
	'@typescript-eslint/no-explicit-any': 'off',
	'prettier/prettier': [
		'error',
		{
			endOfLine: 'auto',
			printWidth: 80,
			trailingComma: 'es5',
			semi: false,
			doubleQuote: true,
			jsxSingleQuote: true,
			singleQuote: true,
			useTabs: true,
			tabWidth: 2,
		},
	],
	env: {
		node: true,
	},
}
