
exports.up = function (knex) {
  return knex.schema
    .createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
    })
    .createTable('incidents', function (table) {
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();

      table.string('ong_id').notNullable();
      table.foreign('ong_id').references('id').inTable('ong');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('ongs')
    .dropTable('incidents');
};
