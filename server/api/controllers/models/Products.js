const mongoose = require('mongoose');

const product = new mongoose.Schema({
  // or new mongoose.Schema
  name: String,
  description: String,
  price: Number,
});

const Product = mongoose.model('Product', product);

module.exports = Product;
