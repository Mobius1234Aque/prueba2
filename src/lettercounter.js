function countLetters(text) {
    const letterCount = {};
    const textWithoutSpaces = text.replace(/\s/g, '');
  
    for (const char of textWithoutSpaces) {
      if (/[a-zA-Z]/.test(char)) {
        const lowercaseChar = char.toLowerCase();
        letterCount[lowercaseChar] = (letterCount[lowercaseChar] || 0) + 1;
      }
    }
  
    return letterCount;
  }
  
  module.exports = countLetters;
  