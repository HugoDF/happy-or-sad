const keywords = {
    happy: [ 'delight', 'delighted', 'delightful', 'happy', 'glad', 'joy', 'joyful', 'merry', 'pleasant' ],
    sad: [ 'disappointed', 'miserable', 'sad', 'sorrow', 'unhappy' ]
}

const notAlphaNumericAndWhitespaceRegex = /[^\w\s]|_/g;
const multipleWhiteSpaceRegex = /\s+/g;

function rateMood(text = '') {
  const wordArr = text
    .replace(notAlphaNumericAndWhitespaceRegex, '')
    .replace(multipleWhiteSpaceRegex, ' ')
    .split(' ');
  const moodWordCount = Object.keys(keywords)
    .reduce( (prev, mood) => {
      const moodWords = keywords[mood];
      const moodWordCount = wordArr.reduce( (count, word) => {
        return moodWords.includes(word) ? count + 1 : count;
      }, 0);
      prev[mood] = moodWordCount;
      return prev;
    }, {})
  const { happy, sad } = moodWordCount;
  if(happy > sad * 1.5) {
    return 'happy';
  }
  if(sad > happy * 1.5) {
    return 'sad';
  }
  return 'unknown';
}
module.exports = rateMood;
