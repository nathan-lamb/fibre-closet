const express = require('express')

const PORT = 3000
const app = express()

// app.get('/', (req, res) => {
//
// })

app.listen(PORT, () => {
  console.log("the server is listening on port", PORT)
})