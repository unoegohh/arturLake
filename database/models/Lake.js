const {Schema} = require("mongoose");
mongoose = require("mongoose")

const lakesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  country: { type: Schema.Types.ObjectId, ref: 'countries' }
});

const Lake = mongoose.model('lakes', lakesSchema);

module.exports = Lake
