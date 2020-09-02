const { MessageEmbed } = require ('discord.js')


module.exports.run = async (client,msg,args) => {
  
  const help = client.helps.array()
  
  const embee = new MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`Help Commands ${client.user.username}`, client.user.avatarURL())
  .setDescription(`Support Server: https://discord.gg/ayam`)
  for(const mod of help) {
   embee.addField(`${mod.name}`, mod.cmds.filter(()=> mod.hide === false).map(x => `\`${x}\``).join(", "))
  }
  msg.channel.send(embee)
  /*if (args[0] === "other"){
    const help = client.helps.array()
    const embed = new MessageEmbed()
    .setColor(client.config.COLOR.RANDOM)
    .setAuthor(`Help Commands ${client.user.username}`, client.user.avatarURL())
    for(const mod of help){
      embed.addField(`${mod.name}`, mod.cmds.filter(()=> mod.hide === true).map(x => `\`${x}\``).join(", "))
      return msg.channel.send(embed)
    }
  }*/ 
} // bukan kek gitu 
//Blm dicoba ga akan tau :v

module.exports.help = {
  name: "help",
  aliases: ['h', 'cmd']
}
  
  