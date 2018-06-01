
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('note').del()
    .then(function () {
      // Inserts seed entries
      return knex('note').insert([
        {trip_note: 'This trip is going to be awesome!', trip_id: 1},
        {trip_note: 'This trip is going to be awesome!', trip_id: 2},
        {trip_note: 'This trip is going to be awesome!', trip_id: 3}
      ]);
    });
};
