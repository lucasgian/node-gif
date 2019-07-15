
exports.up = function(knex) {
  return knex.schema
    .createTable('gif_file', function (table) {
       table.increments('id');
       table.string('file_name', 128);
       table.string('file_tag', 68);
       table.string('file_link', 128);
       table.string('file_preview', 255);
       table.string('file_original_still', 255);
       table.boolean('file_visibility');
       table.boolean('file_key', 68).nullable();
       table.dateTime('createdAt').notNull();
       table.dateTime('updatedAt').nullable();
    });
};

exports.down = function(knex) {
  return knex.schema
      .dropTable("gif_file");
};
