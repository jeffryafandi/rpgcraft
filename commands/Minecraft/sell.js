const discord = require("discord.js");
module.exports.run = async (client, msg, args) => {
  const icon = client.config.icon
  const Player = require("../../models/player.js")
  const db = await Player.findOne(
    {
      id: msg.author.id
    },
    (err, gg) => {
      if (err) console.error("User Ga ada :v");
      if (!gg) {
        return msg.channel.send(client.config.start)
      }
    });
    const amt = args[1] || "1"
    if(msg.content.includes("-"))return msg.channel.send("Invalid Amount")
  const ex = new discord.MessageEmbed()
    .setTitle("Wrong Syntax")
    .setFooter(client.config.footer)
    .setTimestamp()
    .setColor(client.config.COLOR.RANDOM)
    .setDescription(`Usage:\n\`sell <Item Name> [Amount | All]\`\n\`sell all\` (To sell all your items)\n\`sell price\` (List of item price)`)
  //Mobs Items
  let rotten = 5
  let gunpowder = 2
  let string = 10
  let bone = 3
  let fish = 5
  //Ground Items
  let stick = 0.3
  let log = 1
  //Under Ground Items
 let stone = 0.2
 let emerald = 25000
 let diamond = 500
 let goldore = 25
 let goldingot = 75
 let ironore = 5
 let ironingot = 10
 let coal = 0.2
 if(args[0] === "all"){
   let itm = ``;
   let hrg = 0;
   const m = await msg.channel.send("Selling your items, please wait...")
   const i = require("../../config.json").icon
   if (db.stone) {
     itm += `${db.stone} ${i.stone}`
     hrg += +parseInt(db.stone * stone)
     await db.updateOne({ stone: 0 })
   }if(db.rotten){
     itm += `, ${db.rotten} ${i.rotten}`
     hrg += + parseInt(db.rotten * rotten)
     await db.updateOne({rotten: 0})
   }if (db.gunpowder) {
     itm += `, ${db.gunpowder} ${i.gunpowder}`
     hrg += +parseInt(db.gunpowder * gunpowder)
     await db.updateOne({ gunpowder: 0 })
   }if (db.string) {
     itm += `, ${db.string} ${i.string}`
     hrg += + parseInt(db.string * string)
     await db.updateOne({ string: 0 })
   }if (db.bone) {
     itm += `, ${db.bone} ${i.bone}`
     hrg += + parseInt(db.bone * bone)
     await db.updateOne({ bone: 0 })
   }if (db.fish) {
     itm += `, ${db.fish} ${i.fish}`
     hrg += +parseInt(db.fish * fish)
     await db.updateOne({ fish: 0 })
   }if (db.stick) {
     itm += `, ${db.stick} ${i.stick}`
     hrg += +parseInt(db.stick * stick)
     await db.updateOne({stick: 0 })
   }if (db.log) {
     itm += `, ${db.log} ${i.log}`
     hrg += +parseInt(db.log * log)
     await db.updateOne({log: 0 })
   }if (db.coal) {
     itm += `, ${db.coal} ${i.coal}`
     hrg += +parseInt(db.coal * coal)
     await db.updateOne({ coal: 0 })
   }if (db.ironore) {
     itm += `, ${db.ironore} ${i.ironore}`
     hrg += +parseInt(db.ironore * ironore)
     await db.updateOne({ ironore: 0 })
   }
   if(hrg === 0){
     await m.edit("You dont have any items to sell")
   }else{
   await m.edit(`Successfully selling ${itm} for ${hrg} ${client.config.icon.coin}`)
 }
   if(!db.coin){
     await db.updateOne({coin: hrg})
   }else{
   await db.updateOne({coin: db.coin + hrg})
   }
 }else if (args[0] === "stick") {
    if (!db.stick || db.stick === 0 || parseInt(amt) > db.stick) return msg.channel.send("You dont have that much stick to sell")
    if(args[1] === "all"){
      const earn = db.stick* +stick
      await db.updateOne({ stick: db.stick - db.stick })
      if (!db.coin) {
        await db.updateOne({ coin: parseInt(earn) + 1 })
      } else {
        await db.updateOne({ coin: db.coin + parseInt(earn) + 1})
      };
      msg.channel.send(`You selling ${db.stick} \`stick\` and got ${parseInt(earn)} ${client.config.icon.coin}`)
    }else{
      if(isNaN(amt)) return msg.channel.send("Invalid Amount")
      msg.channel.send(`You selling ${amt} \`stick\` and got ${parseInt(amt* +stick)} ${icon.coin}`)
      await db.updateOne({stick: db.stick- +amt})
      if(!db.coin){
        await db.updateOne({coin: parseInt(amt* +stick)})
      }else{
        await db.updateOne({coin: db.coin + parseInt(amt* +stick)})
      }
    }
  } else if (args[0] === "price") {
    let embed = new discord.MessageEmbed()
      .setAuthor("All Selling Price")
      .setFooter(client.config.footer)
      .setColor(client.config.COLOR.RANDOM)
      .setTimestamp()
      .setDescription(`${icon.string} String » ${string} ${icon.coin}\n${icon.rotten} Rotten Flesh » ${rotten} ${icon.coin}\n${icon.bone} Bone » ${bone} ${icon.coin}\n${icon.gunpowder} Gunpowder » ${gunpowder} ${icon.coin}**\n${icon.stone} Stone » ${stone} ${icon.coin}\n${icon.coal} Coal » ${coal} ${icon.coin}\n${icon.ironore} Iron Ore » ${ironore} ${icon.coin}`)
    msg.channel.send(embed)
  }else msg.channel.send(ex)
  
  
  
  
}
module.exports.help = {
  name: "sell",
  aliases: []
}