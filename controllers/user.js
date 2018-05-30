const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: (req, res) => {
    res.render("index");
  },

  login: (req, res)=>{
    knex("user").where("email", req.body.email).then((results)=>{
      let user = results[0];
      if(user.password == req.body.password){
        req.session.user_id = user.id;
        req.session.save(()=>{
        res.redirect("/usertrips")
        })
      }else{
        res.redirect("/");
      }
    })
  },

  register: (req, res) => {
    if(req.body.password == req.body.confirm) {
      knex('user').insert({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }).then(() => {
        res.redirect('/')
        return
      })
    }else{
    res.redirect('/')
    }
  },

  trips: (req, res) => {
    knex('user').where('id', req.session.user_id).then((users) => {
      let user = users[0];
      knex('trip').join('airline', 'airline.id', 'trip.airline_id').select('trip.id as trip_id', 'trip.trip_name', 'trip.from', 'trip.to', 'trip.date', 'trip.airline_id', 'airline.airline_name').where('trip.user_id', req.session.user_id).then((trips) => {
          res.render('usertrips', {user:user, trips:trips})
        })
    })
  }
}
