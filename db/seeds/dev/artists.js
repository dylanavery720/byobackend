exports.seed = function(knex, Promise) {
  return knex('artists').del()
  .then(() => {
    return Promise.all([
      knex('artists').insert({
        id: 1,
        name: 'Kendrick Lamar',
        //user_id: 1,
        created_at: new Date
      }),
      knex('artists').insert({
        id: 2,
        name: 'Kanye West',
        //user_id: 2,
        created_at: new Date
      }),
      knex('artists').insert({
        id: 3,
        name: 'Future',
        //user_id: 3,
        created_at: new Date
      }),
      knex('artists').insert({
        id: 4,
        name: 'Drake',
        //user_id: 4,
        created_at: new Date
      }),
      knex('artists').insert({
        id: 5,
        name: 'Schoolboy Q',
        //user_id: 5,
        created_at: new Date
      })
    ]);
  });
};
