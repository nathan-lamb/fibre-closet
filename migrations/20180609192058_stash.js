
exports.up = function(knex, Promise) {
  return knex.schema.createTable('stash', function (table) {
    table.increments('id').primary();
    table.string('yarn');
    table.string('brand');
    table.string('quantity');
    table.string('colourway');
    table.string('nearest colour');
    table.string('weight');
    table.string('fibre content');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('stash')
};