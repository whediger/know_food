
exports.up = function(knex, Promise) {
    knex.schema.createTable('food_stuff', function(table){
      table.increments();
      table.text('title');
      table.text('description');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_stuff');
};
