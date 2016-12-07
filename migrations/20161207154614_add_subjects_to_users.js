
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', (table) => {
      table.string('mentoring');
      table.string('learning');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('users', (table) => {
      table.dropColumn('mentoring');
      table.dropColumn('learning');
    })
  ]);
};
