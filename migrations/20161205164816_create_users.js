
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('username');
      table.string('first_name');
      table.string('last_name');
      table.string('email');
      table.string('phone_no');
      table.string('password');
      table.text('bio');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users')
  ]);
};
