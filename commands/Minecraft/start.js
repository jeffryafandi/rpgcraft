const Discord = require ('discord.js')

module.exports.run = async (client,msg,args) => {
  
  const embee = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure`, client.user.displayAvatarURL())
  .setDescription(`**${msg.author.tag}** Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter a nickname to continue`)
  .setFooter(`Adventure Setup 1 / 3 | Type cancel to cancel the action!`)
const emb1 = await msg.channel.send(embee)
const filter = m => m.author.id === msg.author.id

msg.delete()

await msg.channel.awaitMessages(filter, { max: 1, time: 20000, errors:['time'] }).then(res => {
if(res.first().content.toLowerCase() === "cancel") {
  emb1.delete()
  return msg.channel.send(`**${msg.author.tag}**, You have canceled the setup, you can start it at any time!`).then(l => l.delete({timeout:10000}))
}
msg.channel.send(`**${msg.author.tag}**, Your nickname has been stored in the database! (\`${res.first().content}\`)`).then(l => l.delete({timeout:5000}))
})

  const jk = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure`, client.user.avatarURL())
  . setDescription (`**${msg.author.tag}** Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter gender \`male or female\``)
  .setFooter(`Adventure Setup 2 / 3 | Type cancel to cancel the action`)
  
  const lkk = await emb1.edit(jk)
  
  await msg.channel.awaitMessages(filter, { max: 1, time: 20000, errors:['time']}).then(res => {
    
    msg.delete()
    
    if(res.first().content.toLowerCase() === "cancel") {
      lkk.delete()
      return msg.channel.send(`**${msg.author.tag}**, You have canceled the setup, you can start it any time!`).then(i => i.delete({timeout:10000}))
    } else if(res.first().content.toLowerCase() === "male") {
      msg.channel.send(`**${msg.author.tag}**, Your gender has been stored in the database! (\`male\`)`).then(w => w.delete({timeout:5000}))
    } else if(res.first().content.toLowerCase() === "female") {
      msg.channel.send(`**${msg.author.tag}**, Your gender has been stored in the database! (\`female\`)`).then(m => m.delete({timeout:5000}))
    } else if(res.first().content.toLowerCase()) {
      lkk.delete()
      msg.channel.send(`**${msg.author.tag}**, Your gender is not valid!`).then(w => w.delete({timeout:5000}))
      return;
    }
            
  }).catch(err => {
    console.log(err)
    return msg.channel.send(`Time has passed 
  })

  }
                                                                   

module.exports.help = {
  name: "start",
  aliases: []
  
}