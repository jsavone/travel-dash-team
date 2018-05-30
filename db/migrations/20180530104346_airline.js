
exports.up = function(knex, Promise) {
  return knex.schema.createTable("airline",(table)=>{
   table.increments(); // Creates id column
   table.string("airline_name");
   table.text("img_url");
   table.text("description")
   table.timestamps(true, true); // Creates created_at and updated_at columns to use as timestamps
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("airline");
};
