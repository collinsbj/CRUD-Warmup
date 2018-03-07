exports.up = function(knex, Promise) {
  return knex.schema.createTable("poemz", table => {
    table.increments("id").primary();
    table.text("title");
    table.text("author");
    table.specificType("lines", "text[]");
    table.integer("likes");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("poemz");
};
