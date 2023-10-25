var express = require('express');
var router = express.Router();

let r1 = Math.random() ;
let r2 = Math.random() ;
let n1 = 0;
let n2 = 0;
let n3 = 0;

 router.get('/', function(req, res, next){
   n1 = Math.round(r1);
   n2 = Math.round(r2);
   n3 = Math.round(r1);

   res.send(`Random Numbers ${r1} and ${r2}
   Rounded values are ${r1} is ${n1}
   rounded values are ${r2} is ${n2}
   rounded values are ${r1} is ${n3}`);
 });
 module.exports = router;