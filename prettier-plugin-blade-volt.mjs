/**
 * @typedef {Object} BladePluginOptions
 */

/**
 * @typedef {Object} BladeVoltPluginOptions
 * @property {boolean} [addIgnoreCommentsForVolt=true] - Add Prettier ignore comments around PHP code blocks in Volt templates.
 */

import { options, parsers, printers } from "@shufo/prettier-plugin-blade";

const LIVEWIRE_VOLT_PATTERN = "Livewire\\Volt";
const IGNORE_START_COMMENT = "<!-- prettier-ignore-start -->";
const IGNORE_END_COMMENT = "<!-- prettier-ignore-end -->";
const PHP_CODE_BLOCK_REGEX = /(<\?php[\s\S]*?\?>)/g;

/**
 * Check if the PHP code block already has ignore comments.
 * @param {string} text - The whole text of the Blade file.
 * @param {string} match - The PHP code block match.
 * @returns {boolean} Whether the PHP code block has ignore comments.
 */
function hasIgnoreComments(text, match) {
    const startIndex = text.indexOf(match);
    const endIndex = startIndex + match.length;
    const textBeforeMatch = text.slice(0, startIndex);
    const textAfterMatch = text.slice(endIndex);
    const hasIgnoreStartComment = textBeforeMatch.includes(IGNORE_START_COMMENT);
    const hasIgnoreEndComment = textAfterMatch.includes(IGNORE_END_COMMENT);
    return hasIgnoreStartComment && hasIgnoreEndComment;
}

/**
 * Add ignore comments around the PHP code block.
 * @param {string} match - The PHP code block match.
 * @returns {string} The PHP code block with ignore comments.
 */
function addIgnoreComments(match) {
    return `${IGNORE_START_COMMENT}\n${match}\n${IGNORE_END_COMMENT}`;
}

/**
 * Preprocess the Blade file to add ignore comments for Volt PHP code blocks.
 * @param {string} text - The whole text of the Blade file.
 * @param {BladePluginOptions & BladeVoltPluginOptions} options - The options for the Blade plugin.
 * @returns {string} The preprocessed text of the Blade file.
 */
function preprocessBlade(text, options) {
    if (options.addIgnoreCommentsForVolt) {
        text = text.replace(PHP_CODE_BLOCK_REGEX, (match) => {
            if (match.includes(LIVEWIRE_VOLT_PATTERN)) {
                return hasIgnoreComments(text, match) ? match : addIgnoreComments(match);
            }
            return match;
        });
    }
    return text;
}

/**
 * @type {import("prettier").Plugin<BladePluginOptions & BladeVoltPluginOptions>}
 */
const plugin = {
    parsers: {
        ...parsers,
        blade: {
            ...parsers.blade,
            preprocess: preprocessBlade,
        },
    },
    printers: {
        ...printers,
    },
    options: {
        ...options,
        addIgnoreCommentsForVolt: {
            type: "boolean",
            default: true,
            description: "Add Prettier ignore comments around PHP code blocks in Volt templates.",
        },
    },
};

export default plugin;
