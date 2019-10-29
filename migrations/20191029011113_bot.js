exports.up = function(knex) {
  return knex.schema
    .createTable('bot', function (table) {
       table.increments('id');
       table.string('content', 1024).notNullable();
       table.dateTime('createdAt').notNull();
       table.dateTime('updatedAt').nullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("bot");
};
