const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models")
const { Sequelize } = require('Sequelize');
var Handlebars = require('handlebars')
var {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')


// Database
const dataBase = require('./config/database')

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: "main", handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Index Route
app.get('/', (req,res) => res.send('Test'))

// Garage Routes
app.use('/garage', require('./routes/garage'))

const PORT = process.env.PORT || 3000;


// Sync sequlize models and start app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});