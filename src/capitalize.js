const capitalize = (text) => {
  if (text = '') {
    return '';
  }
  const [firstChar, ...rest] = text;
  return `${firstChar.toUpperCase()}${rest.join('')}`;
};
export default capitalize ;