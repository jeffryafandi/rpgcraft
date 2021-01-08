const Player = require("../../models/player.js");
const discord = require("discord.js");
module.exports.run = async (client, msg, args) => {
  let user = await client.users.fetch(args.slice(0).join(" ").slice(2, -1)).catch(() => null) || await client.users.fetch(args[0]).catch(() => null) || client.users.cache.find(x => x.tag.toLowerCase() === args.slice(0).join(" ").toLowerCase()) || client.users.cache.find(x => x.username.toLowerCase() === args.slice(0).join(" ").toLowerCase()) || msg.author
    const db = await Player.findOne(
      {
        id: user.id
      },
      (err, gg) => {
        if (err) console.error(err);
        if (!gg) {
          return msg.channel.send(client.config.start);
        }
      }
    );
    let data = [
      {
        barang: `${client.config.icon.rotten} Rotten Flesh`,
        ada: db.rotten
      },
      {
        barang: `${client.config.icon.bone} Bone`,
        ada: db.bone
      },
      {
        barang: `${client.config.icon.gunpowder} Gunpowder`,
        ada: db.gunpowder
      },
      {
        barang: `${client.config.icon.string} String`,
        ada: db.string
      },
      {
          barang: `${client.config.icon.log} Log`,
          ada: db.log
      },
      {
        barang: `${client.config.icon.stick} Stick`,
        ada: db.stick
      },
      {
        barang: `${client.config.icon.stone} Stone`,
        ada: db.stone
      },
      {
        barang: `${client.config.icon.coal} Coal`,
        ada: db.coal
      },
      {
        barang: `${client.config.icon.ironore} Iron Ore`,
        ada: db.ironore
      }
    ];
    const result = data
      .filter(x => x.ada > 0)
      .map(n => `${n.barang}: ${n.ada}`)
      .join("\n");
    let data1 = [
      {
        barang: "Chest",
        ada: db.chest || 0
      },
      {
        barang: "Life potion",
        ada: db.chest || 0
      }
    ];
    const result1 = data1
      .filter(x => x.ada > 0)
      .map(n => `${n.barang}: ${n.ada}`)
      .join("\n");
  let rare = [
    {
      barang: `${client.config.icon.gold} Gold`,
      ada: db.gold
    },{
      barang: `${client.config.icon.diamond} Diamond`,
      ada: db.diamond
    },{
      barang: `${client.config.icon.lapis} Lapis Lazuli`,
      ada: db.lapis
    }
  ];const r = rare.filter(x => x.ada > 0).map(n => `${n.barang}: ${n.ada}`).join("\n");

    let embed = new discord.MessageEmbed()
      .setAuthor(
        `${user.username}'s Inventory`,
        user.displayAvatarURL({ dynamic: true })
      )
      .setColor(client.config.COLOR.RANDOM)
      .setDescription(
        `**Rare**\n${r || "None"}\n**Items**\n${result ||
          "None"}\n**Consumables**\n${result1 ||
          "None"}`
      )
      .setFooter(client.config.footer)
      .setTimestamp()
    msg.channel.send(embed);
  }
  module.exports.help = {
    name: "inventory",
    aliases: ["bp","backpack","i","inv"]
  }
  