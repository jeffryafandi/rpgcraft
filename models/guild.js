const mongoose = require('mongoose');

const guildSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    guildID: {
      type: String,
      required: true
    },
    pref: {
      type: String,
      required: true
    }
});

module.exports = mongoose.model('Guilds', guildSchema);