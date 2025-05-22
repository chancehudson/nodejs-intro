// Functions are used to break up large pieces of logic into re-usable chunks

function hello() {
  console.log('Hello world')
}

// Functions accept variables as arguments, in this case word is an argument
function saySomething(word) {
  console.log(`I was told to say ${word}`)
}

hello();

// Semicolons at the end of statements are optional

saySomething('something');

// If you don't call the functions nothing will happen. Try commenting lines
// 12 and 16 and run the script again
