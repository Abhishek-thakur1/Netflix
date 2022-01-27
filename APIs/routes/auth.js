const router = require('express').Router();
const User = require('../models/User')
var CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')

// register...
router.post('/register', async(req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.DES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    })
    try {
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// logIn.....
router.post('/logIn', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(401).json('Wrong username & password combination!')

        var bytes  = CryptoJS.DES.decrypt(user.password, process.env.SECRET_KEY);
        var originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        originalPassword !== req.body.password && res.status(401).json('Wrong username & password combination!')

        const accessToken = jwt.sign({ id: user._id, isAdmin: user.admin }, process.env.SECRET_KEY, { expiresIn: '7d' });


        const { password, ...info }= user._doc
        res.status(200).json({...info, accessToken});

    } catch (err) {
        res.status(500).json(err.message)
    }

})

module.exports = router