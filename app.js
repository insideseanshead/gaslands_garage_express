const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models")
const { Sequelize } = require('sequelize');

// Database
const dataBase = require('./config/database')

// Index Route
app.get('/', (req,res) => res.send('INDEX'))

// Garage Routes


const PORT = process.env.PORT || 3000;

// Sync sequlize models and start app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});