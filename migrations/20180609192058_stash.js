
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stash', function (table) {
    table.increments('id').primary();
    table.string('yarn');
    table.string('brand');
    table.string('quantity');
    table.string('colourway');
    table.string('nearest_colour');
    table.string('weight');
    table.string('fibre_content');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stash')
};