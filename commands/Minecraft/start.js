
const Discord = require('discord.js')

module.exports.run = async (client,msg,args) => {
 
  //Var
  var mCancel = `You canceled the command`
  var tErr = `Time has run out, please repeat the command again!`
  
  const tag = `**${msg.author.tag}**`
  
  
  //Filter
  const filter = m => {
    if(m.author.id === msg.author.id) return true
  }
  
  const wkt = {
    max: 1,
    time: 30000,
    errors:['time'] 
  }
      
  
  let data = []
  
  
  //
  
  /* Await Nickname */
  
  const embee = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure | Nickname`, client.user.displayAvatarURL())
  .setDescription(`**${msg.author.tag}** Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter a nickname to continue`)
  .setFooter(`Adventure Setup 1 / 3 | Type cancel to cancel the action!`)
const emb1 = await msg.channel.send(embee)

await msg.channel.awaitMessages(filter, { max: 1, time: 20000, errors:['time'] }).then(res => {
  let kj = res.first().content.toLowerCase()
  console.log(res)
  
  if(kj === "cancel") {
    emb1.delete()
    return msg.channel.send(mCancel).then(k => k.delete({timeout:10000}))
  }
  data.push(kj)
  msg.channel.send(`${tag}, Your nickname has been stored in the database! (\`${kj}\`)`).then(l => l.delete({timeout:5000}))
})
  /* End Nickname */

  /* Await Gender */
  
  /*Emd
}


module.exports.help = {
  name: "start",
  aliases: []
}