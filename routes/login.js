var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/',function(req,res,next){
    console.log(req.body.login_id + " " + req.body.password);
});

module.exports = router;