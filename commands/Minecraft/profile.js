const discord = require("discord.js")
module.exports.run = async(client, msg, args) => {
  const Player = require("../../models/player.js")
  let user = msg.mentions.users.first() || await client.users.fetch(args[0]).catch(() => null) || client.users.cache.find(x => x.tag.toLowerCase() === args.slice(0).join(" ").toLowerCase()) || client.users.cache.find(x => x.username.toLowerCase() === args.slice(0).join(" ").toLowerCase()) || msg.author
  const db = await Player.findOne(
    {
      id: user.id
    },
    (err, gg) => {
      if (err) console.error(err);
      if (!gg) {
        if (user.id !== msg.author.id) return msg.channel.send("That user is not playing this game")
        return msg.channel.send(client.config.start)
      }
    });
  const embed = new discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${user.username}'s Profile`,user.avatarURL({dynamic: true}))
  .addField("**INFORMATION**", `\n-Name: ${db.name}\n-Gender: ${db.gender}\n-Character: ${db.character}`)
  .addField("**STATISTIC**",`${client.config.icon.hp} HP: ${db.hp}/20\n${client.config.icon.`)
  
}

module.exports.help = {
  name: "profile",
  aliases: ["p"]
}
