var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[environment];
var knex = require('knex')(config);
var bookshelf = require('bookshelf')(knex);

// module.exports = require('knex')(config);

var User = bookshelf.Model.extend({
  tableName: 'users',
  name:'name'
  // posts: function() {
  //   return this.hasMany(Posts);
  // }
});
