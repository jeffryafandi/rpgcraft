const discord = require("discord.js");
module.exports.run = async (client, msg, args) => {
  const mongoose = require("mongoose");
  client.util.player(msg.author.id).then(async db => {
    if (!db) return msg.channel.send(client.config.start);
    if (!db.pickaxe || db.pickaxe === 0)
      return msg.channel.send("You need to `craft` Pickaxe");
    let axe = ``;
    client.util.client(client.user.id).then(async(cln)=>{
    if (db.cd !== null && cln.cooldown - (Date.now() - db.cd) > 0)return msg.reply(`Cooldown, please try again on ${require("pretty-ms")(cln.cooldown - (Date.now() - db.cd))}`)
    //Stone
    let a = db.pickaxe * 2;
    let b = db.pickaxe * 4 + 3;
    //Coal
    let c = db.pickaxe * 1;
    let d = db.pickaxe * 2 + 3;
    //Iron Ore
    let e = db.pickaxe * 1;
    let f = db.pickaxe * 3 + 1;
    //Gold Ore
    let g = db.pickaxe * 1 - 1;
    let h = db.pickaxe * 2 + 1;
    //Diamond
    let i = db.pickaxe * 1 - 2;
    let j = db.pickaxe * 2 + 2;
    //lapis
    let k = 2;
    let l = 9;
    //emerald
    let m = 1;
    let n = 3;
    //Netherite
    //end stone
    //
    let rare = Math.floor(Math.random() * 100) + 1;
    let stone = Math.floor(Math.random() * b) + a;
    let coal = Math.floor(Math.random() * d) + c;
    let iron = Math.floor(Math.random() * f) + e;
    let gold = Math.floor(Math.random() * h) + g;
    let diamond = Math.floor(Math.random() * j) + i;
    let lapis = Math.floor(Math.random() * l) + k;

    if (db.pickaxe === 1) {
      axe = `${client.config.icon.pickaxe1}`;
      let a = `${stone} ${client.config.icon.stone}`;
      if (stone > 5) a += `, ${coal} ${client.config.icon.coal}`;
      msg.reply(
        `You mining with ${client.config.icon.pickaxe1} Wooden Pickaxe and got ${a}`
      );
      if (stone > 5) {
        if (!db.coal) {
          await db.updateOne({ coal: coal });
        } else {
          await db.updateOne({ coal: db.coal + coal });
        }
      }
      if (!db.stone) {
        await db.updateOne({
          stone: stone
        });
      } else {
        await db.updateOne({
          stone: db.stone + stone
        });
      }
    } else if (db.pickaxe === 2) {
      let i = `${stone} ${client.config.icon.stone}`;
      if (stone > 10) {
        i += `, ${iron} ${client.config.icon.ironore}`;
      } else if (stone > 8) {
        i += `, ${coal} ${client.config.icon.coal}`;
      }
      msg.reply(
        `You mining with ${client.config.icon.pickaxe2} Stone Pickaxe and got ${i}`
      );
      if (stone > 10) {
        if (!db.ironore) {
          await db.updateOne({ ironore: iron });
        } else if (stone > 8) {
          await db.updateOne({ ironore: db.ironore + iron });
        }
      } else {
        if (!db.coal) {
          await db.updateOne({ coal: coal });
        } else {
          await db.updateOne({ coal: db.coal + coal });
        }
      }
      if (!db.stone) {
        await db.updateOne({
          stone: stone
        });
      } else {
        await db.updateOne({
          stone: db.stone + stone
        });
      }
    } else if (db.pickaxe === 3) {
      let i = `${stone} ${client.config.icon.stone}`;
      if (stone > 10) {
        i += `, ${iron} ${client.config.icon.ironore}`;
      } else if (stone > 7) {
        i += `, ${coal} ${client.config.icon.coal}`;
      } else if (rare < 10) {
        i += `, ${gold} ${client.config.icon.goldore}`;
      } else if (rare < 5) {
        i += `, ${diamond} ${client.config.icon.diamond}`;
      }
      msg.reply(
        `You mining with ${client.config.icon.pickaxe3} Iron Pickaxe and got ${i}`
      );
      if (stone > 10) {
        if (!db.ironore) {
          await db.updateOne({ ironore: iron });
        } else if (stone > 8) {
          await db.updateOne({ ironore: db.ironore + iron });
        }
      } else if (stone > 8) {
        if (!db.coal) {
          await db.updateOne({ coal: coal });
        } else {
          await db.updateOne({ coal: db.coal + coal });
        }
      } else if (stone < 10) {
        if (!db.goldore) {
          await db.updateOne({ goldore: gold });
        } else {
          await db.updateOne({ goldore: db.goldore + gold });
        }
      } else if (stone < 5) {
        if (!db.diamond) {
          await db.updateOne({ diamond: diamond });
        } else {
          await db.updateOne({ diamond: db.diamond + diamond });
        }

        if (!db.stone) {
          await db.updateOne({
            stone: stone
          });
        } else {
          await db.updateOne({
            stone: db.stone + stone
          });
        }
      }} else if (db.pickaxe === 4) {
        let i = `${stone} ${client.config.icon.stone}`
        if (stone > 10) {
          i += `, ${iron} ${client.config.icon.ironore}, ${coal} ${client.config.icon.coal}`
        } else if (stone === 13) {
          i += `, ${gold} ${client.config.icon.goldore}`
        }
        msg.reply(
          `You mining with ${client.config.icon.pickaxe4} Golden Pickaxe and got ${i}`
        );
        if (stone > 10) {
          if (!db.ironore) {
            await db.updateOne({ ironore: iron });
          } else if (stone > 8) {
            await db.updateOne({ ironore: db.ironore + iron });
          }
        
          if (!db.coal) {
            await db.updateOne({ coal: coal });
          } else {
            await db.updateOne({ coal: db.coal + coal });
          }
        } else if (stone === 13) {
          if (!db.goldore) {
            await db.updateOne({ goldore: gold });
          } else {
            await db.updateOne({ goldore: db.goldore + gold });
          }
        }
        if (!db.stone) {
          await db.updateOne({
            stone: stone
          });
        } else {
          await db.updateOne({
            stone: db.stone + stone
          });
        }
      } else if (db.pickaxe === 5) {
        let i = `${stone} ${client.config.icon.stone}`;
        if (stone > 10) {
          i += `, ${iron} ${client.config.icon.ironore}`;
          i += `, ${coal} ${client.config.icon.coal}`;
        } else if (stone === 13) {
          i += `, ${gold} ${client.config.icon.goldore}`;
        } else if (stone === 14) {
          i += `, ${diamond} ${client.config.icon.diamond}`;
        }
        msg.reply(
          `You mining with ${client.config.icon.pickaxe5} Diamond Pickaxe and got ${i}`
        );
        if (stone > 10) {
          if (!db.ironore) {
            await db.updateOne({ ironore: iron });
          } else if (stone > 8) {
            await db.updateOne({ ironore: db.ironore + iron });
          }
          if (!db.coal) {
            await db.updateOne({ coal: coal });
          } else {
            await db.updateOne({ coal: db.coal + coal });
          }
        } else if (stone === 13) {
          if (!db.goldore) {
            await db.updateOne({ goldore: gold });
          } else {
            await db.updateOne({ goldore: db.goldore + gold });
          }
        } else if (stone === 14) {
          if (!db.diamond) {
            await db.updateOne({ diamond: diamond });
          } else {
            await db.updateOne({ diamond: db.diamond + diamond });
          }
        }
        if (!db.stone) {
          await db.updateOne({
            stone: stone
          });
        } else {
          await db.updateOne({
            stone: db.stone + stone
          });
        }
      }
      await db.updateOne({ cd: Date.now() });
      if (!db.minecount) {
        await db.updateOne({ minecount: 1 });
      } else {
        await db.updateOne({ minecount: db.minecount + 1 });
      }
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
              item.answers.some(
                a => a.toLowerCase() === m.content.toLowerCase()
              )
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
              item.answers.some(
                a => a.toLowerCase() === m.content.toLowerCase()
              )
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
              item.answers.some(
                a => a.toLowerCase() === m.content.toLowerCase()
              )
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
              item.answers.some(
                a => a.toLowerCase() === m.content.toLowerCase()
              )
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
  name: "mine",
  aliases: ["m", "mining"]
};
