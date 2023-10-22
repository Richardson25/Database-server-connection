const express = require("express"); // Faisons appel avec express
const bodyParser = require("body-parser") // Faisons appel avec body-parser

const {API_VERSION} = require("./constants") // Faisons appel avec constants

const app = express()

// import routing
// congigure Body parse

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// configure Header HTTP
// configure routing

module.exports = app;


//*** Le fichier app.js => utiliser pour gérer express