var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });  //渲染  渲染index模板，同时把数据传递给模板
});

module.exports = router;
