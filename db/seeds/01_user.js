
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Erik', email: 'erik@email.com', password: 'pw'},
        {name: 'John', email: 'john@email.com', password: 'pw'},
        {name: 'Test', email: 'test@email.com', password: 'pw'}
      ]);
    });
};
