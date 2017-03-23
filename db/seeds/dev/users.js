const fakeUsers =
  [{
  "id": 1,
  "first_name": "Kathryn",
  "last_name": "Stanley",
  "email": "kstanley0@webeden.co.uk"
}, {
  "id": 2,
  "first_name": "Raymond",
  "last_name": "Burke",
  "email": "rburke1@about.me"
}, {
  "id": 3,
  "first_name": "Fred",
  "last_name": "Flores",
  "email": "fflores2@noaa.gov"
}, {
  "id": 4,
  "first_name": "Victor",
  "last_name": "Gilbert",
  "email": "vgilbert3@smugmug.com"
}, {
  "id": 5,
  "first_name": "Michael",
  "last_name": "Black",
  "email": "mblack4@opensource.org"
}, {
  "id": 6,
  "first_name": "Louis",
  "last_name": "Morales",
  "email": "lmorales5@patch.com"
}, {
  "id": 7,
  "first_name": "Sarah",
  "last_name": "Stone",
  "email": "sstone6@wunderground.com"
}, {
  "id": 8,
  "first_name": "Ashley",
  "last_name": "Mitchell",
  "email": "amitchell7@mashable.com"
}, {
  "id": 9,
  "first_name": "Lois",
  "last_name": "Dunn",
  "email": "ldunn8@infoseek.co.jp"
}, {
  "id": 10,
  "first_name": "Julie",
  "last_name": "Peterson",
  "email": "jpeterson9@usa.gov"
}, {
  "id": 11,
  "first_name": "Christina",
  "last_name": "Hansen",
  "email": "chansena@icio.us"
}, {
  "id": 12,
  "first_name": "Patrick",
  "last_name": "Lopez",
  "email": "plopezb@gravatar.com"
}, {
  "id": 13,
  "first_name": "Paul",
  "last_name": "Garza",
  "email": "pgarzac@scientificamerican.com"
}, {
  "id": 14,
  "first_name": "Janice",
  "last_name": "Barnes",
  "email": "jbarnesd@tiny.cc"
}, {
  "id": 15,
  "first_name": "Carol",
  "last_name": "Hernandez",
  "email": "chernandeze@pbs.org"
}, {
  "id": 16,
  "first_name": "Kimberly",
  "last_name": "Weaver",
  "email": "kweaverf@narod.ru"
}, {
  "id": 17,
  "first_name": "Jean",
  "last_name": "Kelley",
  "email": "jkelleyg@surveymonkey.com"
}, {
  "id": 18,
  "first_name": "Pamela",
  "last_name": "Kelley",
  "email": "pkelleyh@fastcompany.com"
}, {
  "id": 19,
  "first_name": "Roy",
  "last_name": "Bradley",
  "email": "rbradleyi@marriott.com"
}, {
  "id": 20,
  "first_name": "Henry",
  "last_name": "Gordon",
  "email": "hgordonj@discuz.net"
}, {
  "id": 21,
  "first_name": "Carl",
  "last_name": "Bishop",
  "email": "cbishopk@gizmodo.com"
}, {
  "id": 22,
  "first_name": "Benjamin",
  "last_name": "Hall",
  "email": "bhalll@bloomberg.com"
}, {
  "id": 23,
  "first_name": "Andrea",
  "last_name": "Garrett",
  "email": "agarrettm@smh.com.au"
}, {
  "id": 24,
  "first_name": "Frances",
  "last_name": "Burke",
  "email": "fburken@gizmodo.com"
}, {
  "id": 25,
  "first_name": "Gary",
  "last_name": "Austin",
  "email": "gaustino@businessweek.com"
}, {
  "id": 26,
  "first_name": "Linda",
  "last_name": "Franklin",
  "email": "lfranklinp@netscape.com"
}, {
  "id": 27,
  "first_name": "Laura",
  "last_name": "Thomas",
  "email": "lthomasq@upenn.edu"
}, {
  "id": 28,
  "first_name": "Cheryl",
  "last_name": "Weaver",
  "email": "cweaverr@moonfruit.com"
}, {
  "id": 29,
  "first_name": "Norma",
  "last_name": "Jackson",
  "email": "njacksons@pcworld.com"
}, {
  "id": 30,
  "first_name": "Melissa",
  "last_name": "Ramos",
  "email": "mramost@yale.edu"
}]







exports.seed = function(knex, Promise) {
  return knex('users').del()
  .then(() => {
    return Promise.all([
      knex('users').insert({
        id: fakeUsers[0].id,
        first_name: fakeUsers[0].first_name,
        last_name: fakeUsers[0].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[1].id,
        first_name: fakeUsers[1].first_name,
        last_name: fakeUsers[1].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[2].id,
        first_name: fakeUsers[2].first_name,
        last_name: fakeUsers[2].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[3].id,
        first_name: fakeUsers[3].first_name,
        last_name: fakeUsers[3].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[4].id,
        first_name: fakeUsers[4].first_name,
        last_name: fakeUsers[4].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[5].id,
        first_name: fakeUsers[5].first_name,
        last_name: fakeUsers[5].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[6].id,
        first_name: fakeUsers[6].first_name,
        last_name: fakeUsers[6].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[7].id,
        first_name: fakeUsers[7].first_name,
        last_name: fakeUsers[7].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[8].id,
        first_name: fakeUsers[8].first_name,
        last_name: fakeUsers[8].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[9].id,
        first_name: fakeUsers[9].first_name,
        last_name: fakeUsers[9].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[10].id,
        first_name: fakeUsers[10].first_name,
        last_name: fakeUsers[10].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[11].id,
        first_name: fakeUsers[11].first_name,
        last_name: fakeUsers[11].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[12].id,
        first_name: fakeUsers[12].first_name,
        last_name: fakeUsers[12].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[13].id,
        first_name: fakeUsers[13].first_name,
        last_name: fakeUsers[13].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[14].id,
        first_name: fakeUsers[14].first_name,
        last_name: fakeUsers[14].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[15].id,
        first_name: fakeUsers[15].first_name,
        last_name: fakeUsers[15].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[16].id,
        first_name: fakeUsers[16].first_name,
        last_name: fakeUsers[16].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[17].id,
        first_name: fakeUsers[17].first_name,
        last_name: fakeUsers[17].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[18].id,
        first_name: fakeUsers[18].first_name,
        last_name: fakeUsers[18].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[19].id,
        first_name: fakeUsers[19].first_name,
        last_name: fakeUsers[19].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[20].id,
        first_name: fakeUsers[20].first_name,
        last_name: fakeUsers[20].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[21].id,
        first_name: fakeUsers[21].first_name,
        last_name: fakeUsers[21].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[22].id,
        first_name: fakeUsers[22].first_name,
        last_name: fakeUsers[22].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[23].id,
        first_name: fakeUsers[23].first_name,
        last_name: fakeUsers[23].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[24].id,
        first_name: fakeUsers[24].first_name,
        last_name: fakeUsers[24].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[25].id,
        first_name: fakeUsers[25].first_name,
        last_name: fakeUsers[25].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[26].id,
        first_name: fakeUsers[26].first_name,
        last_name: fakeUsers[26].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[27].id,
        first_name: fakeUsers[27].first_name,
        last_name: fakeUsers[27].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[28].id,
        first_name: fakeUsers[28].first_name,
        last_name: fakeUsers[28].last_name,
        created_at: new Date
      }),
      knex('users').insert({
        id: fakeUsers[29].id,
        first_name: fakeUsers[29].first_name,
        last_name: fakeUsers[29].last_name,
        created_at: new Date
      })
    ]);
  });
};
