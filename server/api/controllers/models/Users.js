// const mongoose = require('mongoose');

// const user = new mongoose.Schema({
//   name: String,
//   email: String,
//   username: String,
//   auth0_id: String,
// });

// const User = mongoose.model('user', user);
// module.exports = User;

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

// hash user password before saving into database
UserSchema.pre('save', (next) => {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

module.exports = mongoose.model('User', UserSchema);
