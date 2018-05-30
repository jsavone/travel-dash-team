
exports.up = function(knex, Promise) {
  return knex.schema.createTable("user",(table)=>{
   table.increments(); // Creates id column
   table.string("name");
   table.string("email");
   table.string("password");
   table.timestamps(true, true); // Creates created_at and updated_at columns to use as timestamps
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
