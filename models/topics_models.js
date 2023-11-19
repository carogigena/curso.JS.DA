const mongoose = require('mongoose');
const itemTopics = new mongoose.Schema({
  //_id: {type: String, required: true},
  subject: String,
  text: String,
  comments:{userName:String, comment:String},
});

module.exports = mongoose.model('topics', itemTopics);


