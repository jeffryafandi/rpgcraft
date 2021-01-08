module.exports.run = async(client, msg, args) =>{
  const discord = require("discord.js")
  const embed = new discord.MessageEmbed()
  .setAuthor("Recipes",client.user.displayAvatarURL())
  .setDescription(`Page (1/1)\n\`craft <item name> [number | all]\``)
  .addField("Tier 1 Recipes:",`x4 ${client.config.icon.stick} \`stick\` » 1 ${client.config.icon.log}\n${client.config.icon.pickaxe1} \`wooden pickaxe\` » 3 ${client.config.icon.log} + 2 ${client.config.icon.stick}`)
  .setColor(client.config.COLOR.RANDOM)
  .setTimestamp()
  msg.channel.send(embed)
      
}
module.exports.help ={
  name: "recipes",
  aliases:[]
  
}