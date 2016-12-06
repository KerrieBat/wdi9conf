
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('bookings', (table) => {
      table.increments('id');
      table.integer('ticket_id');
      table.integer('activity_id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('bookings')
  ]);
};
