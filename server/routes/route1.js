const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.send('Hello from our server!');
    res.end();
})

route.post('/email', (req, res) => {
    // res.send('Data submitted:', {req});
    console.log("Req is", req.body ?? "No email transferred")
    res.json({...req.body ?? {email: "No email transferred"}, message: 'Data submitted'});
    res.end();
})

module.exports = route