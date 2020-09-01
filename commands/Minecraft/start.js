const Discord = require ('discord.js')

module.exports.run = async (client,msg,args) => {
  
  const embee = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure`, client.user.displayAvatarURL())
  .setDescription(`**${msg.auhor.tg}** Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter a nickname to continue`)
  .setFooter(`Adventure Setup 1 / 3`)
  

  
  msg.channel.send(embee)
}

module.exports.help = {
  name: "start",
  aliases: []
  
}