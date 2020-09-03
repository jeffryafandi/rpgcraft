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
      if (db.biome != "1") { return msg.channel.send("You need to change the biome to `Ground` or `Forest`") }
      if (!db.chopcount) {
        await db.updateOne({
          chopcount: 1
        })
      } else {
        await db.updateOne({
          chopcount: db.chopcount + 1
        })
      };
      let a = 1 
      let b = 3
      let axe = "Hand"
      if (db.axe === 1) {
        axe = `${client.db.icon.axe1} Wooden Axe`;
        b = 6
      }
      if (db.axe === 2){ axe = `${client.db.icon.axe2} Iron Axe`
        b = 9
      }
      if (db.axe === 3){ axe = `${client.db.icon.axe3} Golden Axe`
      a = 3
        b = 13
      }
      if (db.axe === 4){ axe = `${client.db.icon.axe4} Diamond Axe`
        a = 8
        b = 21
      }
      if (db.axe === 5){ axe = `${client.db.icon.axe5} Netherite Axe`
        a = 10
        b = 35
      }
      let random = Math.floor(Math.random() * b) + a
      let zombie = Math.floor(Math.random() * 25) + 1
      
      if(zombie > 24){
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
        
      }else{ 
        const quiz = require('../../src/quiz/zombie.json');
        const item = quiz[Math.floor(Math.random() * quiz.length)];
        const filter = m => {
          return m.author.id === msg.author.id && item.answers.some(a => a.toLowerCase() === m.content.toLowerCase());
        };
        
        msg.channel.send(item.question).then(() => {
          msg.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
            .then(collected => {
              msg.channel.send(`${collected.first().author} got the correct answer!`);
            })
            .catch(collected => {
              msg.channel.send(`You die, -3 exp`);
            });
        });
}

      }

      module.exports.help = {
        name: "chop",
        aliases: []
      }