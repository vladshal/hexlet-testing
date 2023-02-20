import { capitalize } from '../src/capitalize.js';

if (capitalize('hexlet') !== 'Hexlet') {
  throw new Error('Capitalize Function Error: Performance error');
}
if (capitalize('') !== '') {
  throw new Error('Capitalize Function Error: Empty string');
}
if (capitalize(' hexlet') !== 'Hexlet') {
  throw new Error('Capitalize Function Error: String with whitespace at the beginning');
}

console.log('Tests Passed');
