const express = require('express')
const route = express.Router()
const { Resend } = require("resend");

// Run using node --env-file=.env index.js
// Can also run using npm run start
// modified package.json file to allow that

const myResendURI = new Resend(process.env.RESEND_URI)

route.get('/', (req, res) => {
    res.send('Hello from our server!');
    res.end();
})

route.post('/email', async (req, res) => {
    // res.send('Data submitted:', {req});
    const { data, error } = await myResendURI.emails.send({
        from: "ACME <onboarding@resend.dev>",
        to: ["jaggy1111@gmail.com"],
        subject: "Interested contact",
        html: 'Email is: <u>' + JSON.stringify(req.body.email) + ' </u>',
      });
    
    if (error) {
        console.log('Email transfer failed')
        return res.status(400).json({ error });
    } 
    // TODO: Send another email to the contact confirming receiving of email address, acknowledging the domain because you are using Resend for free, and promising to be in contact?
    // TODO: Save addresses in mongoDB (after sanitizing them)
    console.log("Req is", req.body ?? "No email transferred")
    res.json({...req.body ?? {email: "No email transferred"}, message: 'Data submitted'});
    res.end();
})

module.exports = route