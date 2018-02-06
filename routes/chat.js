var express = require('express');
var router = express.Router();

/* GET Chat page. */
router.get('/', function(req, res, next) {
  res.send({chat: true});
});

module.exports = router;