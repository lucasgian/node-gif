
exports.up = function(knex) {
  return knex.schema
   .createTable('gif_visits', function (table) {
      table.increments('id');
      table.string('visi_ip', 16).notNullable();
      table.integer('visi_count', 11).notNullable();
      table.dateTime('createdAt').notNull();
      table.dateTime('updatedAt').nullable();
   });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("gif_visits");
};

exports.config = { transaction: false };
