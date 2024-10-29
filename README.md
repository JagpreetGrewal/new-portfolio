> MERN-stack portfolio website showcasing skills, projects, and a GODOT mini-game

## Running
Run `npm run start` in the server folder. An `.env` file must be in that folder with the Resend Token defined in `RESEND_URI=...`. (Do the same for `EMAIL_URI=...` and `MONGODB_URI`)

Run `npm run start` in the client folder.

## About Project
Hi! Welcome to my portfolio website. This was made using a MERN tech stack. 

**Tech Stack & Libraries:**
- *Backend:* Node.js, Express
- *Frontend:* React, JavaScript, HTML, CSS
- *Email Service:* Resend API
- *Database:* MongoDB
- *Deployment:* (if applicable) Vercel, Heroku, Netlify
- *Authentication:* (if applicable) JWT, OAuth
- *Version Control:* Git, GitHub
- *Other Libraries:* Axios (for API requests)

## Testing
Create a `server/coverage/jestVars.js` file with your `process.env.RESEND_URI="..."`, etc. variables. Run `npm run test` in the client and server folders.

## Reading Commits
From a certain point near the beginning of this project, each commit message starts with a concise title describing what changed since the previous commit. The description is broken up into different sections:
- `+` represents positive changes
- `-` represents bugs or mis-steps
- `*` represents TODO or speculation