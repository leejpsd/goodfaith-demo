import assert from 'node:assert/strict';
import { test } from 'node:test';
import { slug } from './slug.js';

test('joins words with hyphens', () => {
  assert.equal(slug('Hello, World!'), 'hello-world');
});

test('keeps digits', () => {
  assert.equal(slug('Version 2 notes'), 'version-2-notes');
});

test('drops punctuation between words', () => {
  assert.equal(slug("What? Why!"), "what-why");
});
