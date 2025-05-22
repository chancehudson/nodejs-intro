import fs from 'fs/promises'

// Up until now we've passed a function to handle the file operations
// We do this because file system operations are "asynchronous" that means they
// take a while to happen and it's better to tell the function what to do after
// it's done than to wait for it to be done
// This way we can do other things while the fs function writes or reads data

// Passing a function is the old way of doing things. Now we using something
// called a promise

fs.readFile('car-info.json')
  .then(function (data) {
    const carInfo = JSON.parse(data)
    console.log(`I read the data, the car has ${carInfo.miles} miles on it`)
  })
  .catch(function (err) {
    console.log('There was a problem reading the data')
  })

// In this example we're using the promise version of the fs module. Promises
// have two properties, .then and .catch.
// .then accepts a function that will be called upon success
// .catch accepts a function that will be called upon failure
// these function can be chained together, like above
