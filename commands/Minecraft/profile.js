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
  let sword;
  let axe;
  let pickaxe;
  if (db.sword === "1") sword = client.db.icon.sword1
  if (db.sword === "2") sword = client.db.icon.sword2
  const embed = new discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${user.username}'s Profile`,user.avatarURL({dynamic: true}))
  .addField("**INFORMATION**", `\n-Name: ${db.name}\n-Gender: ${db.gender}\n-Character: ${db.skim}`)
  .addField("**STATISTIC**",`${client.config.icon.hp}Hp: ${db.hp}/20\n${client.config.icon.hunger}Stamina: ${db.hunger}\n`)
  .addField("**EQUIPMENT**",`\nSword: ${sword}\nAxe: ${axe}\nPickaxe: ${pickaxe}`)
  msg.channel.send(embed)
}

module.exports.help = {
  name: "profile",
  aliases: ["p"]
}
