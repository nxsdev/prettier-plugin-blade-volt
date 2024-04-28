/**
 * This module exports default options and additional options for the Prettier plugin for Blade templates.
 *
 * @since 0.1.0
 * @module options
 */

/**
 * Default options for the Prettier plugin for Blade templates.
 *
 * @type {Object}
 * @property {number} tabWidth - The number of spaces for each tab.
 * @property {number} printWidth - The maximum width of the output.
 * @property {boolean} singleQuote - Whether to use single quotes for strings.
 * @property {boolean} addPrettierIgnoreForVolt - Whether to add prettier-ignore comment for Volt files.
 * @since 0.1.0
 */
export const defaultOptions = {
	tabWidth: 4,
	printWidth: 120,
	singleQuote: true,
  addPrettierIgnoreForVolt: true,
};

/**
 * Additional options for the Prettier plugin for Blade templates.
 *
 * @type {Object}
 * @property {Object} wrapAttributes - The way to wrap attributes. [auto|force|force-aligned|force-expand-multiline|aligned-multiple|preserve|preserve-aligned]
 * @property {Object} wrapAttributesMinAttrs - Minimum number of html tag attributes for force wrap attribute options. Wrap the first attribute only if 'force-expand-multiline' is specified in wrap attributes.
 * @property {Object} endWithNewLine - Whether to end output with newline.
 * @property {Object} sortTailwindcssClasses - Whether to sort Tailwindcss classes automatically. This option respects `tailwind.config.js`.
 * @property {Object} tailwindcssConfigPath - Path to custom Tailwindcss config. This option is available only when `sortTailwindcssClasses` is present.
 * @property {Object} sortHtmlAttributes - Sort HTML Attributes. [none|alphabetical|code-guide|idiomatic|vuejs|custom]
 * @property {Object} customHtmlAttributesOrder - Comma separated custom HTML attributes order. e.g. "id, aria-.+, class, src". To enable this you must specify sort html attributes option as `custom`. You can use regex for attribute names.
 * @property {Object} noPhpSyntaxCheck - Whether to disable PHP syntax checking.
 * @property {Object} indentInnerHtml - Whether to indent <head> and <body> sections in html.
 * @property {Object} extraLiners - Comma separated list of tags that should have an extra newline before them.
 * @property {Object} trailingCommaPHP - Whether to print trailing commas for php expression.
 * @property {Object} phpVersion - The version of PHP to use for formatting.
 * @property {Object} addPrettierIgnoreForVolt - Whether to add prettier-ignore comment for Volt files.
 * @since 0.1.0
 */
export const options = {
	wrapAttributes: {
		type: "string",
		category: "Blade",
		default: "auto",
		description:
			"The way to wrap attributes. [auto|force|force-aligned|force-expand-multiline|aligned-multiple|preserve|preserve-aligned]",
		since: "0.1.0",
	},
	wrapAttributesMinAttrs: {
		type: "int",
		category: "Blade",
		default: 2,
		description:
			"Minimum number of html tag attributes for force wrap attribute options. Wrap the first attribute only if 'force-expand-multiline' is specified in wrap attributes",
		since: "0.1.0",
	},
	endWithNewLine: {
		type: "boolean",
		category: "Blade",
		default: true,
		description: "End output with newline.",
		since: "0.1.0",
	},
	sortTailwindcssClasses: {
		type: "boolean",
		category: "Blade",
		default: false,
		description:
			"Sort Tailwindcss classes automatically. This option respects `tailwind.config.js`.",
		since: "0.1.0",
	},
	tailwindcssConfigPath: {
		type: "string",
		category: "Blade",
		default: "",
		description:
			"Path to custom Tailwindcss config. This option is available only when `sortTailwindcssClasses` is present.",
		since: "0.1.0",
	},
	sortHtmlAttributes: {
		type: "string",
		category: "Blade",
		default: "none",
		description:
			"Sort HTML Attributes. [none|alphabetical|code-guide|idiomatic|vuejs|custom]",
		since: "0.1.0",
	},
	customHtmlAttributesOrder: {
		type: "string",
		category: "Blade",
		default: "",
		description:
			'Comma separated custom HTML attributes order. e.g. "id, aria-.+, class, src". To enable this you must specify sort html attributes option as `custom`. You can use regex for attribute names.',
		since: "0.1.0",
	},
	noPhpSyntaxCheck: {
		type: "boolean",
		category: "Blade",
		default: false,
		description: "Disable PHP syntax checking",
		since: "0.1.0",
	},
	indentInnerHtml: {
		type: "boolean",
		category: "Blade",
		default: false,
		description: "Indent <head> and <body> sections in html",
		since: "0.1.0",
	},
	extraLiners: {
		type: "string",
		category: "Blade",
		default: "head,body,/html",
		description:
			"Comma separated list of tags that should have an extra newline before them.",
		since: "0.1.0",
	},
	trailingCommaPHP: {
		type: "boolean",
		category: "Blade",
		default: true,
		description:
			"If set to false, no trailing commas are printed for php expression.",
		since: "0.1.0",
	},
	phpVersion: {
		type: "string",
		category: "Blade",
		default: "8.1",
		description: "The version of PHP to use for formatting.",
		since: "0.1.0",
	},
  addPrettierIgnoreForVolt: {
    type: "boolean",
    category: "Blade",
    default: true,
    description: "Add prettier-ignore comment for Volt files.",
    since: "0.1.0",
  }
};