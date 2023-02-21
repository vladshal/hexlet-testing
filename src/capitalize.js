const capitalize = (text) => {
  if (text === '') {
    return '';
  }
  const word = text.trim();
  const firstChar = word[0].toUpperCase();
  const restSubstring = word.slice(1);
  return `${firstChar}${restSubstring}`;
};
export default capitalize;