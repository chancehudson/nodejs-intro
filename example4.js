function sum() {
  // Arrays are lists of values
  const numberArr = [0, 5, 10, 15, 20, 25, 30]
  // The ${} syntax in backticks lets you insert a variable
  console.log(`numberArr has ${numberArr.length} values`)

  // Let's take the sum of all the values in numberArr
  // This method uses a loop. The contents inside the brackets will be called for
  // each value in the array
  let total = 0
  for (const num of numberArr) {
    // num will be 0, then 5, then 10, etc
    // each time total will be updated
    total = total + num
  }
  // The num variable does not exist here, it only exists in the loop
  console.log(`Total value of array ${total}`)
}

sum()
