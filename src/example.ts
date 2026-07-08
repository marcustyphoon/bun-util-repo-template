#!/usr/bin/env bun

console.log(await Bun.$`git status`.text());
