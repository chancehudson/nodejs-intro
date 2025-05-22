import fs from 'fs/promises'

// now let's actually do something. I want to get a list of words that have at least 2 vowels in them.
// 
// thankfully i have a list of 400k words here
const WORDS_URL = 'https://raw.githubusercontent.com/dwyl/english-words/refs/heads/master/words.txt'

// javascript has a builtin function for loading urls called fetch, it's great
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// let's get our words list and save it to a file
//

console.log('Downloading words list')
const response = await fetch(WORDS_URL)
// we'll get our response as plaintext
const wordsString = await response.text()

// now let's get our individual words in a list be separating each line of the text
//
const words = wordsString.split('\n')
console.log(`We have ${words.length} words to check`)

// now we need to look for words with 2 vowels, excluding y

// we put our sorted words in here
const vowelWords = []

const vowels = 'aeiou'.split('')
for (const word of words) {
  let vowelsFound = 0
  for (const vowel of vowels) {
    if (word.indexOf(vowel) !== -1) {
      vowelsFound++
    }
  }
  if (vowelsFound >= 2) {
    vowelWords.push(word)
  }
}

console.log(`Found ${vowelWords.length} words with at least 2 vowels`)

// and now let's write them to file, 1 per line
const vowelWordsString = vowelWords.join('\n')

console.log('Writing words to file')
await fs.writeFile('./vowel_words.txt', vowelWordsString)
