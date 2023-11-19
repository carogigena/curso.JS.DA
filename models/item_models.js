const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  //_id: {type: String, required: true},
  username: String,
  password: String,
  name: String,
  lastname: String,
  email: String
});

module.exports = mongoose.model('users', itemSchema);


