function countLetters(text) {
    const letterCounts = {};
    const textWithoutSpaces = text.replace(/\s/g, '');
  
    for (const char of textWithoutSpaces) {
      if (/[a-zA-Z]/.test(char)) {
        const lowercaseChar = char.toLowerCase();
        letterCounts[lowercaseChar] = (letterCounts[lowercaseChar] || 0) + 1;
      }
    }
  
    return letterCounts;
  }
  
  module.exports = countLetters;
  