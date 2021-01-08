const mongoose = require("mongoose");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: String,
  hunt: String,
  adventure: String,
  loot: String,
  training: String
});

module.exports = mongoose.model("Custom", guildSchema, "customs");
