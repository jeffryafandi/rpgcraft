const discord = require("discord.js")
module.exports.run = async (client, msg, args) => {
  let ax = args[0]
  let user = await client.users.fetch(args.slice(0).join(" ").slice(2, -1)).catch(() => null) || await client.users.fetch(args[0]).catch(() => null) || client.users.cache.find(x => x.tag.toLowerCase() === args.slice(0).join(" ").toLowerCase()) || client.users.cache.find(x => x.username.toLowerCase() === args.slice(0).join(" ").toLowerCase()) || msg.author
  const Player = require("../../models/player.js")
  const db = await Player.findOne(
    {
      id: user.id
    },
    (err, gg) => {
      if (err) console.error("User Ga ada :v");
      if (!gg) {
        return msg.channel.send(client.config.start)
      }
    });
  const embed = new discord.MessageEmbed()
    .setColor(client.config.COLOR.RANDOM)
    .setAuthor(`${user.username}'s Balance`, user.avatarURL({ dynamic: true }))
    .setDescription( `${client.config.icon.coin} Coin: ${db.coin || "0"}\n🏦 Bank: ${db.bank || "0"}\n${client.config.icon.emerald} Emerald: ${db.emerald || "0"}`)
    .setTimestamp()
    .setFooter(client.config.footer)
  msg.channel.send(embed)
}

module.exports.help = {
  name: "balance",
  aliases: ["bal"]
}