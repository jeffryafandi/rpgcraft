const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: String,
  dragon: String,
  wither: String,
  ads: String
});

module.exports = mongoose.model('Guild', guildSchema, 'guilds');