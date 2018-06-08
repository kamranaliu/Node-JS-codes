var express = require('express');
var app = express();

var transfer=require('./secondfile.js');
app.use('/kaami' ,transfer );
app.listen (3000);
