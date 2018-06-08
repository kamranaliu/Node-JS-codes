var express = require('express');
var router=express.Router();
router.get('/a',function(req,res){
   res.sendfile('page.html');
  });
router.get('/b',function(req,res){
   res.send('hello2');
  });
module.exports=router;
