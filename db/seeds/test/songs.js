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
const bluebird = require('../../data/bluebird');
const rawlove = require('../../data/rawlove');
const boundingbeats = require('../../data/boundingbeats');
const kentucky = require('../../data/kentucky');
const thewave = require('../../data/thewave');
const william = require('../../data/william');
const america = require('../../data/america');
const blackart = require('../../data/blackart');
const suicide = require('../../data/suicide');
const genesis = require('../../data/genesis');
const matthew5 = require('../../data/matthew5');
const revelation = require('../../data/revelation');
const gita1 = require('../../data/gita1');
const gita2 = require('../../data/gita2');
const gita11 = require('../../data/gita11');

exports.seed = (knex, Promise) => {
  return knex('songs').del()
  .then(() => {
    return Promise.all([
      knex('songs').insert({
        id: 1,
        name: 'The Blacker The Berry',
        artist_id: 1,
        created_at: new Date,
        lyrics: blackertheberry.lyrics
      }),
      knex('songs').insert({
        id: 2,
        name: 'Alright',
        artist_id: 1,
        created_at: new Date,
        lyrics: alright.lyrics
      }),
      knex('songs').insert({
        id: 3,
        name: 'Swimming Pools',
        artist_id: 1,
        created_at: new Date,
        lyrics: swimmingpools.lyrics
      }),
      knex('songs').insert({
        id: 4,
        name: 'Mercy',
        artist_id: 2,
        created_at: new Date,
        lyrics: mercy.lyrics
      }),
      knex('songs').insert({
        id: 5,
        name: 'Stronger',
        artist_id: 2,
        created_at: new Date,
        lyrics: stronger.lyrics
      }),
      knex('songs').insert({
        id: 6,
        name: 'Real Friends',
        artist_id: 2,
        created_at: new Date,
        lyrics: realfriends.lyrics
      }),
      knex('songs').insert({
        id: 7,
        name: 'Codeine Crazy',
        artist_id: 3,
        created_at: new Date,
        lyrics: codeine.lyrics
      }),
      knex('songs').insert({
        id: 8,
        name: 'Sorry',
        artist_id: 3,
        created_at: new Date,
        lyrics: sorry.lyrics
      }),
      knex('songs').insert({
        id: 9,
        name: 'Poppin Tags',
        artist_id: 3,
        created_at: new Date,
        lyrics: poppintags.lyrics
      }),
      knex('songs').insert({
        id: 10,
        name: 'Hotline Bling',
        artist_id: 4,
        created_at: new Date,
        lyrics: hotlinebling.lyrics
      }),
      knex('songs').insert({
        id: 11,
        name: 'Started From the Bottom',
        artist_id: 4,
        created_at: new Date,
        lyrics: bottom.lyrics
      }),
      knex('songs').insert({
        id: 12,
        name: 'Back to Back',
        artist_id: 4,
        created_at: new Date,
        lyrics: backtoback.lyrics
      }),
      knex('songs').insert({
        id: 13,
        name: 'Str8 Ballin',
        artist_id: 5,
        created_at: new Date,
        lyrics: ballin.lyrics
      }),
      knex('songs').insert({
        id: 14,
        name: 'John Muir',
        artist_id: 5,
        created_at: new Date,
        lyrics: johnmuir.lyrics
      }),
      knex('songs').insert({
        id: 15,
        name: 'Man of the Year',
        artist_id: 5,
        created_at: new Date,
        lyrics: manoftheyear.lyrics
      }),
      knex('songs').insert({
        id: 16,
        name: 'Bluebird',
        artist_id: 6,
        created_at: new Date,
        lyrics: bluebird.lyrics
      }),
      knex('songs').insert({
        id: 17,
        name: 'Raw With Love',
        artist_id: 6,
        created_at: new Date,
        lyrics: rawlove.lyrics
      }),
      knex('songs').insert({
        id: 18,
        name: 'Beats Bounding',
        artist_id: 6,
        created_at: new Date,
        lyrics: boundingbeats.lyrics
      }),
      knex('songs').insert({
        id: 19,
        name: 'The Kentucky Derby is Decadent and Depraved',
        artist_id: 7,
        created_at: new Date,
        lyrics: kentucky.lyrics
      }),
      knex('songs').insert({
        id: 20,
        name: 'The Wave',
        artist_id: 7,
        created_at: new Date,
        lyrics: thewave.lyrics
      }),
      knex('songs').insert({
        id: 21,
        name: 'Letter to William',
        artist_id: 7,
        created_at: new Date,
        lyrics: william.lyrics
      }),
      knex('songs').insert({
        id: 22,
        name: 'Somebody Blew Up America',
        artist_id: 8,
        created_at: new Date,
        lyrics: america.lyrics
      }),
      knex('songs').insert({
        id: 23,
        name: 'Black Art',
        artist_id: 8,
        created_at: new Date,
        lyrics: blackart.lyrics
      }),
      knex('songs').insert({
        id: 24,
        name: 'Preface to Suicide',
        artist_id: 8,
        created_at: new Date,
        lyrics: suicide.lyrics
      }),
      knex('songs').insert({
        id: 25,
        name: 'Genesis',
        artist_id: 9,
        created_at: new Date,
        lyrics: genesis.lyrics
      }),
      knex('songs').insert({
        id: 26,
        name: 'Matthew 5',
        artist_id: 9,
        created_at: new Date,
        lyrics: matthew5.lyrics
      }),
      knex('songs').insert({
        id: 27,
        name: 'Revelation',
        artist_id: 9,
        created_at: new Date,
        lyrics: revelation.lyrics
      }),
      knex('songs').insert({
        id: 28,
        name: 'Bhagavad Gita Chapter 1',
        artist_id: 10,
        created_at: new Date,
        lyrics: gita1.lyrics
      }),
      knex('songs').insert({
        id: 29,
        name: 'Bhagavad Gita Chapter 2',
        artist_id: 10,
        created_at: new Date,
        lyrics: gita2.lyrics
      }),
      knex('songs').insert({
        id: 30,
        name: 'Bhagavad Gita Chapter 11',
        artist_id: 10,
        created_at: new Date,
        lyrics: gita11.lyrics
      })
    ]);
  });
};
