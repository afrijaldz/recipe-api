const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./src/routes')
const cors = require('cors')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())
app.use(routes(express))

app.listen(3000, () => {
  console.log(`server is running on port 3000`)
})