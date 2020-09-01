const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
  id: String,
    nickname: String,
  xp: Number,
  level: Number,
  head: Number,
  body: Number,
  
  emerald: String,
});

module.exports = mongoose.model('Player', PlayerSchema, 'players');