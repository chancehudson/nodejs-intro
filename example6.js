// Other packages and files can be included using the require function
// The fs package is used for doing filesystem operations
const fs = require('fs')

function writeHello() {
  const filename = 'hello.txt'
  const contents = 'hello world'
  // We're going to the contents variable to a file named hello.txt
  // You can view the documentation for this function here:
  // https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
  fs.writeFile(filename, contents, function (err) {
    if (err) {
      console.log('There was a problem writing the file!')
    } else {
      console.log('File written successfully')
    }
  })

  // In the above line we're calling a function. Three arguments are being passed
  // The first is the filename, the second is the contents we want to write
  // The third is a bit more tricky, we're passing a function to the function
  // The function we're passing will be called when the file has been written, or
  // when an error occurs

  // If this doesn't make sense take a look at the writeHelloCleaner function.
  // It does the same thing but is written slightly differently.
}

writeHello()

// Example code
function writeHelloCleaner() {
  const filename = 'hello.txt'
  const contents = 'hello world'
  // We're going to the contents variable to a file named hello.txt
  // You can view the documentation for this function here:
  // https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback
  fs.writeFile(filename, contents, doneWriting)
}

function doneWriting(err) {
  if (err) {
    console.log('There was a problem writing the file!')
  } else {
    console.log('File written successfully')
  }
}
