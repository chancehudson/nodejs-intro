// in programming not all operations happen immediately. If i'm printing
// a message to the terminal that always happens immediately, but if i'm
// downloading a file that will take potentially a long time.
//
// We don't want to halt the whole program to wait, we may be able to do stuff
// in the meantime! So we use promises, which are an object that tracks the 
// state of a task that is happening.
//

// Let's make a promise, usually you won't make promises in this way, you'll
// get them already built from a function.
//

const myPromise = new Promise((resolve, reject) => {
  // when we make a promise this function gets called immediately, and when
  // results are ready the resolve function is called to complete the promise
  // the reject function can be use to indicate an error

  // we'll wait 5 seconds and then resolve the promise
  setTimeout(() => resolve(), 5000)
  // this can also be written as setTimeout(resolve, 5000)
})

// now we can do other things while we wait the 5 seconds for the promise above
console.log(`i'm waiting on a promise!`)

// we can choose to wait in a promise using the await keyword. When we use this
// keyword execution will not move past this line until the promise resolves
// or rejects

await myPromise

console.log(`now we're all done!`)

