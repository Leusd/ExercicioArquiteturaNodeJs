var express = require('express');
var router = express.Router();
let users = { items: [] }

router.post('/', (req, res) => {
  users.items.push(req.body)
  res.send('Ok!');
})

module.exports = router;
