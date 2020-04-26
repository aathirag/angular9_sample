var express = require('express');
var router = express.Router();


/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  
    res.json({"message":"Hello Athira"});
  
});


module.exports = router;
