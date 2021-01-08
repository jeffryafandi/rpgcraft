const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: String,
  monster: Number,
  cooldown: Number,
  player: Number
});

module.exports = mongoose.model("Client", clientSchema, "clients");
