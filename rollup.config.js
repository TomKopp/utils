import babel from 'rollup-plugin-babel';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import del from 'rollup-plugin-delete';
import json from 'rollup-plugin-json';
import pkg from './package.json';
import progress from 'rollup-plugin-progress';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const extensions = [
	'.js'
	, '.jsx'
];

const name = String(pkg.name).replace(/-/g, '');

export default {
	input: './src/index.js'

	// Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
	// https://rollupjs.org/guide/en#external-e-external
	, external: []

	, plugins: [
		// Progressbar in console (default: {clearline: true})
		progress()

		// A string or an array of patterns of files and folders to be deleted. Default is []
		// Match anything in 'dist' directory'
		, del({ targets: ['dist/*'] })

		// Allows node_modules resolution
		, resolve({ extensions })

		// Convert JSON files to ES Modules
		, json({ include: './package.json', preferConst: true, compact: true })

		// Remove comments, trim trailing spaces, compact empty lines, and normalize line endings
		, cleanup({ extensions: extensions.map(v => v.slice(1)) })

		// Compile TypeScript/JavaScript files
		, babel({ extensions })

		// Allow bundling cjs modules. Rollup doesn't understand cjs
		, commonjs()

		// Minify generated es bundle. Uses terser under the hood.
		, (() => { if (process.env.NODE_ENV === 'production') return terser(); })()
	]

	, output: [
		{
			file: pkg.main
			, format: 'cjs'
			, sourcemap: true
		}
		, {
			file: pkg.module
			, format: 'es'
			, sourcemap: true
		}
		, {
			file: pkg.browser
			, format: 'iife'
			, sourcemap: true
			, name

			// https://rollupjs.org/guide/en#output-globals-g-globals
			, globals: {}
		}
	]
};
