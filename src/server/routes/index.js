var express = require('express');
var router = express.Router();
var app = express();

var bodyParser = require('body-parser');
var Promise = require('bluebird');

var pg = require('pg');
var knex = require('../../../db/knex');
var passport = require('../lib/passport');
var bcrypt = require('bcrypt');
var helpers = require('../lib/helpers');
var bookshelf = require('bookshelf')(knex);

//load models
var Recipe = require('../../../db/models/Recipe');


app.set('bookshelf', bookshelf);

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

app.use(allowCrossDomain);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));


//defining bookshel models



app.use('/client', express.static(__dirname + '/client'));

router.get('/', function(req, res, next) {

  res.render('index', { title: 'Eatables' });
});

router.get('/list', function(req, res, next) {
  //returns a list
  //QUERY - select dishes from dishes_list
  new Recipe().fetchAll()
    .then(function(articles) {
      res.send(articles.toJSON());
    }).catch(function(error) {
      console.log(error);
      res.send('An error occured');
    });

  var obj = { a: 1 };
  var result = JSON.stringify(obj);

  // res.render('index', { title: 'Eatables' });
  // res.send(result);
});

///documents/:format/:type
router.get('/recipe/:title/:content', function(req, res, next) {
  //returns a list
  //QUERY - select dishes from dishes_list
  // new Recipe().fetchAll()
  //   .then(function(articles) {
  //     res.send(articles.toJSON());
  //   }).catch(function(error) {
  //     console.log(error);
  //     res.send('An error occured');
  //   });

  var format = req.params.title,
       type = req.params.content;

  var obj = { a: format,b: type };
  var result = JSON.stringify(obj);

  // knex('recipe').insert({title: format,content:type})

  new Recipe({title: format,content:type}).save().then(function(model) {
   console.log(model);
  });

  // res.render('index', { title: 'Eatables' });
  res.send(result);
});


module.exports = router;
