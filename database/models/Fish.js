mongoose = require("mongoose")

const fishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});

const Fish = mongoose.model('fishes', fishSchema);

module.exports = Fish
