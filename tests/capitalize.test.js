import capitalize from '../src/capitalize.js';

if (capitalize('hexlet' !== 'Hexlet')) {
    throw new Error('Capitalize function eror');
}
if (capitalize('') !== '') {
    throw new Error('Capitalize function eror');
}
if (capitalize(' hexlet') !== ' Hexlet') {
    throw new Error('Capitalize function eror');
}
