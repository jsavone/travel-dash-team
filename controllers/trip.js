const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  display: (req, res) => {
    knex('airline').orderBy('airline_name', 'asc').then((results) => {
      res.render('newtrip', {airline:results, user_id: req.session.user_id})
    })
  },

  add: (req, res) => {
    knex('trip').insert({
      trip_name: req.body.name,
      from: req.body.from,
      to: req.body.to,
      date: req.body.date,
      user_id: req.session.user_id,
      airline_id: req.body.airline
    }).then(() => {
      res.redirect('/usertrips')
    })
  },

  edit: (req, res) => {

    knex('trip').where('id', req.params.id).then((trip) => {
      knex('airline').then((airline) => {
        res.render('edittrip', {trip:trip[0], airline:airline})
      })

    })
  },
  update: (req, res) => {
    knex('trip').where('id', req.params.id).update({
      trip_name: req.body.name,
      from: req.body.from,
      to: req.body.to,
      date: req.body.date,
      user_id: req.session.user_id,
      airline_id: req.body.airline
    }).then(() => {
      res.redirect('/usertrips')
    })
  },
}
