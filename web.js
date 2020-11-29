var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(process.cwd(), 'src')));
http.listen((process.env.PORT || 5000), function(){
  console.log('listening on *:5000');
});