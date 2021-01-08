module.exports.run = async (client, msg, args) => {

  const Player = require("../../models/player.js")
  const db = await Player.findOne(
    {
      id: msg.author.id
    },
    (err, gg) => {
      if (err) console.error(err);
      if (!gg) {
        return msg.channel.send(client.config.start)
      }
    });
  
  msg.reply("Answer with \`yes\` to delete all your data from this game **(It cannot be refunded)**")
  msg.channel
    .awaitMessages(m => m.author.id == msg.author.id, { max: 1, time: 30000 })
    .then(collected => {
      if (collected.first().content.toLowerCase() == "yes") {
        msg.reply("Success Deleting your database..")
        const mongoose = require('mongoose');
        Player.findOneAndDelete({
          id: msg.author.id
        }, (err, res) => {
          if (err) console.error(err)
          console.log(`${msg.author.tag} (${msg.author.id}) just Quit the game`);
        });
       client.util.client(client.user.id).then(async(m)=>{
         await m.updateOne({player: m.player - 1})
       })
      } else msg.channel.send("Operation canceled.");
    })
    .catch(() => {
      msg.reply("No answer after 30 seconds, operation canceled.");
    })
}

module.exports.help = {
  name: "quit",
  aliases: []
}