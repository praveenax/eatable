var knex = require('../knex');
var bookshelf = require('bookshelf')(knex);

var Recipe = bookshelf.Model.extend({
  tableName: 'recipe2'
});


module.exports = Recipe;
