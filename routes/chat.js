var express = require('express');
var router = express.Router();

/* GET Chat page. */
router.get('/', function(req, res, next) {
  res.sendFile('/');
});

module.exports = router;