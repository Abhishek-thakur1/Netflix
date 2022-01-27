const router = require('express').Router();
const CryptoJS = require('crypto-js');
const User = require('../models/User');
const verify = require('../verifyToken');

// UPDATE..
router.put('/:id',verify,  async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.DES.encrypt(req.body.password, process.env.SECRET_KEY).toString()

            try {
                const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                });
                res.status(200), json(updatedUser);
            } catch (error) {
                return res.status(500).json(error)
            }
        }
    } else {
        res.status(403).json("You can update only your account!")
    }
})


module.exports = router