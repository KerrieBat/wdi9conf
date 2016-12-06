
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tickets', (table) => {
      table.increments('id');
      table.timestamp('date_purchased');
      table.integer('user_id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tickets')
  ]);
};
