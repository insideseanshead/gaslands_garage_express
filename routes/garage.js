const express = require('express');
const router = express.Router();
const db = require('../config/database')
const Racer = require('../models/racer')

// Get Racer List