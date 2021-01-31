const fs = require('fs').promises

// Using the .then and .catch functions of promises was later replaced with
// async functions, let's take a look at some async syntax

// Functions have to be declared async, notice the keyword at the beginning
async function readData() {
  const filename = 'car-info.json'
  // The await keyword is used to wait for a promise to finish
  // The result of the promise is returned just like any other variable
  const data = await fs.readFile(filename)
  const carInfo = JSON.parse(data)
  console.log(`The car from the file is a ${carInfo.year} ${carInfo.make} ${carInfo.model}`)
}

readData()
