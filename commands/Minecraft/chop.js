const discord = require("discord.js")
module.exports.run = async (client, msg, args) => {
  const Player = require("../../models/player.js")
  const db = await Player.findOne(
    {
      id: msg.author.id
    },
    (err, gg) => {
      if (err) console.error(err);
      if (!gg) {
        return msg.channel.send(client.config.start)
      }
    });
  if (db.biome != "1") {return msg.channel.send("You need to change the biome to `Ground` or `Forest`")}
  if (!db.chopcount) {
    await db.updateOne({
      chopcount: 1
    })
  } else {
    await db.updateOne({
      chopcount: db.chopcount + 1
    })
  };
  let random = Math.floor(Math.random() * 4) + 1
  let axe = "Hand"
  if (db.axe === 1){ axe = `${client.db.icon.axe1} Wooden Axe`; random = 1000}
  if (db.axe === 2) axe = `${client.db.icon.axe2} Iron Axe`
  if (db.axe === 3) axe = `${client.db.icon.axe3} Golden Axe`
  if (db.axe === 4) axe = `${client.db.icon.axe4} Diamond Axe`
  if (db.axe === 5) axe = `${client.db.icon.axe5} Netherite Axe`

  let embed = new discord.MessageEmbed()
    .setAuthor("Chopping tree")
    .setColor(client.db.COLOR.RANDOM)
    .setDescription(`You chop the tree with your ${axe}, And got ${random} ${client.db.icon.log}`)
    .setTimestamp()
    .setFooter(client.config.footer)
    msg.channel.send(embed)
    if(!db.log){
      await db.updateOne({
        log: random
      })
    }else{
      await db.updateOne({
        log: db.log + random
      })
    }







}

module.exports.help = {
  name: "chop",
  aliases: []
}