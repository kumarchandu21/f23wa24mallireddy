var express = require('express');
//const { render } = require('../app');
var router = express.Router();

/*let r1 = Math.random() * 10;
let r2 = Math.random() * 20;
let n1 = 0;
let n2 = 0;
let n3 = 0;*/

 router.get('/', function(req, res, next){
  if(Object.keys(req.query).length == 0){
    var x = Math.random();
  
  res.render('computation',{val1:`Math.fround()  is ${x} to ${Math.fround(x)}`,
val2:`Math.random() is ${x} is ${Math.round(x)}`,
val3:`Math.round() is ${x} is ${Math.round(x)}`}); 
 }
 else {
  for(let i in req.query){
    res.render('computation',{val1:`Math.fround()  to ${req.query[i]} is ${Math.fround(req.query[i])}`,
    val2:`Math.fround()  to ${req.query[i]} is ${Math.random(req.query[i])}`,val3:`Math.round() to ${req.query[i]} is ${Math.round(x)}`})
  }
}
 
});
   /*n1 = Math.round(r1);
   n2 = Math.round(r2);
   n3 = Math.round(r1);

   res.send(`Random Numbers are ${r1} and ${r2}
  
   
   \n <br>
   Rounded value of ${r1} is ${n1}
   
   \n <br>
   Rounded value of ${r2} is ${n2}
   
   `);
 });*/
 module.exports = router;