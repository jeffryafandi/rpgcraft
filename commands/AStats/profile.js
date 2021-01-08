const discord = require("discord.js")
module.exports.run = async (client, msg, args) => {
  let ax = args[0]
  let user = await client.users.fetch(args.slice(0).join(" ").slice(2, -1)).catch(() => null) || await client.users.fetch(args[0]).catch(() => null) || client.users.cache.find(x => x.tag.toLowerCase() === args.slice(0).join(" ").toLowerCase()) || client.users.cache.find(x => x.username.toLowerCase() === args.slice(0).join(" ").toLowerCase()) || msg.author
  const Player = require("../../models/player.js")
  const db = await Player.findOne(
    {
      id: user.id
    },
    (err, gg) => {
      if (err) console.error("User Ga ada :v");
      if (!gg) {
        return msg.channel.send(client.config.start)
      }
    });
  const i = client.config.icon
  const x1 = i.xp_1
  const x2 = i.xp_2
  const x3 = i.xp_3
  const xp = `${x3}${x3}${x3}${x3}${x3}${x3}${x3}${x3}${x3}`
  //biomee
  let biome;
  if (db.biome === 0)biome = "Premium"
  if (db.biome === 1) biome = "Forest"

  //Items
  let armor = "**None**"
  let player;
  if(db.skin === "alex")player = client.config.icon.alex
  if(db.skin === "steve")player = client.config.icon.steve
  //Tempat armor 
  if (db.armor === 1) {
    armor = `${client.config.icon.armor1a}\n${client.config.icon.armor1b}\n${client.config.icon.armor1c}\n${client.config.icon.armor1d}`
  } else if (db.armor === 2) {
    armor = `${client.config.icon.armor2a}\n${client.config.icon.armor2b}\n${client.config.icon.armor2c}\n${client.config.icon.armor2d}`
  } else if (db.armor === 3) {
    armor = `${client.config.icon.armor3a}\n${client.config.icon.armor3b}\n${client.config.icon.armor3c}\n${client.config.icon.armor3d}`
  } else if (db.armor === 4) {
    armor = `${client.config.icon.armor4a}\n${client.config.icon.armor4b}\n${client.config.icon.armor4c}\n${client.config.icon.armor4d}`
  };
  let sword = "**None**"
  let axe = "**None**"
  let pickaxe = "**None**"
  //Swords
  if (db.sword === 1) sword = `${client.config.icon.sword1} Wooden Swords`
  if (db.sword === 2) sword = `${client.config.icon.sword2} Iron Swords`
  if (db.sword === 3) sword = `${client.config.icon.sword3} Golden Swords`
  if (db.sword === 4) sword = `${client.config.icon.sword4} Diamond Swords`
  if (db.sword === 5) sword = `${client.config.icon.sword5} Netherite Swords`
  //Axe
  if (db.axe === 1) axe = `${client.config.icon.axe1} Wooden Axe`
  if (db.axe === 2) axe = `${client.config.icon.axe2} Iron Axe`
  if (db.axe === 3) axe = `${client.config.icon.axe3} Golden Axe`
  if (db.axe === 4) axe = `${client.config.icon.axe4} Diamond Axe`
  if (db.axe === 5) axe = `${client.config.icon.axe5} Netherite Axe`
  //Pickaxe
  if (db.pickaxe === 1) pickaxe = `${client.config.icon.pickaxe1} Wooden Pickaxe`
  if (db.pickaxe === 2) pickaxe = `${client.config.icon.pickaxe2} Stone Pickaxe`
  if (db.pickaxe === 3) pickaxe = `${client.config.icon.pickaxe3} Iron Pickaxe`
  if (db.pickaxe === 4) pickaxe = `${client.config.icon.pickaxe4} Golden Pickaxe`
  if (db.pickaxe === 5) pickaxe = `${client.config.icon.pickaxe5} Diamond Pickaxe`
  //Items
  const embed = new discord.MessageEmbed()
    .setColor(client.config.COLOR.RANDOM)
    .setAuthor(`${user.username}'s Profile`, user.avatarURL({ dynamic: true }))
    .addField("**INFORMATION**", `\nName: ${db.name}\nCharacter: ${player}\nBiome: ${biome}`)
    .addField("**STATISTIC**", `${client.config.icon.hp}Hp: ${db.hp}/20\n${client.config.icon.steak}Stamina: ${db.hunger}/20\nLevel: ${db.level || "0"}\nXp:\n${xp}`)
    .addField("**EQUIPMENT**", `\nSword: ${sword}\nAxe: ${axe}\nPickaxe: ${pickaxe}\nArmor: ${armor}`)
    .addField("**MONEY**",`${client.config.icon.coin} Coin: ${db.coin || "0"}\n🏦 Bank: ${db.bank || "0"}\n${client.config.icon.emerald} Emerald: ${db.emerald || "0"}`)
    .setTimestamp()
    .setFooter(client.config.footer)
  msg.channel.send(embed)
}

module.exports.help = {
  name: "profile",
  aliases: ["p"]
}