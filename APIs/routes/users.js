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
                }, {new : true});
                res.status(200).json(updatedUser);
            } catch (error) {
                return res.status(500).json(error)
            }
        }
    } else {
        res.status(403).json("You can update only your account!")
    }
})

// delete
router.delete('/:id',verify,  async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User deleted!");
            } catch (error) {
                res.status(500).json(error)
            }
    } else {
        res.status(403).json("You can delete only your account!")
    }
})

// get
router.get('/find/:id',  async (req, res) => {
        
            try {
                const user = await User.findById(req.params.id);
                const { password, ...info }= user._doc
                res.status(200).json(info);
            } catch (error) {
                res.status(500).json(error)
            }
})

// get all
router.get('/', verify, async (req, res) => {
    const query = req.query.new
    if ( req.user.isAdmin) {
        try {
            const users = query ? await User.find().sort({_id:-1}).limit(20) : await User.find();
                res.status(200).json(users);
            } catch (error) {
                res.status(500).json(error)
            }
    } else {
        res.status(403).json("You are not allowed!")
    }
})
// user stats...
router.get('/stats', async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1)

    const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'september', 'October', 'November', 'December']

    try {
        const data = await User.aggregate([
            { 
                $project: { 
                    month: { $month: "$createdAt"},
                }
            },
            { 
                $group: { 
                    _id: "$month",
                    total: {$sum: 1}
                }
            }
        ])
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})




module.exports = router