const blackertheberry = require('../../data/blackertheberry');
const alright = require('../../data/alright');

exports.seed = function(knex, Promise) {
  return knex('songs').del()
  .then(() => {
    return Promise.all([
      knex('songs').insert({
        id: 1,
        name: "The Blacker The Berry",
        artist_id: 1,
        created_at: new Date,
        lyrics: blackertheberry.lyrics
      }),
      knex('songs').insert({
        id: 2,
        name: "Alright",
        artist_id: 1,
        created_at: new Date,
        lyrics: alright.lyrics
      }),
    ]);
  });
};
