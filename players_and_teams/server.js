const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();


app.use(bodyParser.json());
app.use(express.static(path.resolve('client')));
app.use(express.static(path.resolve('bower_components')));

app.listen(port, () => console.log(`Listening on port: ${port}`));
