var knex = require('../knex');
var bookshelf = require('bookshelf')(knex);

var Recipe = bookshelf.Model.extend({
  tableName: 'recipe3'
});


module.exports = Recipe;
