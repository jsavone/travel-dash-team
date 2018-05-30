
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('airline').del()
    .then(function () {
      // Inserts seed entries
      return knex('airline').insert([
        {airline_name: 'Southwest', img_url: 'http://kidsonaplane.com/wp-content/uploads/2012/08/Southwest-Airlines-logo.jpg', description: 'Cheap, but good.'},
        {airline_name: 'United', img_url: 'http://i.bnet.com/blogs/united_continental_new_logo.gif', description: "We'll beat you up, and leave you wanting more."},
        {airline_name: 'Delta', img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Delta_logo.svg/2000px-Delta_logo.svg.png', description: 'Overpriced, and no snacks.'}
      ]);
    });
};
