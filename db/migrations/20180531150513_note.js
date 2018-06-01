
exports.up = function(knex, Promise) {
  return knex.schema.createTable("note",(table)=>{
    table.increments();
    table.text("trip_note")
    table.integer("trip_id")
      .notNullable()
      .references('id')
      .inTable('trip')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("note");
};
