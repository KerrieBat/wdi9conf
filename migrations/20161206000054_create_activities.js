
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('activities', (table) => {
      table.increments('id');
      table.string('title');
      table.text('description');
      table.timestamp('time');
      table.integer('speaker_id');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('activites')
  ])
};
