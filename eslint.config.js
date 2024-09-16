import js from '@eslint/js';
import eslintPluginImportX from 'eslint-plugin-import-x';
import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';

export default [
	js.configs.recommended,
	eslintPluginImportX.flatConfigs.recommended,
	jsdoc.configs['flat/recommended'],
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.browser,
				...globals.node,
			},
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
			},
		},
	},
	{
		plugins: {
			jsdoc: jsdoc
		},
		rules: {
			'jsdoc/tag-lines': ['warn', 'always', { 'count': 0, 'startLines': 1 }],
			'jsdoc/no-defaults': 'off',
		},
		settings: {
			jsdoc: {
				tagNamePreference: {
					returns: 'return'
				}
			}
		}
	}
];
