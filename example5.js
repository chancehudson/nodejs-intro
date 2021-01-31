function obj() {
  // Objects are key/value mappings.
  const carInfo = {
    make: 'hyundai',
    model: 'veloster',
    year: 2013,
    miles: 90000,
    doors: 4,
  }
  console.log(`My car is a ${carInfo.year} ${carInfo.make} ${carInfo.model}`)

  // New values can be added to the object by simply setting them like so
  carInfo.fast = true

  console.log(`My car ${carInfo.fast ? 'is' : 'is not'} fast`)

  // The line above uses a ternary operator to print either the words "is" or "is not"
  // depending on whether the "fast" property exists on the carInfo object
  // The same logic can be written like this:
  let isOrNot
  if (carInfo.fast) {
    isOrNot = 'is'
  } else {
    isOrNot = 'is not'
  }
  // Using a ternary operator is easier for simple values
}

obj()
