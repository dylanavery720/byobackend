const blackertheberry = require('../../data/blackertheberry');
const alright = require('../../data/alright');
const swimmingpools = require('../../data/swimmingpools');
const mercy = require('../../data/mercy');
const stronger = require('../../data/stronger');
const realfriends = require('../../data/realfriends');
const codeine = require('../../data/codeine');
const sorry = require('../../data/sorry');
const poppintags = require('../../data/poppintags');
const hotlinebling = require('../../data/hotlinebling');
const bottom = require('../../data/bottom');
const backtoback = require('../../data/backtoback');
const ballin = require('../../data/ballin');
const johnmuir = require('../../data/johnmuir');
const manoftheyear = require('../../data/manoftheyear');




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
      knex('songs').insert({
        id: 3,
        name: "Swimming Pools",
        artist_id: 1,
        created_at: new Date,
        lyrics: swimmingpools.lyrics
      }),
      knex('songs').insert({
        id: 4,
        name: "Mercy",
        artist_id: 2,
        created_at: new Date,
        lyrics: mercy.lyrics
      }),
      knex('songs').insert({
        id: 5,
        name: "Stronger",
        artist_id: 2,
        created_at: new Date,
        lyrics: stronger.lyrics
      }),
      knex('songs').insert({
        id: 6,
        name: "Real Friends",
        artist_id: 2,
        created_at: new Date,
        lyrics: realfriends.lyrics
      }),
      knex('songs').insert({
        id: 7,
        name: "Codeine Crazy",
        artist_id: 3,
        created_at: new Date,
        lyrics: codeine.lyrics
      }),
      knex('songs').insert({
        id: 8,
        name: "Sorry",
        artist_id: 3,
        created_at: new Date,
        lyrics: sorry.lyrics
      }),
      knex('songs').insert({
        id: 9,
        name: "Poppin Tags",
        artist_id: 3,
        created_at: new Date,
        lyrics: poppintags.lyrics
      }),
      knex('songs').insert({
        id: 10,
        name: "Hotline Bling",
        artist_id: 4,
        created_at: new Date,
        lyrics: hotlinebling.lyrics
      }),
      knex('songs').insert({
        id: 11,
        name: "Started From the Bottom",
        artist_id: 4,
        created_at: new Date,
        lyrics: bottom.lyrics
      }),
      knex('songs').insert({
        id: 12,
        name: "Back to Back",
        artist_id: 4,
        created_at: new Date,
        lyrics: backtoback.lyrics
      }),
      knex('songs').insert({
        id: 13,
        name: "Str8 Ballin",
        artist_id: 5,
        created_at: new Date,
        lyrics: ballin.lyrics
      }),
      knex('songs').insert({
        id: 14,
        name: "John Muir",
        artist_id: 5,
        created_at: new Date,
        lyrics: johnmuir.lyrics
      }),
      knex('songs').insert({
        id: 15,
        name: "Man of the Year",
        artist_id: 5,
        created_at: new Date,
        lyrics: manoftheyear.lyrics
      }),
    ]);
  });
};
