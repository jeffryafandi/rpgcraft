const discord = require("discord.js")
module.exports.run = async(client, msg, args) => {
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
  const embed = new discord.MessageEmbed()
  .setColor(
  
}

module.exports.help = {
  name: "profile",
  aliases: ["p"]
}
