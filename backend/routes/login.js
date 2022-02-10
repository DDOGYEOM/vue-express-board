var express = require('express');
var router = express.Router();
const maria = require('../models/db.connect');

/* GET users listing. */
router.get('/', (req, res, next) => {
    console.log('db select test');
    maria.query('select * from user', (error, results, fields) => {
      if(error) {
        console.log(error);
      }
      return res.json(results);
    })
});

router.get('/register', (req, res, next) => {
    console.log(req.body);
    res.end();
    // maria.query('select * from user', (error, results, fields) => {
    //   if(error) {
    //     console.log(error);
    //   }
    //   return res.json(results);
    // })
});


module.exports = router;
