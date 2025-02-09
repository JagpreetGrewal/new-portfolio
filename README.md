> MERN-stack portfolio website showcasing skills, projects, and a GODOT mini-game

## Running
Run `npm run local_start` in the server folder. An `.env` file must be in that folder with the Resend Token defined in `RESEND_URI=...`. (Do the same for `EMAIL_URI=...` and `MONGODB_URI`)

Run `npm run start` in the client folder.

## About Project
Hi! Welcome to my portfolio website. This was made using a MERN tech stack. 

**Tech Stack & Libraries:**
- *Backend:* Node.js, Express
- *Frontend:* React, JavaScript, HTML, CSS
- *Email Service:* Resend API
- *Database:* MongoDB
- *Deployment:* Heroku, Netlify
- *Version Control:* Git, GitHub
- *Other Libraries:* Axios (for API requests), Jest (for testing)

## Hosting on Heroku
### MongoDB
First, create a MongoDB collection. You do not need to set schema validation rules. The inserted documents will have the following fields:
- `_id`: Object
- - `email`: "interestedEmail@email.com"
- `contacted`: false

### Heroku
The server folder must be pushed directly to Heroku with `git subtree push --prefix server heroku master`

Go to the settings for your Heroku app and set the following config variables with their tokens:
- `EMAIL_URI` = The email you signed up with for Resend (if using the free version)
- `MONGODB_URI` = Your MongoDB connection string to your collection
- `RESEND_URI` = Your Resend token

It may be necessary to set `PROJECT_PATH` to `server`.

## Hosting on Netlify
Give Netlify access to your cloned repository. The client folder must be accessed only. Change the following in the Deploy settings:
- Set the base directory to `client`
- Set the build command to `npm run build`
- Set the publish directory to `client/build`

In the environment variables, set `REACT_APP_SERVER_URI` to the url given for your deployed Heroku app.

## Testing
Create a `server/coverage/jestVars.js` file with your `process.env.RESEND_URI="..."`, etc. variables. Run `npm run test` in the client and server folders.

## Reading Commits
Some commit messages starts with a concise title describing what changed since the previous commit(s). The description is broken up into different sections:
- `+` represents positive changes
- `-` represents bugs or mis-steps
- `*` represents TODO or speculation