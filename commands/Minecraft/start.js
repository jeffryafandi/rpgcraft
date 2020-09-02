
const Discord = require('discord.js')
const Player = require ('../../models/player.js')
const mongoose = require ('mongoose')

module.exports.run = async (client,msg,args) => {
 
  const db = await Player.findOne(
      {
        id: msg.author.id
      })
        if (!db) {
        
        
  
  //Cek model deh abis ini ;v @Angga <<<<<<<<<<<<<<<
  //Var
  var mCancel = `You canceled the command`
  var tErr = `Time has run out, please repeat the command again!`
  
  const tag = `**${msg.author.tag}**`
  
  //OwO
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
  
  const embee = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure | Nickname`, client.user.displayAvatarURL())
  .setDescription(`**${msg.author.tag}** Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter a nickname to continue`)
  .setFooter(`Adventure Setup 1 / 3 | Type cancel to cancel the action!`)
const emb1 = await msg.channel.send(embee)
try {
const ress = await msg.channel.awaitMessages(filter, wkt)
  let kj = ress.first().content.toLowerCase()
  
  
  if(kj === "cancel") {
    emb1.delete()
    return msg.channel.send(`${tag}, ${mCancel}`).then(k => k.delete({timeout:10000}))
  }
  data.push(ress.first().content)
  msg.channel.send(`${tag}, Your nickname has been stored in the database! (\`${ress.first().content}\`)`).then(l => l.delete({timeout:5000}))
/*catch(err => {
    console.log(err)
    return msg.reply(`Time has run out, please repeat the command again!`).then(e => e.delete({timeout:10000}))
  })*/
  
} catch(err)  {
  emb1.delete()
    console.log(err)
    return msg.reply(`Time has run out, please repeat the command again!`).then(e => e.delete({timeout:10000}))
  }
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
  try {
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
    
} catch(err)  {
  lkk.delete()
    console.log(err)
    return msg.reply(`Time has run out, please repeat the command again!`).then(e => e.delete({timeout:10000}))
  }
    
   
    const kl = new Discord.MessageEmbed()
  .setColor(client.config.COLOR.RANDOM)
  .setAuthor(`${client.user.username} Adventure | Character`)
  .setDescription(`**${msg.author.tag}**, Welcome to adventure ${client.user.username}. To get started, please use the instructions provided below`)
  .addField(`Input`, `Enter character! \`Steve or Alex\``)
  .setFooter(`Adventure Setup 3 / 3 | Type cancel to cancel the action`)
  lkk.delete()
  const io = await msg.channel.send(kl)
    
    try {
      const res2 = await msg.channel.awaitMessages(filter2, wkt)
    let piy = res2.first().content.toLowerCase()
  
    
    
    
    if(piy === "cancel") {
      io.delete()
      return msg.channel.send(`${tag}, ${mCancel}`).then(i => i.delete({timeout:10000}))
///return true
    } else if(piy === "steve") {
      data.push("steve")
    msg.channel.send(`${tag}, Your gender has been stored in the database! (\`Steve\`)`).then(w => w.delete({timeout:5000}))
   //   return true
    } else if(piy === "alex") {
      data.push("alex")
     msg.channel.send(`${tag}, Your gender has been stored in the database! (\`Alex\`)`).then(m => m.delete({timeout:5000}))
      
    } else {
      io.delete()
      msg.channel.send(`${tag}, Character not valid!`).then(g => g.delete({timeout:5000}))
      return
    }
    
      
      
 
} catch(err)  {
  io.delete()
    console.log(err)
    return msg.reply(`Time has run out, please repeat the command again!`).then(e => e.delete({timeout:10000}))
  }
  
  
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
  try {
    
      const res3 = await msg.channel.awaitMessages(filter2, wkt)
    let yu = res3.first().content.toLowerCase()
  
    
    
    
    if(yu === "no") {
      lkk.delete()
      return msg.channel.send(`${tag}, ${mCancel}`).then(i => i.delete({timeout:10000}))
///return true
    } else if(yu === "yes") {
    
      if(!db) {
        const newPlayer = new Player({
            _id: mongoose.Types.ObjectId(),
            id: msg.author.id,
            name: data[0],
            gender: data[1],
            skin: data[2],
          hp: 20,
          hunger: 20,
          biome: 1
          
     
          });

          newPlayer
            .save()
            .then(result => console.log(result))
            .catch(err => console.error(err));
      }
      
      
      
    msg.channel.send(`All setups have been successful, you can start the adventure from now on!`).then(w => w.delete({timeout:5000}))
   //   return true
    } else {
      lkk.delete()
      msg.channel.send(`${tag}, Input not valid!, canceled setup!`).then(g => g.delete({timeout:5000}))
      return
    }
    
    
} catch(err)  {
    console.log(err)
    return msg.reply(`Time has run out, please repeat the command again!`).then(e => e.delete({timeout:10000}))
}
  
  
  
  
  
  /*End Gender*/
        }else { msg.reply("⚠️ You already created an account")}
} 


module.exports.help = {
  name: "start",
  aliases: []
}