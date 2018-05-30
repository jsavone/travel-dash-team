
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trip').del()
    .then(function () {
      // Inserts seed entries
      return knex('trip').insert([
        {trip_name: "Guys Trip", from: 'PHX', to: "LAX", date:'05/30/2019', user_id: 1, airline_id: 1},
        {trip_name: "Business Trip", from: 'VEGAS', to: "LAX", date:'06/13/2018', user_id: 2, airline_id: 2},
        {trip_name: "Family Trip", from: 'PHX', to: "NEW ORLEANS", date:'09/24/2018', user_id: 3, airline_id: 3}
      ]);
    });
};
