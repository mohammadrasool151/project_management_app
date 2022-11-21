const dotenv = require("dotenv")
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())

dotenv.config({ path: './config.env' });

require('./db/conn');


app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;





app.get('/', (req, res) => {    
    res.send(`Hello world from the server`);
}) ;
// app.get('/about', middleware , (req, res) => {    
//     res.send(`Hello world About from the server`);
// }) ;
app.get('/contact', (req, res) => {  
    res.cookie("aTest", "ashtoshtoken")
    res.send(`Hello world Contact from the server`);
}) ;
app.get('/signin', (req, res) => {    
    res.send(`Hello world Login from the server`);
}) ;
app.get('/signup', (req, res) => {    
    res.send(`Hello world Registration from the server`);
}) ;


app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
})