const app = require('./app')
const PORT = process.env.PORT || 8080
app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`server listening on port ${PORT}`);
})