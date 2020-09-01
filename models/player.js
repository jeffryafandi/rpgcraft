const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: String,
  name: String,
  gender: String,
  skin: String,
  rank: String,
  xp: Number,
  axe: Number,
  pickaxe: Number,
  sword: Number,
  level: Number,
  head: Number,
  body: Number,
  pants: Number,
  boots: Number,
  stone: Number,
  plank: Number,
  coal: Number,
  diamondore: Number,
  diamond: Number,
  obsidian: Number,
  netherite: Number,
  coal: Number,
  emerald: Number
});

module.exports = mongoose.model("Player", PlayerSchema, "players");
