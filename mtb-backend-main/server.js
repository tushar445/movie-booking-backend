const express = require('express')

//IMPORT ROUTES
const userRouter = require('./routes/users');
const theatreRouter = require('./routes/theatre');
const movieRouter = require('./routes/movies');
const showtimeRouter = require('./routes/showtime');
const reservationRouter = require('./routes/reservation');
const invitationsRouter = require('./routes/invitations');

// Database Connection
require('./db/mongoose');

const app = express();
app.disable('x-powered-by');
const port = process.env.PORT || 8080;

// API ENDPOINT ROUTES
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization'
  );

  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});
app.use(express.json());
app.use(userRouter);
app.use(theatreRouter);
app.use(movieRouter);
app.use(showtimeRouter);
app.use(reservationRouter);
app.use(invitationsRouter);

//Home Page API ENDPOINT
app.get('/', (req, res) => {
  res.json({"status": "OK"})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})