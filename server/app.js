const express = require('express')
const app = express()
// const route = require('./routes/route1')
// const route1 = route.route
const route1 = require('./routes/route1')
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

console.log(app)

app.use(cors())

app.use('/', route1)

module.exports = app