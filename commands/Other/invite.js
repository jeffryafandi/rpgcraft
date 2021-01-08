const discord = require("discord.js")
module.exports.run = async(client, msg, args)=>{
  const embed = new discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setFooter(client.config.footer)
  .setTimestamp()
  .setTitle(`${client.config.icon.emerald} ${client.user.username} ${client.config.icon.emerald}`)
  .setDescription(`> [Invite Links](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=354368&scope=bot)\n> ----------\n> [Support Server](https://discord.gg/3RQcJk8)\n> ----------\n> [Donate Here](https://saweria.co/jeffryafandi)`)
  msg.channel.send(embed)
}
module.exports.help = {
  name: "invite",
  aliases: ["link","donate","invites","support"]
}