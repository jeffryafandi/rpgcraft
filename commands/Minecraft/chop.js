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
  if (db.biome === "1" || db.biome === "0") {
    let a = 1
    let b = 3
    let axe = "Hand"
    if (db.axe === 1) {
      axe = `${client.db.icon.axe1} Wooden Axe`;
      b = 6
    }
    if (db.axe === 2) {
      axe = `${client.db.icon.axe2} Iron Axe`
      b = 9
    }
    if (db.axe === 3) {
      axe = `${client.db.icon.axe3} Golden Axe`
      a = 3
      b = 13
    }
    if (db.axe === 4) {
      axe = `${client.db.icon.axe4} Diamond Axe`
      a = 8
      b = 21
    }
    if (db.axe === 5) {
      axe = `${client.db.icon.axe5} Netherite Axe`
      a = 10
      b = 35
    }
    let random = Math.floor(Math.random() * b) + a
    let zombie = Math.floor(Math.random() * 100) + 1

    if (zombie > 7) {
      if (!db.chopcount) {
        await db.updateOne({
          chopcount: 1
        })
      } else {
        await db.updateOne({
          chopcount: db.chopcount + 1
        })
      };
      if (!db.log) {
        await db.updateOne({
          log: random
        })
      } else {
        await db.updateOne({
          log: db.log + random
        })
      }
      msg.reply(`You chop the tree with your ${axe} And got ${random} ${client.config.icon.log}`)

    } else {
      const quiz = require('../../src/quiz/zombie.json');
      const item = quiz[Math.floor(Math.random() * quiz.length)];
      const filter = m => {
        return m.author.id === msg.author.id && item.answers.some(a => a.toLowerCase() === m.content.toLowerCase());
      };
      let zz;
      let barang;
      let rdm = ["zombie", "creeper", "skeleton", "spider"]
      let bb = rdm[Math.floor(Math.random() * rdm.length)]
      let ritem = Math.floor(Math.random() * 3) + 1
      if (bb === "zombie") {
        barang = `${client.config.icon.flesh} Rotten Flesh`
        zz = `${client.config.icon.zombie} Zombie`
        //Jedaa
        let embed = new discord.MessageEmbed()
          .setAuthor(`${db.name}'s Fight`, msg.author.displayAvatarURL({ dynamic: true }))
          .setColor(client.config.COLOR.RANDOM)
          .setDescription(`**Attacked by:** ${zz}\nAnswer the question to Defeat the Enemy`)
          .setTimestamp()
          .setFooter(client.config.footer)
        msg.channel.send(embed).then(() => {
          msg.channel.awaitMessages(filter, { max: 1, time: client.config.time.zombie, errors: ['time'] })
            .then(collected => {
              msg.reply(`You killed a ${zz} with your ${axe} and got ${ritem} ${barang}`);
            })
            .catch(collected, async () => {
        if (!db.rotten) {
          await db.updateOne({
            rotten: ritem
          })
        } else {
          await db.updateOne({
            rotten: db.rotten + ritem
          })
        }})})
      } else if (bb === "creeper") {
        barang = `${client.config.icon.gunpowder} Gunpowder`
        zz = `${client.config.icon.creeper} Creeper`
        //Jeda
        let embed = new discord.MessageEmbed()
          .setAuthor(`${db.name}'s Fight`, msg.author.displayAvatarURL({ dynamic: true }))
          .setColor(client.config.COLOR.RANDOM)
          .setDescription(`**Attacked by:** ${zz}\nAnswer the question to Defeat the Enemy`)
          .setTimestamp()
          .setFooter(client.config.footer)
        msg.channel.send(embed).then(() => {
              msg.channel.awaitMessages(filter, { max: 1, time: client.config.time.zombie, errors: ['time'] })
                .then(collected => {
                  msg.reply(`You killed a ${zz} with your ${axe} and got ${ritem} ${barang}`);
                })
                .catch(async(collected)  => {
        if (!db.gunpowder) {
          await db.updateOne({
            gunpowder: ritem
          })
        } else{
          await db.updateOne({
            gunpowder: db.gunpowder + ritem
          })
        }})})
      }else if (bb === "skeleton") {
        barang = `${client.config.icon.bone} Bone`
        zz = `${client.config.icon.skeleton} Skeleton`
        //Jedaaa
        let embed = new discord.MessageEmbed()
          .setAuthor(`${db.name}'s Fight`, msg.author.displayAvatarURL({ dynamic: true }))
          .setColor(client.config.COLOR.RANDOM)
          .setDescription(`**Attacked by:** ${zz}\nAnswer the question to Defeat the Enemy`)
          .setTimestamp()
          .setFooter(client.config.footer)
        msg.channel.send(embed).then(() => {
              msg.channel.awaitMessages(filter, { max: 1, time: client.config.time.zombie, errors: ['time'] })
                .then(collected => {
                  msg.reply(`You killed a ${zz} with your ${axe} and got ${ritem} ${barang}`);
                })
                .catch(async(collected)=> {
        if (!db.bone) {
          await db.updateOne({
            bone: ritem
          })
        } else {
          await db.updateOne({
            bone: db.bone + ritem
          })
        }})})
      }else if (bb === "spider") {
        barang = `${client.config.icon.string} String`
        zz = `${client.config.icon.spider} Spider`
        //Jedaa
        let embed = new discord.MessageEmbed()
          .setAuthor(`${db.name}'s Fight`, msg.author.displayAvatarURL({ dynamic: true }))
          .setColor(client.config.COLOR.RANDOM)
          .setDescription(`**Attacked by:** ${zz}\nAnswer the question to Defeat the Enemy`)
          .setTimestamp()
          .setFooter(client.config.footer)
        msg.channel.send(embed).then(() => {
              msg.channel.awaitMessages(filter, { max: 1, time: client.config.time.zombie, errors: ['time'] })
                .then(collected => {
                  msg.reply(`You killed a ${zz} with your ${axe} and got ${ritem} ${barang}`);
                })
                .catch(async(collected) => {
        if (!db.bone) {
          await db.updateOne({
            bone: ritem
          })
        } else {
          await db.updateOne({
            bone: db.bone + ritem
          })
        }})})
      }
    }
  } else msg.reply("You need to change the `biome` to `forest` or change to `premium` biomes")

}

module.exports.help = {
  name: "chop",
  aliases: []
}