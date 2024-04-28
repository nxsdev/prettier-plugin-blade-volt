import { describe, expect, test } from 'vitest';
import prettier from 'prettier';
import plugin from '../src/index';

describe('Prettier Plugin Blade Volt', () => {
  const input1 = `
<?php

use Livewire\Volt\Component;

new class extends Component
{
    $message = "Hello, World!";
}; ?>
`;

  const expectedOutput1 = `<!-- prettier-ignore-start -->
<?php

use Livewire\Volt\Component;

new class extends Component
{
    $message = "Hello, World!";
}; ?>
<!-- prettier-ignore-end -->
`;

  test('adds Prettier ignore comments around PHP code blocks', async () => {
    const output = await prettier.format(input1, {
      parser: 'blade',
      plugins: [plugin as any],
      addPrettierIgnoreForVolt: true,
    });
    expect(output).toBe(expectedOutput1);
  });

  const input2 = `<!-- prettier-ignore-start -->  
<?php

use Livewire\Volt\Component;

new class extends Component
{
    $message = "Hello, World!";
}; ?>
<!-- prettier-ignore-end -->
`;

  test('does not duplicate existing Prettier ignore comments', async () => {
    const output = await prettier.format(input2, {
      parser: 'blade',
      plugins: [plugin as any],
      addPrettierIgnoreForVolt: true,
    });
    expect(output).toBe(input2);
  });

  test('does not add ignore comments when addPrettierIgnoreForVolt is false', async () => {
    const output = await prettier.format(input1, {
      parser: 'blade',
      plugins: [plugin as any],
      addPrettierIgnoreForVolt: false,
    });
    expect(output).not.toContain('prettier-ignore-start');
    expect(output).not.toContain('prettier-ignore-end');
  });
});
