#!/usr/bin/env bun

import { parseArgs } from 'util';

const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    input: { type: 'string', short: 'i' },
    force: { type: 'boolean', short: 'f' },
  },
  strict: true,
  allowPositionals: true,
});

console.log('args:', { values, positionals });

console.log(await Bun.$`git status`.text());

const packageJson = (await Bun.file('package.json').json()) as {
  devDependencies: Record<string, string>;
};

console.log('current dev dependencies are:', Object.keys(packageJson.devDependencies).join(', '));
