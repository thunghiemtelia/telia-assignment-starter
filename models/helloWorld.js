var mongoose = require("mongoose");

var helloWorldSchema = new mongoose.Schema({
  helloWorld: String
});

module.exports = mongoose.model("helloworld", helloWorldSchema);
