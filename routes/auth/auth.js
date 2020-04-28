const express = require('express');
const bCrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const randToken = require('rand-token')
const tokenList = {}
const router = express.Router();

//MODELS
const userModel = require('../../models/user.model');

//VALIDATORS
const { registerValidation, loginValidation } = require('./validation');

//REGISTRATION
router.post('/registration', async (req, res) => {

    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const loginExist = await userModel.findOne({email: req.body.login})
    if (loginExist) return res.status(400).send('login already exists');


    //HASH PASSWORD
    const salt = await bCrypt.genSalt(10);
    const hashedPassword = await bCrypt.hash(req.body.password, salt)

    const user = new userModel({
        login: req.body.login,
        password: hashedPassword,
    });
    try {
        const result = await user.save();
        res.status(200).send(result);

    } catch (e) {
        res.status(500).send(e);
    }

});

//LOGIN
router.post('/login', async (req, res) => {
    let refreshTokens = {};
    //Lets Validate the data before we a user
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Checking if the email exists
    const user = await userModel.findOne({login: req.body.login})
    if (!user) return res.status(400).send('login is not found');

    //Password is correct
    const validPassword = await bCrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid Password');

    //Create and assign TOKEN
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, {expiresIn: process.env.TOKEN_LIFE});
    // const refreshToken = randToken.uid(256);
    const refreshToken = jwt.sign(req.body, process.env.REFRESH_TOKEN_SECRET, {expiresIn: process.env.REFRESH_TOKEN_LIFE});
    tokenList[refreshToken] = req.body.login;
    res.json({token: token, refreshToken, user})
});

router.post('/logout', async (req, res) => {
    delete tokenList[req.body.refreshToken];
    res.status(201).send();
});

router.post('/refresh', (req, res) => {
    const postData = req.body;
    if (postData.refreshToken && (postData.refreshToken in tokenList) && tokenList[postData.refreshToken] === postData.login) {
        const user = {
            'login': postData.login,
        };
        const token = jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: process.env.TOKEN_LIFE});
        const response = {
            'token': token
        };
        tokenList[postData.refreshToken].token = token;
        res.status(200).json(response);
    } else {
        res.status(400).send('Invalid request')
    }
});

module.exports = router;
