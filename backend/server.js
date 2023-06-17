const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const morgan = require('morgan');
const auth = require('./controllers/authorization');

// Connection for the database
const db = knex({
    client: 'pg',
    connection: process.env.POSTGRES_URI 
});

// Set up Express
const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
    res.send("ITS WORKING");
})

// Check for user
app.post('/signin', signin.signinAuthentication(db, bcrypt))

// Register a User
app.post('/register', register.handleRegister(db, bcrypt))

// Get a user from an id
app.get('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileGet(req, res, db)})
app.post('/profile/:id', auth.requireAuth, (req, res) => { profile.handleProfileUpdate(req, res, db)})

// Get the image entries
app.put('/image', auth.requireAuth, image.handleImage(db) )

// Get the image entries
app.post('/imageurl', auth.requireAuth, (req, res) => { image.handleApiCall(req, res)})

// Start the Server
app.listen(3000, () => {
    console.log('App is running on port 3000');
})
