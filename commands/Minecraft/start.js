const Discord = require ('discord.js')

module.exports.run = async (client,msg,args) => {
  
  let data = []
  
  const embee = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure | Nickname`, client.user.displayAvatarURL())
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
  data.push(res.first().content)
msg.channel.send(`**${msg.author.tag}**, Your nickname has been stored in the database! (\`${res.first().content}\`)`).then(l => l.delete({timeout:5000}))
}).catch(err => {
  console.log(err)
  emb1.delete()
  return msg.reply(`Time has run out, please repeat the command again!`).then(p => p.delete({timeout:10000}))
})

  const jk = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure | Gender`, client.user.avatarURL())
  . setDescription (`**${msg.author.tag}** Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter gender! \`Male or Female\``)
  .setFooter(`Adventure Setup 2 / 3 | Type cancel to cancel the action`)
  emb1.delete()
  const lkk = await msg.channel.send(jk)
  
  await msg.channel.awaitMessages(filter, { max: 1, time: 20000, errors:['time']}).then(res => {
    
    msg.delete()
    
    if(res.first().content.toLowerCase() === "cancel") {
      lkk.delete()
      return msg.channel.send(`**${msg.author.tag}**, You have canceled the setup, you can start it any time!`).then(i => i.delete({timeout:10000}))
    } else if(res.first().content.toLowerCase() === "male") {
      data.push("male")
      msg.channel.send(`**${msg.author.tag}**, Your gender has been stored in the database! (\`Male\`)`).then(w => w.delete({timeout:5000}))
    } else if(res.first().content.toLowerCase() === "female") {
      data.push("female")
      msg.channel.send(`**${msg.author.tag}**, Your gender has been stored in the database! (\`Female\`)`).then(m => m.delete({timeout:5000}))
    } else {
    
      lkk.delete()
     return msg.channel.send(`**${msg.author.tag}**, Gender is not valid!`).then(w => w.delete({timeout:5000}))
      
    }
            
  }).catch(err => {
    console.log(err)
    lkk.delete()
    return msg.reply(`Time has run out, please repeat the command again!`).then(o => o.delete({timeout:10000}))
  })
  
  const kl = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure | Character`)
  .setDescription(`**${msg.author.tag}**, Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter character! \`Steve or Alex\``)
  .setFooter(`Adventure Setup 3 / 3 | Type cancel to cancel the action`)
  lkk.delete()
  const io = await msg.channel.send(kl)
  
  await msg.channel.awaitMessages(filter, { max: 1, time: 20000, errors:['time'] }).then(res => {
    msg.delete()
    
    if(res.first().content.toLowerCase() === "cancel") {
      io.delete()
      return msg.channel.send(`**${msg.author.tag}**, You have canceled the setup, you can start it any time!`).then(p => p.delete({timeout:10000}))
    } else if(res.first().content.toLowerCase() === "steve") {
      data.push("steve")
      msg.channel.send(`**${msg.author.tag}**, Your character has been stored in the database (\`Steve\`)`).then(o => o.delete({timeout:5000}))
    } else if(res.first().content.toLowerCase() === "alex") {
      data.push("alex")
      msg.channel.send(`**${msg.author.tag}**, Your character has been stored in the database (\`Alex\`)`).then(w => w.delete({timeout:5000}))
    } else /*if(res.first().content.toLowerCase()) */{
      io.delete()
    return msg.channel.send(`**${msg.author.tag}**, Character is not valid!`).then(q => q.delete({timeout:5000}))
    } 
    
   /* msg.channel.send(`Nickname: ${data[0]}
Gender: ${data[1]}
Character: ${data[2]}`)*/
    
    
  }).catch(err => {
    console.log(err)
    return msg.reply(`Time has run out, please repeat the command again!`).then(e => e.delete({timeout:10000}))
  })
  
  const jio = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`Adventure setup complete`, client.user.avatarURL())
  .setDescription(`All setup has been completed, please confirm!`)
  .addField(`Your data`, `- Nickname: \`${data[0]}\`
- Gender: \`${data[1]}\`
- Character: \`${data[2]}\``)
  .addField(`Input`, `To confirm, type \`Yes\` and To cancel, type \`No\``)
  .setFooter(`${client.user.tag} Adventure`)
  io.delete()
  const yt = await msg.channel.send(jio)
  
  await msg.channel.awaitMessages(filter, { max: 1, time: 20000 , errors:['time'] }).then(res => {
    msg.delete()
    if(res.first().content.toLowerCase() === "no") {
      yt.delete()
      msg.reply(`Setup canceled!`).then(i => i.delete({timeout:5000}))
    } else if(res.first().content.toLowerCase() === "yes") {
      yt.delete()
      msg.reply(`All setups have been successful, you can start the adventure from now on!`).then(r => r.delete({timeout:10000}))
    } else if(res.first().content.toLowerCase()) {
      yt.delete()
      msg.reply(`Input not valid!, Setup canceled`).then(j => j.delete({timeout:5000}))
      return
    }
  }).catch(err => {
    console.log(err)
    yt.delete()
    return msg.reply(`Time has run out, please repeat the command again!`).then(q => q.delete({timeout:10000}))
  })
  

  }

                                                                   

module.exports.help = {
  name: "start",
  aliases: []
  
}