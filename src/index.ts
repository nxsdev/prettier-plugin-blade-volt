import { parsers as bladeParsers, printers as bladePrinters } from "@shufo/prettier-plugin-blade";
import { options } from "./options";

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

function preprocess(text: string, options: any): string {
  if (options.addPrettierIgnoreForVolt) {
    const regex = /(<\?php[\s\S]*?\?>)/g;
    const ignoreStart = "<!-- prettier-ignore-start -->";
    const ignoreEnd = "<!-- prettier-ignore-end -->";

    text = text.replace(regex, (match) => {
      const hasIgnoreComment = new RegExp(`${escapeRegExp(ignoreStart)}[\\s\\S]*?${escapeRegExp(match)}[\\s\\S]*?${escapeRegExp(ignoreEnd)}`, "g").test(text);
      if (hasIgnoreComment) {
        return match;
      }
      return `${ignoreStart}\n${match}\n${ignoreEnd}`;
    });
  }

  return text;
}

const parsers = {
  ...bladeParsers,
  blade: {
    ...bladeParsers.blade,
    preprocess,
  },
};

const printers = {
  ...bladePrinters,
};

const plugin = {
  parsers,
  printers,
  options,
};

export default plugin;
