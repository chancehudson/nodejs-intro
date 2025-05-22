import fs from 'fs'

function readData() {
  const filename = 'car-info.json'
  fs.readFile(filename, function (err, data) {
    if (err) {
      console.log('There was a problem loading the file!')
    }
    // Now we have the file contents in the data variable
    // This data is a string, but we want an object so we can use the contents
    const carInfo = JSON.parse(data)
    // Now carInfo is an object that can be accessed like usual
    console.log(`The car from the file is a ${carInfo.year} ${carInfo.make} ${carInfo.model}`)
  })
}

readData()
