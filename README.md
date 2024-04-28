> [!CAUTION]
> This is a workaround to temporarily use prettier in Livewire Volt and is therefore deprecated.<br>
> We recommend removing it when it is officially supported.

https://github.com/shufo/prettier-plugin-blade

This is a script to exclude php tags containing Volt in blade templates from prettier when using Livewire Volt.

## Usage

1.Download this script and place it in the root directory of your project.

2.Load as a plugin in a `.prettierrc` file.

3.Set the `addIgnoreCommentsForVolt` option to true.

example:
```json
{
    "plugins": ["./prettier-plugin-blade-volt.mjs"],
    "overrides": [
        {
            "files": ["*.blade.php"],
            "options": {
                "parser": "blade",
                "tabWidth": 4,
                "addIgnoreCommentsForVolt": true
            }
        }
    ],
    "printWidth": 120,
    "tabWidth": 4,
    "wrapAttributes": "auto",
    "wrapAttributesMinAttrs": 2,
    "sortTailwindcssClasses": true,
    "sortHtmlAttributes": "none",
    "noPhpSyntaxCheck": false,
    "indentInnerHtml": true,
    "extraLiners": "",
    "trailingCommaPHP": true
}
```

execute(CLI):
```bash
./node_modules/.bin/prettier --write resources/**/*.blade.php
```

result:
```php
<!-- prettier-ignore-start -->
<?php

use Livewire\Volt\Component;

new class extends Component
{
    public string $helloWorld;
}; ?>
<!-- prettier-ignore-end -->
```
