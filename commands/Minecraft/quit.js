module.exports.run = async (client, message, args) => {

  const user = message.author
  const Player = require("../../models/player.js");
  message.reply("Answer with \`yes\` to delete all your data from this game **(It cannot be refunded)**")
  message.channel
    .awaitMessages(m => m.author.id == message.author.id, { max: 1, time: 30000 })
    .then(collected => {
      if (collected.first().content.toLowerCase() == "yes") {
        message.reply("Deleting ur database...")
        const mongoose = require('mongoose');
        Player.findOneAndDelete({
          id: message.author.id
        }, (err, res) => {
          if (err) console.error(err)
          console.log(`${message.author.tag} (${message.author.id}) just Quit the game`);
        });

      } else message.reply("Operation canceled.");
    })
    .catch(() => {
      message.reply("No answer after 30 seconds, operation canceled.");
    })
}

module.exports.help = {
  name: "quit",
  aliases: []
}