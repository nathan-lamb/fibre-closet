const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')
const db = require('./db')
const request = require('request');

const router = express.Router()
const app = express()
const PORT = 4200

app.use('/', router)
app.listen(PORT, () => {
  console.log('Listening on port', PORT)
})

//Proxy to run front-end/back-end concurrently
app.use('/', (req, res) => {
  const url = "http://localhost:3000" + req.url;
  req.pipe(request(url)).pipe(res);
});



router.get('/hi', async (req, res, next) => {
  try {
    const stash = await db.getStashById(1)
    res.send(stash)
  }
  catch (e) {
    next(e)
  }
})

router.get('/stash', async (req, res, next) => {
  try {
    const stashIds = await db.getStashIds()
    res.send(stashIds)
  }
  catch(e) {
    next(e)
  }
})

