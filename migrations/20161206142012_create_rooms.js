
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('rooms', (table) => {
      table.increments('id');
      table.string('name');
      table.integer('capacity');
      table.text('location');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('rooms')
  ]);
};
