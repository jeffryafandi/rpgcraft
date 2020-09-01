const Discord = require('discord.js')

module.exports.run = async (client,msg,args) => {
 
  //Var
  var mCancel = `You have canceled the command`
  var tErr = `Time has run out, please repeat the command again!`
  
  
  
  //Filter
  const filter = m => {
   m.author.id === msg.author.id 
  }
  
  const wkt = {
    max: 1,
    time: 20000,
    errors:['time']
  }
        
  
  
  //
  
  /* Await Nickname */
  const embee = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure | Nickname`, client.user.displayAvatarURL())
  .setDescription(`**${msg.author.tag}** Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter a nickname to continue`)
  .setFooter(`Adventure Setup 1 / 3 | Type cancel to cancel the action!`)
const emb1 = await msg.channel.send(embee)

await msg.channel.awaitMessages(filter, wkt).then((res) => {
  let kj = res.firts().content.toLowerCase()
  
  if(kj === "cancel") {
    emb1.delete()
    return msg.channel.send(`${tag}, Your gender has been stored in the database! (\`Female\`)`).then(m => m.delete({timeout:5000}))
  }
  
})

  
  
  /* End Nickname */
}

module.exports.help = {
  name: "start",
  aliases: []
}