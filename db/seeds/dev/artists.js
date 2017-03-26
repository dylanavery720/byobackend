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
      }),
      knex('artists').insert({
        id: 3,
        name: 'Future',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 4,
        name: 'Drake',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 5,
        name: 'Schoolboy Q',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 6,
        name: 'Charles Bukowski',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 7,
        name: 'Hunter S Thompson',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 8,
        name: 'Amiri Baraka',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 9,
        name: 'The Bible',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 10,
        name: 'Bhagavad Gita',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 11,
        name: 'Lendrick Kamar',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 12,
        name: 'Wanye Kest',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 13,
        name: 'Present',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 14,
        name: 'Aubrey',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 15,
        name: 'Qboy School',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 16,
        name: 'Bharles Cukowski',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 17,
        name: 'Tunter S Hmompson',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 18,
        name: 'Bamiri Araka',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 19,
        name: 'The Satanic Bible',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 20,
        name: 'Ghagavad Bita',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 211,
        name: 'Rick Mar',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 22,
        name: 'Ye East',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 23,
        name: 'Past',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 24,
        name: 'Aka',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 25,
        name: 'Boy W',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 26,
        name: 'Les Ski',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 27,
        name: 'Hunt Son',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 28,
        name: 'Ri Ka',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 29,
        name: 'Dylan Avery',
        created_at: new Date
      }),
      knex('artists').insert({
        id: 30,
        name: 'Sauce Saucerson',
        created_at: new Date
      })
    ]);
  });
};
