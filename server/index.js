const express = require('express')
const app = express()
const path = require('path');
const route1 = require('./routes/route1')
const cors = require('cors')
const bodyParser = require('body-parser');

console.log(app)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Middleware to set necessary headers
app.use((req, res, next) => {
    res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
    res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
  });
  
//   // Serve the React static files from the build directory
// app.use(express.static(path.join(__dirname, '../client/build')));

// // Serve the Godot game specifically if it is in a different path
// app.use('/about', express.static(path.join(__dirname, '../client/public/game')));

// // Handle any other routes by serving the index.html
// app.get('*', (req, res) => {
// res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

app.use(cors())

app.use('/', route1)

app.listen(8080, (err) => {
    if (err) console.log(err);
    console.log('server listening on port 8080');
})