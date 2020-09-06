const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ac: Boolean,
  id: String,
  name: String,
  gender: String,
  skin: String,
  rank: String,
  hp: Number,
  hunger: Number,
  xp: Number,
  level: Number,
  cdarea: Number,
  biome: Number,
  axe: Number,
  pickaxe: Number,
  sword: Number,
  chopcount: Number,
  minecount: Number,
  pvpcount: Number,
  fightcount: Number,
  craftcount: Number,
  rotten: Number,
  armor: Number,
  stone: Number,
  dirt: Number,
  log: Number,
  stick: Number,
  coal: Number,
  goldore: Number,
  ironore: Number,
  iron: Number,
  diamond: Number,
  gold: Number,
  lapiz: Number,
  obsidian: Number,
  netherite: Number,
  coal: Number,
  emerald: Number
});

module.exports = mongoose.model("Player", PlayerSchema, "players");
