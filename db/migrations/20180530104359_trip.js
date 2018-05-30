
exports.up = function(knex, Promise) {
  return knex.schema.createTable("trip",(table)=>{
    table.increments();
    table.string("trip_name")
    table.string("from")
    table.string("to")
    table.date("date")
    table.integer("user_id")
      .notNullable()
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
      .index();
    table.integer("airline_id")
      .notNullable()
      .references('id')
      .inTable('airline')
      .onDelete('CASCADE')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("trip");
};
