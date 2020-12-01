var express = require('express');
const PORT = process.env.PORT || '8080';
var app = express();
app.set("port", PORT);
var path = require('path');
app.use(express.static(path.join(process.cwd(), 'src')));
