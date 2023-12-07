// backend/tokenizer.js
// Example: If your tokenizer is saved using JSON format

const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

async function loadTokenizer() {
  const data = await readFile('model/tokenizer.json', 'utf8');
  return JSON.parse(data);
}

function texts_to_sequences(text, tokenizer) {
  const words = text.split(' ');
  return words.map(word => {
    const wordIndex = tokenizer.word_index[word];
    if (wordIndex) {
      return wordIndex;
    } else {
      return tokenizer.num_words ? tokenizer.num_words + 1 : 1;
    }
  });
}

module.exports = { loadTokenizer, texts_to_sequences };