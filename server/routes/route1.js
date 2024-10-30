const express = require('express')
const route = express.Router()
const path = require('path');
const { Resend } = require("resend");
const { MongoClient } = require('mongodb');


// Run using node --env-file=.env index.js
// Can also run using npm run start
// modified package.json file to allow that

const myResendURI = new Resend(process.env.RESEND_URI)
const myEmail = process.env.EMAIL_URI || 'dummyemail@email.com'
const myMongdoURI = process.env.MONGODB_URI
const client = new MongoClient(myMongdoURI);

const addInterestedEmail = async (emailObj, client) => {
    if (emailObj == null || client == null){
        const error = new Error("Invalid parameters: emailObj or client is null");
        console.error("Email transfer failed: ", error);
        return error
    }
    try {
        await client.connect();
        const database = client.db("myEmails");
        const collection = database.collection("myEmailsCollection");

        const filter = { "_id": emailObj };
        const existingDocument = await collection.findOne(filter);

        if (!existingDocument) {
            const newDocument = { "_id": emailObj, "contacted": false };
            await collection.insertOne(newDocument);
            console.log("Email added:", newDocument);
        } else {
            console.log("Email already exists in the collection.");
        }
    } catch (e) {
        console.error("Email transfer failed: ", e);
        return { error: e }
    } finally {
        await client.close();
    }
    return { error: null };
}

route.get('/', (req, res) => {
    res.send('Hello from our server!');
    res.end();
})

route.post('/email', async (req, res) => {
    // res.send('Data submitted:', {req});
    const { data, error } = await myResendURI.emails.send({
        from: "ACME <onboarding@resend.dev>",
        to: [`${myEmail}`],
        subject: "Interested contact",
        html: 'Email is: <u>' + JSON.stringify(req.body.email) + ' </u>',
      });
    
    if (error) {
        console.log('Email transfer failed: ', error)
        return res.status(400).json({ error });
    } 

    const {error2} = await addInterestedEmail(req.body, client);

    if (error2) {
        console.log('Email transfer failed: ', error)
        return res.status(400).json({ error });
    } 
    // TODO: Send another email to the contact confirming receiving of email address, acknowledging the domain because you are using Resend for free, and promising to be in contact?
    // TODO: Save addresses in mongoDB (after sanitizing them)
    console.log("Req is", req.body ?? "No email transferred")
    res.json({...req.body ?? {email: "No email transferred"}, message: 'Data submitted'});
    res.end();
})
  
// required middleware to use index.html from public/game/index.html in the server directory
route.use(express.static('public'));
// route.use(express.static(path.join(__dirname, 'public')));

// Game runs on http://localhost:8080/game/index.html since the game is in the server/public/game directory

// module.exports = { route, addInterestedEmail }
module.exports = route