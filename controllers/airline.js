const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  view: function(req, res) {
    knex('airline').join('trip', 'airline.id', 'trip.airline_id').where('airline.id', req.params.id).where('trip.user_id', req.session.user_id).then((airline) =>{
      res.render('airline', {trips: airline})
    })
  },
}
