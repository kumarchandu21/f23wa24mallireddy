var express = require('express');

var router = express.Router();


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
  
 module.exports = router;