// Lowercases text and joins its words with hyphens. Apostrophes do not split a word.
export function slug(text) {
  return text
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
