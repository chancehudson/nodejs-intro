// Now lets look at something more complex
// We're going to use an open source module called express to create a webserver
// In your terminal run the command "npm install"

import fs from 'fs/promises'
// express is a package that lets you create simple webservers
import express from 'express'

// Let's make a new server, we do so by calling express, which is a function
const server = express()

// Now let's add a handler for the default route
server.get('/', async function(req, res) {
  // This function will be called when a request is made to the webserver
  const data = await fs.readFile('car-info.json')
  // We'll send car data as a JSON string to the client but we'll tell the
  // client to read it as json
  res.set('Content-Type', 'application/json')
  res.send(data)
})

// We'll have the server listen on port 8080
server.listen(8080, function() {
  console.log('Go to localhost:8080 in your internet browser')
})

// Once you run this script open a web browser and go to the website
// localhost:8080

// When you're done press ctrl+c in the terminal to stop the script
