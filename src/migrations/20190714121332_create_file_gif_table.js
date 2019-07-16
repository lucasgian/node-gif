
exports.up = function(knex) {
  return knex.schema
    .createTable('gif_file', function (table) {
       table.increments('id');
       table.string('file_name', 128);
       table.string('file_tag', 68).notNull().defaultTo('without');
       table.string('file_link', 128).unique();
       table.text('file_original_still');
       table.boolean('file_visibility').notNull().defaultTo(false);;
       table.boolean('file_key', 68).nullable();
       table.dateTime('dateLimit').notNull();
       table.dateTime('createdAt').notNull();
       table.dateTime('updatedAt').nullable();
    });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("gif_file");
};
