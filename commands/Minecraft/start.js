const Discord = require ('discord.js')

module.exports.run = async (client,msg,args) => {
  
  const embee = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure`, client.user.displayAvatarURL())
  .setDescription(`**${msg.author.tag}** Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter a nickname to continue`)
  .setFooter(`Adventure Setup 1 / 3`)
const emb1 = await msg.channel.send(embee)
const filter = m => {
m.author.id === msg.author.id
}

const res = await msg.channel.awaitMessages(filter, { time: 20000, max: 1, errors:['time'] })
if(res) {
  msg.channel.send(res.first().content)
}


}

module.exports.help = {
  name: "start",
  aliases: []
  
}