import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/layouts/BlogPost.astro', import.meta.url), 'utf8');

assert.match(source, /\[&_ul\]:list-disc/, 'Blog unordered lists should render bullets.');
assert.match(source, /\[&_ol\]:list-decimal/, 'Blog ordered lists should render numbers.');
assert.match(source, /\[&_table\]:/, 'Blog markdown tables should have explicit table styling.');
assert.match(source, /\[&_th\]:/, 'Blog markdown table headers should have explicit cell styling.');
assert.match(source, /\[&_td\]:/, 'Blog markdown table cells should have explicit cell styling.');
