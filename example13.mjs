import cows from 'cows'

// This is tricky, try to figure out what this is
;(async () => {
  const allCows = cows()
  console.log('Cow attack!')
  await new Promise(r => setTimeout(r, 1000))
  for (let x = 0; x < 100; x++) {
    const index = Math.floor(Math.random() * allCows.length)
    console.log(allCows[index])
    await new Promise(r => setTimeout(r, 100))
  }
})()
