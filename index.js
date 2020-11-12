// const express = require("express");
// const connection = require("./server/database/Connection");

// const app = express();

// connection();

// app.use(express.json({ extended: false }));
// app.use("/api/userModel", require("./server/api/controllers/models/usermodel"));
// app.use("/models/", require("./server/api/controllers/models/usermodel"));

// const port = process.env.Port || 5000;

// app.listen(port, () => {
//   console.log(`App is running on port ${port}`);
// });
const express = require('express');
const logger = require('morgan');
const connection = require('./server/database/Connection');
const products = require('./server/routes/products');
const users = require('./server/routes/users');
var jwt = require('jsonwebtoken');

const app = express();

app.set('secretKey', 'product-store'); // jwt secret token
connection();

app.use(logger('dev'));

app.use(express.json({ extended: false }));

// public route
app.use('/users', users);
// private route
app.use('/products', validateUser, products);

app.get('/favicon.ico', function(req, res) {
  res.sendStatus(204);
});

function validateUser(req, res, next) {
jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
  if (err) {
    res.json({status:"error", message: err.message, data:null});
  }else{
    // add user id to request
    req.body.userId = decoded.id;
    next();
  }
});

}
// express doesn't consider not found 404 as an error so we need to handle 404 explicitly
// handle 404 error
app.use(function(req, res, next) {
let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// handle errors
app.use(function(err, req, res, next) {
console.log(err);

if(err.status === 404)
 res.status(404).json({message: "Not found"});
else 
  res.status(500).json({message: "Something looks wrong :( !!!"});
});

app.get('/', function (req, res) {
  res.json({ success: 'E-commerce Built' });
});

const port = process.env.Port || 5000;
app.listen(5000, function () {
  console.log(`App is running on port ${port}`);
});
