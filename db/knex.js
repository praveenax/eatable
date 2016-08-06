var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[environment];
var knex = require('knex')(config);
var bookshelf = require('bookshelf')(knex);

knex.schema.createTableIfNotExists('recipe3', function (recipe) {
    recipe.increments(),
    recipe.string('title'),
    recipe.timestamps(),
    recipe.text('content')
}).then(function () {

});

module.exports = require('knex')(config);
