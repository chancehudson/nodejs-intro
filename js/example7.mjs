import fs from 'fs'

function writeObject(obj) {
  // Writing strings to a file isn't very helpful. Let's try outputing an object
  const filename = 'car-info.json'
  // JSON.stringify is a function that converts an object to JSON
  // JSON stands for JavaScript Object Notation, it's a simple way of storing
  // and reading data
  fs.writeFile(filename, JSON.stringify(obj), function(err) {
    if (err) {
      console.log('Failed to write data!')
    } else {
      console.log('Wrote data to', filename)
    }
  })
  // Once you run this script take a look at car-info.json
  // You should be able to read it
}

const carInfo = {
  make: 'hyundai',
  model: 'veloster',
  year: 2013,
  miles: 90000,
  doors: 4,
}
writeObject(carInfo)
