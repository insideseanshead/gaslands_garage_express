const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models")
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gaslands_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });



app.get('/', (req,res) => res.send('INDEX'))

const PORT = process.env.PORT || 3000;

//Import Routes for controlers

// Sync sequlize models and start app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});