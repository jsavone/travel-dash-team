//Update the name of the controller below and rename the file.
const user = require("../controllers/user.js")
const airline = require("../controllers/airline.js")
const trip = require("../controllers/trip.js")
const note = require("../controllers/note.js")

module.exports = function(app){

  app.get('/', user.index);
  app.post('/login', user.login);
  app.post('/register', user.register);

  app.use(authenticateUser);
  app.get('/usertrips', user.trips);
  app.get('/newtrip', trip.display);
  app.post('/newtrip', trip.add);
  app.get('/edittrip/:id', trip.edit);
  app.post('/edittrip/:id', trip.update);
  app.get('/tripnotes/:id', note.viewnotes);
  app.post('/tripnotes/:id', note.newnote);
  app.get('/airline/:id', airline.view);

}

function authenticateUser(req, res, next){
  if(!req.session.user_id){
    res.redirect("/");
  }else{
    next();
  }
}
