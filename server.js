const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const Clarifai = require('clarifai');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
			client: 'pg',
			connection: {
			host : '127.0.0.1',
			user : 'postgres',
			password : 'postgres',
			database : 'smartbrain'
  }
});



const app = express();

/*
/ --> res = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/Image --> PUT --> user

*/


app.use(bodyParser.json());
app.use(cors())


app.get('/',(req,res) => {res.send(database.users);})
app.post('/signin', (req, res) => {signin.handlerSignin(req,res,db,bcrypt)})
app.post('/register', (req, res) => {register.handlerRegister(req, res, db, bcrypt)})
app.get('/profile/:id', (req, res) => {profile.handlerProfile(req,res,db)})	
app.put('/image', (req, res) => {image.handlerImage(req,res,db)})
app.post('/imageurl', (req, res) => {image.handlerApiCall(req,res)})

const 

app.listen(3000, () => {
	console.log('app is running on port 3000');
})


