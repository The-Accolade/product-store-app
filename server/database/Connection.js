const mongoose = require('mongoose');

const URI =
  'mongodb+srv://dbUser:remove@cluster0.eb9fu.mongodb.net/<dbname>?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database connected!');
  } catch (err) {
    await console.error(err.message);
  }
};

module.exports = connectDB;
