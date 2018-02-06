var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile('/public/chat.html');
});

module.exports = router;
