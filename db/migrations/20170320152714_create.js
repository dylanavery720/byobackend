
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTable('users', function(table) {
          table.increments('id').primary();
          table.string('first_name');
          table.string('last_name');
          table.string('email');

          table.timestamps();
        }),

        knex.schema.createTable('artists', function(table) {
            table.increments('id').primary();
            table.string('name');
            // table.integer('user_id')
            //      .references('id')
            //      .inTable('users');
            table.timestamps();
        }),

        knex.schema.createTable('songs', function(table){
            table.increments('id').primary();
            table.string('name');
            table.string('lyrics', 12000);
            table.integer('artist_id')
                 .references('id')
                 .inTable('artists');

            table.timestamps();
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
      knex.schema.dropTable('songs'),
        knex.schema.dropTable('artists'),
        knex.schema.dropTable('users')
    ])
};
