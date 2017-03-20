exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(() => {
    return Promise.all([
      knex('songs').insert({
        id: 1,
        name: "The Blacker tTe Berry",
        artist_id: 1,
        created_at: new Date
      }),
      knex('songs').insert({
        id: 2,
        name: "Alright",
        artist_id: 1,
        created_at: new Date
      }),
      knex('songs').insert({
        id: 3,
        name: "Ultralight Beam",
        artist_id: 2,
        created_at: new Date
      })
    ]);
  });
};
