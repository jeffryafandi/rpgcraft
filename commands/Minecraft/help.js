const { MessageEmbed } = require ('discord.js')


module.exports.run = async (client,msg,args) => {
  
  const help = client.helps.array()
  
  const embee = new MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`Help Commands ${client.user.username}`, client.user.avatarURL())
  .setDescription(`Support Server: https://discord.gg/ayam`)
  for(const mod of help) {
   embee.addField(`${mod.name}`, mod.cmds.map(x => `\`${x}\``).join(", "))
  }
  msg.channel.send(embee)
  
}

module.exports.help = {
  name: "help",
  aliases: ['h', 'cmd']
}
  
  