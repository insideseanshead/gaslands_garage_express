const express = require('express');
const router = express.Router();
const db = require('../config/database')
const Racer = require('../models/racer')

// Get Racer List
router.get('/', (req,res) =>
    Racer.findAll()
        .then(racers => {
            res.render('racers', {
                racers
            })
        })
        .catch(err => console.log(err)));


module.exports = router;