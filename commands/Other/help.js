const { MessageEmbed } = require ('discord.js')


module.exports.run = async (client,msg,args) => {
  
 let help = client.helps.array()
  if(!client.config.ENV.OWNER_ID.includes(msg.author.id)) help = client.helps.array().filter(x => !x.hide)
  const embee = new MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`Help Commands ${client.user.username}`, client.user.avatarURL())
  .setDescription(`Support Server: https://discord.gg/3RQcJk8`)
  .setFooter(client.config.footer)
  .setTimestamp()
  for(const mod of help) {
   embee.addField(`${mod.name}`, mod.cmds.map(x => `\`${x}\``).join(", ")) //sue jangan
  }
  msg.channel.send(embee)
} 

module.exports.help = {
  name: "help",
  aliases: ['h', 'cmd', "commands"]
}
  
  