module.exports.run = async (client, msg, args) => {
      const Player = require("../../models/player.js");
      const discord = require("discord.js")
      const db = await Player.findOne(
        {
          id: msg.author.id
        },
        (err, gg) => {
          if (err) console.error(err);
          if (!gg) {
            return msg.channel.send(client.config.start);
          }
        }
      )
      if (args[0] === "stick") {
        if (!db.log || db.log <= 0)
          return msg.channel.send("You don't have enough items to craft this");
        if (args[1] === "all") {
          if (!db.stick) {
            await db.updateOne({
              stick: db.log * 4
            });
          } else {
            await db.updateOne({
              stick: db.stick + db.log * 4
            });
          }
          await db.updateOne({
            log: db.log - db.log
          });
          msg.channel.send(`${4 * db.log} ${client.config.icon.stick} \`stick\` seccesfully crafted!`)
        } else {
          const item = args[1] || 1
          msg.channel.send(
            `${4 * item} ${client.config.icon.stick} \`stick\` succesfully crafted!`
          );
          await db.updateOne({
            log: db.log - item
          });
          if (!db.stick) {
            await db.updateOne({
              stick: item * 4
            });
          } else {
            await db.updateOne({
              stick: db.stick + item * 4
            });
          }
        }
      } else if (args[0] === "pickaxe") {
        if (!db.pickaxe) {
          if ((db.stick || 0) < 2 && (db.log || 0) < 3) {
            msg.channel.send(`**${msg.author.tag}**, You need 2 ${client.config.icon.stick} + 3 ${client.config.icon.log} to craft Wooden Pickaxe`);
          } else {
            await db.updateOne({
              stick: db.stick - 2
            });
            await db.updateOne({
              log: db.log - 3
            });
            await db.updateOne({
              pickaxe: 1
            });
            msg.channel.send(`**${msg.author.tag}**, ${client.config.icon.pickaxe1} \`Wooden Pickaxe\` succesfully crafted!`)
          }
        } else if (db.pickaxe === 1) {
          if ((db.stick || 0) < 2 && (db.stone || 0) < 3) {
            msg.channel.send(`**${msg.author.tag}**, You need 2 ${client.config.icon.stick} + 3 ${client.config.icon.stone} To craft Stone Pickaxe`)
          } else {
            await db.updateOne({
              stick: db.stick - 2
            });
            await db.updateOne({
              stone: db.stone - 3
            });
            await db.updateOne({
              pickaxe: 2
            });
            msg.channel.send(`**${msg.author.tag}**, ${client.config.icon.pickaxe2} \`Iron Pickaxe\` succesfully crafted!`)
          }
        }else if (db.pickaxe === 2) {
          if ((db.stick || 0) < 2 && (db.iron || 0) < 3) {
            msg.channel.send(`**${msg.author.tag}**, You need 2 ${client.config.icon.stick} + 3 ${client.config.icon.iron} To craft Iron Pickaxe`)
          } else {
            await db.updateOne({
              stick: db.stick - 2
            });
            await db.updateOne({
              stone: db.iron - 3
            });
            await db.updateOne({
              pickaxe: 3
            });
            msg.channel.send(`**${msg.author.tag}**, ${client.config.icon.pickaxe3} \`Iron Pickaxe\` succesfully crafted!`)
          }
        }else if (db.pickaxe === 3) {
          if ((db.stick || 0) < 2 && (db.gold || 0) < 3) {
            msg.channel.send(`**${msg.author.tag}**, You need 2 ${client.config.icon.stick} + 3 ${client.config.icon.gold} To craft Golden Pickaxe`)
          } else {
            await db.updateOne({
              stick: db.stick - 2
            });
            await db.updateOne({
              stone: db.gold - 3
            });
            await db.updateOne({
              pickaxe: 4
            });
            msg.channel.send(`**${msg.author.tag}**, ${client.config.icon.pickaxe2} \`Golden  pickaxe\` succesfully crafted!`)
          }
        }else if (db.pickaxe === 4) {
          if ((db.stick || 0) < 2 && (db.gold || 0) < 3) {
            msg.channel.send(`**${msg.author.tag}**, You need 2 ${client.config.icon.stick} + 3 ${client.config.icon.diamond} To craft Diamond Pickaxe`)
          } else {
            await db.updateOne({
              stick: db.stick - 2
            });
            await db.updateOne({
              stone: db.diamond - 3
            });
            await db.updateOne({
              pickaxe: 5
            });
            msg.channel.send(`**${msg.author.tag}**, ${client.config.icon.pickaxe2} \`Diamond  Pickaxe\` succesfully crafted!`)
          }
        } else {
          msg.reply(`\nthe correct usage of this command is \`craft [item]\`
See all recipes with \`recipes\``)
        }
      }};
      module.exports.help = {
        name: "craft",
        aliases: []
      };