const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const app = express();
const axios = require('axios');

app.use(cors());

const DB = "mongodb+srv://rinimenon:rini@cluster0.p0p3uiq.mongodb.net/?mernstack=true&w=majority";

mongoose.connect(DB).then(() => {
  console.log("connection successful!!!");
}).catch((err) => console.log("No connection"));

app.get('/', (req, res) =>{
  res.status(201).send("Hello world form the server");
})
console.log("Hii");

app.get('/about', (req, res) =>
{
  res.status(201).send("Hello about form the server");
})

app.post('/signin',(req, res) =>
{
  res.status(201).send("User Loggedin!!");
})

app.post('/sign-up', (req, res) =>
{
  res.status(201).send("User Registered successfully!");
})
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });

});

//signup


app.listen(8080, () => console.log('server is running '));
