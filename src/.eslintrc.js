module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:jsdoc/recommended"
	],
	"parser": "babel-eslint",
	"parserOptions": {
		"sourceType": "module"
	},
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"plugins": [
		"jsdoc"
	],
	"rules": {
		"accessor-pairs": "error",
		"array-bracket-newline": "error",
		"array-bracket-spacing": [
			"error",
			"never"
		],
		"array-callback-return": "error",
		"array-element-newline": [
			"error",
			{
				"multiline": true,
				"minItems": 3
			}
		],
		"arrow-body-style": "error",
		"arrow-parens": [
			"error",
			"always"
		],
		"arrow-spacing": [
			"error",
			{
				"after": true,
				"before": true
			}
		],
		"block-scoped-var": "error",
		"block-spacing": "error",
		// "brace-style": "error",
		"callback-return": "error",
		"camelcase": "error",
		"comma-dangle": "error",
		"comma-spacing": [
			"error",
			{
				"after": true,
				"before": false
			}
		],
		"comma-style": [
			"error",
			"first"
		],
		"complexity": "error",
		"computed-property-spacing": "error",
		"consistent-return": "error",
		"consistent-this": "error",
		"curly": "error",
		"default-case": "error",
		"dot-location": [
			"error",
			"property"
		],
		"dot-notation": [
			"error",
			{
				"allowKeywords": true
			}
		],
		"eol-last": "error",
		"eqeqeq": "error",
		"for-direction": "error",
		"func-call-spacing": "error",
		"func-name-matching": "error",
		// "func-names": ["error", "as-needed"],
		"func-style": [
			"error",
			"declaration",
			{ "allowArrowFunctions": true }
		],
		"function-paren-newline": "error",
		"generator-star-spacing": "error",
		"getter-return": "error",
		"global-require": "error",
		"guard-for-in": "error",
		"handle-callback-err": "error",
		"id-blacklist": "error",
		"id-length": [
			"error",
			{
				"properties": "never"
			}
		],
		"id-match": "error",
		"implicit-arrow-linebreak": [
			"error",
			"beside"
		],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"jsx-quotes": "error",
		"key-spacing": "error",
		"keyword-spacing": "error",
		"line-comment-position": "error",
		"linebreak-style": [
			"error",
			"unix"
		],
		"lines-around-comment": "error",
		"max-depth": "error",
		"max-len": "off",
		"max-lines": [
			"error", {
				"max": 300,
				"skipComments": true,
				"skipBlankLines": true
			}
		],
		"max-nested-callbacks": "error",
		"max-params": [
			"error",
			5
		],
		"max-statements": [
			"error",
			10,
			{
				"ignoreTopLevelFunctions": true
			}
		],
		"max-statements-per-line": ["error", { "max": 2 }],
		"multiline-comment-style": [
			"error",
			"separate-lines"
		],
		"multiline-ternary": [
			"error",
			"always-multiline"
		],
		"new-parens": "error",
		"newline-per-chained-call": "error",
		"no-alert": "error",
		"no-array-constructor": "error",
		"no-await-in-loop": "error",
		"no-bitwise": "error",
		"no-buffer-constructor": "error",
		"no-caller": "error",
		"no-catch-shadow": "error",
		"no-confusing-arrow": "error",
		"no-continue": "error",
		"no-div-regex": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"no-empty-function": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-extra-parens": [
			"error",
			"all",
			{
				"returnAssign": false
			}
		],
		"no-floating-decimal": "error",
		"no-implicit-coercion": "error",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-inline-comments": "error",
		// "no-invalid-this": "error",
		"no-iterator": "error",
		"no-label-var": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-lonely-if": "error",
		"no-loop-func": "error",
		"no-magic-numbers": "error",
		// "no-mixed-operators": "error",
		"no-mixed-requires": "error",
		"no-multi-assign": "error",
		"no-multi-spaces": "error",
		"no-multi-str": "error",
		"no-multiple-empty-lines": ["error", { "max": 3, "maxEOF": 1 }],
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-object": "error",
		"no-new-require": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-path-concat": "error",
		"no-process-exit": "error",
		"no-proto": "error",
		"no-prototype-builtins": "error",
		"no-restricted-globals": "error",
		"no-restricted-imports": "error",
		"no-restricted-modules": "error",
		"no-restricted-properties": "error",
		"no-restricted-syntax": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-sync": "error",
		"no-template-curly-in-string": "error",
		"no-throw-literal": "error",
		"no-trailing-spaces": "error",
		"no-undef-init": "error",
		"no-undefined": "error",
		// "no-underscore-dangle": [
		// 	"error",
		// 	{
		// 		"allowAfterThis": true,
		// 		"allowAfterSuper": true,
		// 		"enforceInMethodNames": true
		// 	}
		// ],
		"no-unmodified-loop-condition": "error",
		"no-unneeded-ternary": "error",
		"no-unsafe-negation": "error",
		"no-unused-expressions": "error",
		"no-use-before-define": "error",
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"no-void": "error",
		"no-warning-comments": "error",
		"no-whitespace-before-property": "error",
		"no-with": "error",
		"nonblock-statement-body-position": "error",
		"object-curly-newline": "error",
		"object-curly-spacing": [
			"error",
			"always"
		],
		"object-property-newline": [
			"error",
			{
				"allowMultiplePropertiesPerLine": true
			}
		],
		"object-shorthand": "error",
		"one-var-declaration-per-line": "error",
		"operator-assignment": "error",
		"operator-linebreak": [
			"error",
			"before"
		],
		"padding-line-between-statements": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "error",
		"prefer-destructuring": "error",
		"prefer-numeric-literals": "error",
		"prefer-promise-reject-errors": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"quotes": [
			"error",
			"single"
		],
		"radix": "error",
		"require-await": "error",
		"rest-spread-spacing": "error",
		"semi": "error",
		"semi-spacing": "error",
		"semi-style": "error",
		"sort-imports": "error",
		"sort-vars": "error",
		"space-before-blocks": "error",
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "never",
			"asyncArrow": "always"
		}],
		"space-in-parens": [
			"error",
			"never"
		],
		"space-infix-ops": "error",
		"space-unary-ops": "error",
		"spaced-comment": [
			"error",
			"always"
		],
		"strict": [
			"error",
			"safe"
		],
		"switch-colon-spacing": "error",
		"symbol-description": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
		"unicode-bom": [
			"error",
			"never"
		],
		"vars-on-top": "error",
		"wrap-iife": [
			"error",
			"inside"
		],
		"wrap-regex": "error",
		"yield-star-spacing": "error",
		"yoda": [
			"error",
			"never"
		]
	},
	"settings": {
		"jsdoc": {
			"tagNamePreference": {
				"augments": {
					"message": "@extends is to be used over @augments as it is more evocative of classes than @augments",
					"replacement": "extends"
				}
			}
		}
	}
};
