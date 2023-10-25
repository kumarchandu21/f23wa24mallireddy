var express = require('express');
var router = express.Router();

let r1 = Math.random() * 10;
let r2 = Math.random() * 20;
let n1 = 0;
let n2 = 0;
let n3 = 0;

 router.get('/', function(req, res, next){
   n1 = Math.round(r1);
   n2 = Math.round(r2);
   n3 = Math.round(r1);

   res.send(`Random Numbers are ${r1} and ${r2}
   
   \n
   Rounded values are ${r1} is ${n1}
   
   \n
   Rounded values are ${r2} is ${n2}
   
   \n
   Rounded values are ${r1} is ${n3}`);
 });
 module.exports = router;