const express = require("express");

const app = express();

const html = require ('./routes/htmlRoutes.js');
const api = require('./routes/apiRoutes.js');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./public/"));

html(app) 

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});