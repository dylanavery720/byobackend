exports.seed = function(knex, Promise) {
  return knex('artists').del()
  .then(() => {
    return Promise.all([
      knex('artists').insert({
        id: 1,
        name: 'Kendrick Lamar',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 2,
        name: 'Kanye West',
        created_at: new Date
      })
    ]);
  });
};
