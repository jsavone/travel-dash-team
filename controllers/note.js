const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  viewnotes: (req, res) => {
      knex('trip').join('airline', 'airline.id', 'trip.airline_id').select('trip.id as trip_id', 'trip.trip_name', 'trip.from', 'trip.to', 'trip.date', 'trip.airline_id', 'airline.airline_name').where('trip.id', req.params.id).then((trip) => {
        knex('note').where('trip_id', req.params.id).then((notes) => {
          // res.json(trip)
          res.render('tripnotes', {notes:notes, trip:trip[0]});
        })
    })
  },

  newnote: (req, res) => {
    knex('note').insert({
      trip_note: req.body.note,
      trip_id: req.params.id
    }).then(() => {
      res.redirect('/tripnotes/'+req.params.id)
    })

  }

}
