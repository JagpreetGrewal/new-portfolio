const express = require('express')
const app = express()
const route1 = require('./routes/route1')
const cors = require('cors')
const bodyParser = require('body-parser');

console.log(app)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cors())

app.use('/', route1)

app.listen(8080, (err) => {
    if (err) console.log(err);
    console.log('server listening on port 8080');
})