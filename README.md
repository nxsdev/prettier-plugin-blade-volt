<div align="center">
<img alt="Prettier"
  src="https://raw.githubusercontent.com/prettier/prettier-logo/master/images/prettier-icon-light.png">
<img alt="PHP" height="180" hspace="25" vspace="15"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/500px-Laravel.svg.png">
</div>

<h2 align="center">Prettier Blade Plugin</h2>
<p align="center">
  <a href="https://github.com/shufo/prettier-plugin-blade/actions">
    <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/shufo/prettier-plugin-blade/node.yml?style=flat-square">
  </a>
  <a href="https://www.npmjs.com/package/@prettier/plugin-php">
    <img alt="npm version" src="https://img.shields.io/npm/v/@shufo/prettier-plugin-blade.svg?style=flat-square">
  </a>
</p>

This plugin has been
https://github.com/shufo/prettier-plugin-blade
extended for use with Livewire Volt.

The original functionality is retained, with the addition of the option `addPrettierIgnoreForVolt`.

By setting this option to `true`, the `<?php` start tag and the closing tag `? >` before and after `<! -- prettier-ignore-start -->` and `<! -- prettier-ignore-end -->` before and after the closing tag `?
This allows you to exclude prettier formatting between php tags in the blade.

## Installation

```bash
npm install --save-dev @nxsdev/rettier-plugin-blade-volt

# yarn
yarn add -D @nxsdev/rettier-plugin-blade-volt

# pnpm
pnpm add -D @nxsdev/rettier-plugin-blade-volt
```

then, add in your Prettier configuration:

```json
{
  "plugins": ["@nxsdev/prettier-plugin-blade-volt"],
  "overrides": [
    {
      "files": ["*.blade.php"],
      "options": {
        "parser": "blade",
        "tabWidth": 4,
        "addPrettierIgnoreForVolt": true
      }
    }
  ]
}
```

Since the rest is basically the same, please refer to this GitHub.

https://github.com/shufo/prettier-plugin-blade