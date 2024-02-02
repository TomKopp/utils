module.exports = {
	'extends': [
		'eslint:recommended',
		'plugin:jsdoc/recommended'
	],
	'parserOptions': {
		'sourceType': 'module',
	},
	'env': {
		'browser': true,
		'node': true,
		'es2022': true
	},
	'plugins': [
		'jsdoc'
	],
	'ignorePatterns': ['/*.cjs'],
	'rules': {
		'jsdoc/tag-lines': ['warn', 'always', { 'count': 0, 'startLines': 1 }],
		'jsdoc/no-defaults': 'off',
	},
	'globals': {
		'CompressionStream': 'readonly',
		'DecompressionStream': 'readonly',
	},
	'settings': {
		'jsdoc': {
			'tagNamePreference': {
				'returns': 'return'
			}
		}
	}
};
