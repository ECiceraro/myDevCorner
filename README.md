# myDevCorner

myDevCorner is a MERN stack app that features the technologies I've been able to play/build stuff with and a feature rich dev community forum.

Live link: [myDevCorner](https://mydevcorner.herokuapp.com/)

## Table of contents
* App Features
* To-Do List
* Technologies
* Setup
* Deployment
* Acknowledgments


## Features
* Authentication: user can create a user account, login, and logout
* Passwords are encrypted upon creation and get hashed/salted before entering the database.
* Once a user has created an account they can login to create/delete posts and leave comments on any post within the dev forum.
* User sessions are created upon account creation or upon logging into an existing account.


## To-Do's
* Get the edit posts button working.
* Get the edit comment button working.

## Built With These Technologies
* MongoDB
* Express
* React
* NodeJS
* Bcrypt
* Moment
* Express-Session
* CORS
* Mongoose
* Body-Parser
* Axios
* Bootstrap
* React-Router
* Concurrently

## Setup

All packages are listed on each of the package-json files for both the client and the server. If you're attempting to run this locally, simply "npm i" and all necessary packages will be downloaded. I also included a script "npm run dev" to create a dev runtime environment in one terminal tab using concurrently.

## Deployment

Deploying was done through Heroku. To see docs on Heroku go to https://devcenter.heroku.com/categories/reference.

## Acknowledgments

* Thank you to Karolin and Dan for the help she offered when troubleshooting deployment and database communication, and thank you Gianni for pointing me in the right direction for deployment.
