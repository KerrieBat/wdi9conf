
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('activities', (table) => {
      table.foreign('speaker_id').references('id').inTable('users');
      table.integer('room_id').references('id').inTable('rooms');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('activities', (table) => {
      table.dropForeign('speaker_id');
      table.dropForeign('room_id');

      table.dropColumn('room_id');
    })
  ]);
};
