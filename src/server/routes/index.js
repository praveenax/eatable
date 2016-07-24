var express = require('express');
var router = express.Router();
var app = express();
var pg = require('pg');
var knex = require('../../../db/knex');
var passport = require('../lib/passport');
var bcrypt = require('bcrypt');
var helpers = require('../lib/helpers');
var bookshelf = require('bookshelf')(knex);

app.use('/client', express.static(__dirname + '/client'));

router.get('/', function(req, res, next) {

  res.render('index', { title: 'Eatables' });
});

router.get('/list', function(req, res, next) {
  //returns a list
  //QUERY - select dishes from dishes_list
  


  res.render('index', { title: 'Eatables' });
});



module.exports = router;
