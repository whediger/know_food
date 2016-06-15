
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('recipes').del(),

    // Inserts seed entries
    knex('recipes').insert({id: 1, title: 'PB&J', description: 'penutbutter and Jelly'}),
    knex('recipes').insert({id: 1, title: 'Grilled PB&J', description: 'Grilled penutbutter and Jelly'})
  );
};
