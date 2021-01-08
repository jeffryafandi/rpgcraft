module.exports.run= async(client, msg, args)=>{
  const dc = require("discord.js")
  client.util.client(client.user.id).then(async(cln)=>{
  const ebd = new dc.MessageEmbed()
  .setAuthor("Statistic",client.user.displayAvatarURL())
  .setTimestamp()
  .setColor(client.config.COLOR.RANDOM)
  .setFooter(client.config.footer)
  .setDescription(`**Game Statistic**\n\`\`\`Version: ${require("../../package.json").version}\nPlayer: (${cln.player} / 1000)\nDeveloper: ${client.users.cache.get("574783649296416771").tag}, ${client.users.cache.get("679652448058867753").tag}\`\`\`\n**System Statistic**\n\`\`\`Uptime: ${require("pretty-ms")(client.uptime)}\nd\`\`\``)
  msg.channel.send(ebd)
})}
module.exports.help ={
  name: "stats",
  aliases: ["statistic"]
}