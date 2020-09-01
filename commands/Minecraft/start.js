
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
  
  
  const filter2 = m => {
   if(m.author.bot) return
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
  try {
  const embee = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure | Nickname`, client.user.displayAvatarURL())
  .setDescription(`**${msg.author.tag}** Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter a nickname to continue`)
  .setFooter(`Adventure Setup 1 / 3 | Type cancel to cancel the action!`)
const emb1 = await msg.channel.send(embee)

const ress = await msg.channel.awaitMessages(filter, wkt)
  let kj = ress.first().content.toLowerCase()
  
  
  if(kj === "cancel") {
    emb1.delete()
    return msg.channel.send(`${tag}, ${mCancel}`).then(k => k.delete({timeout:10000}))
  }
  data.push(kj)
  msg.channel.send(`${tag}, Your nickname has been stored in the database! (\`${kj}\`)`).then(l => l.delete({timeout:5000}))
/*catch(err => {
    console.log(err)
    return msg.reply(`Time has run out, please repeat the command again!`).then(e => e.delete({timeout:10000}))
  })*/
  
  /* End Nickname */
  
  
  /* Await Gender */
  
const jk = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure | Gender`, client.user.avatarURL())
  . setDescription (`**${msg.author.tag}** Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter gender! \`Male or Female\``)
  .setFooter(`Adventure Setup 2 / 3 | Type cancel to cancel the action`)
  emb1.delete()
  const lkk = await msg.channel.send(jk)
  
  const res = await msg.channel.awaitMessages(filter2, wkt)
    let rt = res.first().content.toLowerCase()
  
    
    
    
    if(rt === "cancel") {
      lkk.delete()
      return msg.channel.send(`${tag}, ${mCancel}`).then(i => i.delete({timeout:10000}))
///return true
    } else if(rt === "male") {
      data.push("male")
    msg.channel.send(`${tag}, Your gender has been stored in the database! (\`Male\`)`).then(w => w.delete({timeout:5000}))
   //   return true
    } else if(rt === "female") {
      data.push("female")
     msg.channel.send(`${tag}, Your gender has been stored in the database! (\`Female\`)`).then(m => m.delete({timeout:5000}))
      
    } else {
      lkk.delete()
      msg.channel.send(`${tag}, Gender not valid!`).then(g => g.delete({timeout:5000}))
      return
    }
    
   
    const kl = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure | Character`)
  .setDescription(`**${msg.author.tag}**, Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter character! \`Steve or Alex\``)
  .setFooter(`Adventure Setup 3 / 3 | Type cancel to cancel the action`)
  lkk.delete()
  const io = await msg.channel.send(kl)
    
    
    
    
 
} catch(err)  {
    console.log(err)
    return msg.reply(`Time has run out, please repeat the command again!`).then(e => e.delete({timeout:10000}))
  }
  
  
  
  
  
  
  
  /*End Gender*/
}


module.exports.help = {
  name: "start",
  aliases: []
}