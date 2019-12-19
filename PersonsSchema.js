var mongoose = require("mongoose");
//schema 
var schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true,
    unique: true
  },
  dob: {
    type: Date,
  }
});

var user = new mongoose.model("employees", schema);

module.exports = user;
