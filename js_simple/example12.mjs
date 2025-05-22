import fs from 'fs/promises'

// Functions can be written in two ways, the first is using the function keyword

function someFunction() {
  console.log(`I'm a function`)
}

// The second way is using arrow syntax

const anotherFunction = () => {
  console.log(`I'm also a function`)
}

const aSmallerFunction = () => console.log(`I'm a function to, but one line`)

someFunction()
anotherFunction()
aSmallerFunction()
