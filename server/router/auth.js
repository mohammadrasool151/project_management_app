const jwt = require('jsonwebtoken')
const express = require('express');
const bcrypt = require('bcryptjs')
const router = express.Router();
const authenticate = require("../middleware/authenticate")


require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});



// Async - Await 
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Plz filled the field properly" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }
        const user = new User({ name, email, phone, work, password, cpassword });
        // yaha pe
        await user.save();

        // console.log(`${user} user Registered successfully`);
        // console.log(userRegister);

        
        res.status(201).json({ message: "user registered successfuly" });
    } catch (err) {
        console.log(err);

    }
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.email);
    // console.log(name);
    // res.json({message:req.body})
    // res.send("my registered page");
});

router.post('/signin', async (req, res) => {
    //  console.log(req.body);
    //  res.json({message: "awesome"});
    
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Plz Filled the data" })
        }
        const userLogin = await User.findOne({ email : email })
        
        // console.log(userLogin)

                // if (!userLogin) {
            
        //     res.status(400).json({error: "user Error"});
        // } else {
        //     res.json({message: "user signin successfully"});   
        // }

        if (userLogin) {
        
        const isMatch = await bcrypt.compare(password, userLogin.password)

        const token = await userLogin.generateAuthToken();
        console.log(token)


        res.cookie("jwtoken", token, {
            expires: new Date(Date.now()+ 25892000000),
            httpOnly:true
        });

        if (!isMatch) {
            
            res.status(400).json({error: "password not matched"});
        } else {
            res.json({message: "user signin successfully pswd"});
            
        }
    }  else {
        res.status(400).json({message: "Inalid credientials"});
        
    }


    } catch (err) {
        console.log(err);
    }
    
});

//  about us ka page 
router.get('/about', authenticate , (req, res) => {    
    // res.send(`Hello world About from the server`);
    console.log(`Hello world About from the server`);
    res.send(req.rootUser);

}) ;


module.exports = router;