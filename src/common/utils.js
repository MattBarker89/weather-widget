export const stringToTitleCase = (str) => {
  if (typeof str !== 'string') {
    throw new Error('error converting string to title case, input is not a string')
  }
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}