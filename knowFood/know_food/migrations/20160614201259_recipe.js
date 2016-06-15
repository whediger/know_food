
exports.up = function(knex, Promise) {
    knex.schema.createTable('food_stuff', function(table){
      table.increments();
      table.string('title');
      table.string('description');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_stuff');
};
