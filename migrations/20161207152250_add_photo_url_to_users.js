
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', (table) => {
      table.text('photo_url');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', (table) => {
      table.dropColumn('photo_url');
    })
  ]);
};
