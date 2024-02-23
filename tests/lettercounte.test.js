const countLetters = require('../src/lettercounter.js');

test('cuenta el número de letras en una cadena', () => {
  const text = 'Hello World!';
  const expectedCount = { 'h': 1, 'e': 1, 'l': 3, 'o': 2, 'w': 1, 'r': 1, 'd': 1 };
  expect(countLetters(text)).toEqual(expectedCount);
});

test('cuenta el número de letras en una cadena vacía', () => {
  const text = '';
  const expectedCount = {};
  expect(countLetters(text)).toEqual(expectedCount);
});

test('cuenta el número de letras en una cadena con caracteres especiales', () => {
  const text = 'The quick brown fox jumps over the lazy dog!';
  const expectedCount = {
    't': 2, 'h': 2, 'e': 3, 'q': 1, 'u': 2, 'i': 1, 'c': 1, 'k': 1, 'b': 1, 'r': 2,
    'o': 4, 'w': 1, 'n': 1, 'f': 1, 'x': 1, 'j': 1, 'm': 1, 'p': 1, 's': 1, 'v': 1,
    'l': 1, 'a': 1, 'z': 1, 'y': 1, 'd': 1, 'g': 1
  };
  expect(countLetters(text)).toEqual(expectedCount);
});
