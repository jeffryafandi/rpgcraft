const discord = require("discord.js");
module.exports.run = async (client, msg, args) => {
  const Player = require("../../models/player.js");
  const mongoose = require("mongoose");
  client.util.player(msg.author.id).then(async db => {
    if (!db) return msg.channel.send(client.config.start);
    client.util.client(client.user.id).then(async(cln)=>{
    if (db.cd !== null && cln.cooldown - (Date.now() - db.cd) > 0)return msg.reply(`Cooldown, please try again on ${require("pretty-ms")(cln.cooldown - (Date.now() - db.cd))}`)
    let a = (db.axe || 0) * 2 + 1
    let b = (db.axe || 0) * 4 + 3
    let axe = "Hand";
    let log = Math.floor(Math.random() * b) + a
    if (!db.axe || db.axe === 0) {
      msg.reply(
        `You Chopped tree with your **Hand** and got ${log} ${client.config.icon.log}`
      );
      if (!db.log) {
        await db.updateOne({ log: log });
      } else {
        await db.updateOne({ log: db.log + log });
      }
    } else if (db.axe === 1) {
      msg.reply(
        `You Chopped tree with ${client.config.icon.axe1} Wooden Axe and got ${log} ${client.config.icon.log}`
      );
      if (!db.log) {
        await db.updateOne({
          log: log
        });
      } else {
        await db.updateOne({
          log: db.log + log
        });
      }
    } else if (db.axe === 2) {
      axe = `${client.config.icon.axe2} Stone Axe`;
      b = 9;
      if (!db.log) {
        await db.updateOne({
          log: log
        });
      } else {
        await db.updateOne({
          log: db.log + log
        });
      }
    } else if (db.pickaxe === 3) {
      axe = `${client.config.icon.pickaxe3} Golden Pickaxe`;
      a = 3;
      b = 13;
      if (!db.log) {
        await db.updateOne({
          log: log
        });
      } else {
        await db.updateOne({
          log: db.log + log
        });
      }
    } else if (db.pickaxe === 4) {
      axe = `${client.config.icon.pickaxe4} Diamond Pickaxe`;
      a = 8;
      b = 21;
      if (!db.log) {
        await db.updateOne({
          log: log
        });
      } else {
        await db.updateOne({
          stone: db.log + log
        });
      }
    } else if (db.pickaxe === 5) {
      axe = `${client.config.icon.pickaxe5} Netherite Pickaxe`;
      a = 10;
      b = 35;
      if (!db.log) {
        await db.updateOne({
          log: log
        });
      } else {
        await db.updateOne({
          log: db.log + log
        });
      }
    }
    if (!db.chopcount) {
      await db.updateOne({
        chopcount: 1
      });
    } else {
      await db.updateOne({
        chopcount: db.chopcount + 1
      });
    }
    await db.updateOne({ cd: Date.now() });
    let zombie = Math.floor(Math.random() * 101) + 0;
    if (zombie < cln.monster) {
      let zz;
      let barang;
      let rdm = [
        "zombie",
        "zombie",
        "zombie",
        "creeper",
        "skeleton",
        "skeleton",
        "spider"
      ];
      let bb = rdm[Math.floor(Math.random() * rdm.length)];
      let ritem = Math.floor(Math.random() * 3) + 1;
      if (bb === "zombie") {
        barang = `${client.config.icon.rotten} Rotten Flesh`;
        zz = `${client.config.icon.zombie} Zombie`;
        const quiz = require("../../src/quiz/zombie.json");
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = m => {
          return (
            m.author.id === msg.author.id &&
            item.answers.some(a => a.toLowerCase() === m.content.toLowerCase())
          );
        };
        //Jedaa
        let embed = new discord.MessageEmbed()
          .setAuthor(
            `${db.name}'s Fight`,
            msg.author.displayAvatarURL({ dynamic: true })
          )
          .setColor(client.config.COLOR.RANDOM)
          .setDescription(
            `**Attacked by:** ${zz}\nAnswer the question to Defeat the Enemy\n${item.question}`
          )
          .setTimestamp()
          .setFooter(client.config.footer);
        msg.channel.send(embed).then(() => {
          msg.channel
            .awaitMessages(filter, {
              max: 1,
              time: client.config.time.zombie,
              errors: ["time"]
            })
            .then(async collected => {
              msg.reply(
                `You killed a ${zz} with your ${axe} and got ${ritem} ${barang}`
              );
              if (!db.rotten) {
                await db.updateOne({
                  rotten: ritem
                });
              } else {
                await db.updateOne({
                  rotten: db.rotten + ritem
                });
              }
            })
            .catch(async collected => {
              await db.updateOne({
                hp: db.hp - db.hp
              });
              msg.reply(`You afk while Mining and killed by ${zz}`);
            });
        });
      } else if (bb === "creeper") {
        barang = `${client.config.icon.gunpowder} Gunpowder`;
        zz = `${client.config.icon.creeper} Creeper`;
        const quiz = require("../../src/quiz/zombie.json");
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = m => {
          return (
            m.author.id === msg.author.id &&
            item.answers.some(a => a.toLowerCase() === m.content.toLowerCase())
          );
        };
        //Jeda
        let embed = new discord.MessageEmbed()
          .setAuthor(
            `${db.name}'s Fight`,
            msg.author.displayAvatarURL({ dynamic: true })
          )
          .setColor(client.config.COLOR.RANDOM)
          .setDescription(
            `**Attacked by:** ${zz}\nAnswer the question to Defeat the Enemy\n${item.question}`
          )
          .setTimestamp()
          .setFooter(client.config.footer);
        msg.channel.send(embed).then(() => {
          msg.channel
            .awaitMessages(filter, {
              max: 1,
              time: client.config.time.zombie,
              errors: ["time"]
            })
            .then(async collected => {
              msg.reply(
                `You killed a ${zz} with your ${axe} and got ${ritem} ${barang}`
              );
              if (!db.gunpowder) {
                await db.updateOne({
                  gunpowder: ritem
                });
              } else {
                await db.updateOne({
                  gunpowder: db.gunpowder + ritem
                });
              }
            })
            .catch(async collected => {
              await db.updateOne({
                hp: db.hp - db.hp
              });
              msg.reply(`You afk while Mining and killed by ${zz}`);
            });
        });
      } else if (bb === "skeleton") {
        barang = `${client.config.icon.bone} Bone`;
        zz = `${client.config.icon.skeleton} Skeleton`;
        //Jedaaa
        const quiz = require("../../src/quiz/zombie.json");
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = m => {
          return (
            m.author.id === msg.author.id &&
            item.answers.some(a => a.toLowerCase() === m.content.toLowerCase())
          );
        };
        let embed = new discord.MessageEmbed()
          .setAuthor(
            `${db.name}'s Fight`,
            msg.author.displayAvatarURL({ dynamic: true })
          )
          .setColor(client.config.COLOR.RANDOM)
          .setDescription(
            `**Attacked by:** ${zz}\nAnswer the question to Defeat the Enemy\n${item.question}`
          )
          .setTimestamp()
          .setFooter(client.config.footer);
        msg.channel.send(embed).then(() => {
          msg.channel
            .awaitMessages(filter, {
              max: 1,
              time: client.config.time.zombie,
              errors: ["time"]
            })
            .then(async collected => {
              msg.reply(
                `You killed a ${zz} with your ${axe} and got ${ritem} ${barang}`
              );

              if (!db.bone) {
                await db.updateOne({
                  bone: ritem
                });
              } else {
                await db.updateOne({
                  bone: db.bone + ritem
                });
              }
            })
            .catch(async collected => {
              await db.updateOne({
                hp: db.hp - db.hp
              });
              msg.reply(`You afk while Mining and killed by ${zz}`);
            });
        });
      } else if (bb === "spider") {
        barang = `${client.config.icon.string} String`;
        zz = `${client.config.icon.spider} Spider`;
        //Jedaa
        const quiz = require("../../src/quiz/zombie.json");
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = m => {
          return (
            m.author.id === msg.author.id &&
            item.answers.some(a => a.toLowerCase() === m.content.toLowerCase())
          );
        };
        let embed = new discord.MessageEmbed()
          .setAuthor(
            `${db.name}'s Fight`,
            msg.author.displayAvatarURL({ dynamic: true })
          )
          .setColor(client.config.COLOR.RANDOM)
          .setDescription(
            `**Attacked by:** ${zz}\nAnswer the question to Defeat the Enemy\n${item.question}`
          )
          .setTimestamp()
          .setFooter(client.config.footer);
        msg.channel.send(embed).then(() => {
          msg.channel
            .awaitMessages(filter, {
              max: 1,
              time: client.config.time.zombie,
              errors: ["time"]
            })
            .then(async collected => {
              msg.reply(
                `You killed a ${zz} with your ${axe} and got ${ritem} ${barang}`
              );
              if (!db.string) {
                await db.updateOne({
                  string: ritem
                });
              } else {
                await db.updateOne({
                  string: db.string + ritem
                });
              }
            })
            .catch(async collected => {
              await db.updateOne({
                hp: db.hp - db.hp
              });
              msg.reply(`You afk while Mining and killed by ${zz}`);
            });
        });
      }
    }
  });
  });
};

module.exports.help = {
  name: "chop",
  aliases: ["chopping"]
};
