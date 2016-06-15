
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_stuff', function(table){
      food_stuff.increments();
      food_stuff.text('title');
      food_stuff.text('description');
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_stuff');
};
