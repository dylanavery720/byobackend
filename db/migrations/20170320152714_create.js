exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('email');

      table.timestamps();
    }),

    knex.schema.createTable('artists', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.timestamps();
    }),

    knex.schema.createTable('songs', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('lyrics', 52000);
      table.integer('artist_id')
                 .references('id')
                 .inTable('artists');

      table.timestamps();
    })
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('songs'),
    knex.schema.dropTable('artists'),
    knex.schema.dropTable('users')
  ])
};
