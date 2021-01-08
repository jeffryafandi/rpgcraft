const dc = require("discord.js")
module.exports.run = async(client, msg, args)=>{
  client.client.findOne({id: client.user.id}).then(async(cln)=>{
  const emb = new dc.MessageEmbed()
  .setAuthor("Bots Config",client.user.displayAvatarURL())
  .setTimestamp()
  .setColor(client.config.COLOR.RANDOM)
  .setDescription(`Cooldown: ${require("pretty-ms")(cln.cooldown) || "0"}\nMonster Spawn: ${cln.monster}%`)
  .setFooter("Usage: config <type> <new value>")
  if(args[0] === "cooldown"){
    await cln.updateOne({cooldown: require("ms")(args[1]) })
    msg.channel.send(`General Cooldown changed to ${args[1]}`)
  }else if (args[0] === "monster"){
    if(isNaN(args[1]))return msg.reply("Invalid Amount")
    await cln.updateOne({monster: args[1]- +0})
    msg.channel.send(`Monster Spawner has changed to ${args[1]}%`)
  }else return msg.channel.send(emb)
})
}

module.exports.help={
  name: "config",
  aliases: ["conf"]
}