var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', (req, res) => {
  res.json({msg: 'This is CORS-enabled for all origins!'})
  // res.render('index', { title: 'Express' });
});


module.exports = router;
