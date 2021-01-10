const express = require('express');
const router = express.Router();
const db = require('../models')

// Get Racer List
router.get('/', (req,res) =>
    db.Racer.findAll()
        .then(racers => {
            console.log(racers)
            res.render('racers', {
                racers
            })
        })
        .catch(err => console.log(err)));


module.exports = router;