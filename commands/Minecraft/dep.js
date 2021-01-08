const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, msg, args) => {
  const Player = require("../../models/player.js");
  const settings = await Player.findOne(
    {
      id: msg.author.id
    },
    (err, gg) => {
      if (err) console.error(err);
      if (!gg) {
        return msg.channel.send(client.config.start);
      }
    }
  );
  let user = msg.author;

  let member = settings.bank;
  let member2 = settings.coin;

  if (args[0] == "all") {
    let money = settings.coin;

    await settings.updateOne({
      coin: settings.coin - settings.coin
    });
    if (!settings.bank) {
      await settings.updateOne({ bank: settings.coin });
    } else {
      await settings.updateOne({
        bank: settings.bank + settings.coin
      });
    }
    let embed5 = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(
        `You have deposited ${money.toLocaleString()} coins to your bank`
      );
    msg.channel.send(embed5);
  } else {
    let embed2 = new MessageEmbed()
      .setColor("RED")
      .setDescription(` Specify an amount to deposit`);

    if (!args[0]) {
      return msg.channel.send(embed2);
    }
    let embed3 = new MessageEmbed()
      .setColor("RED")
      .setDescription(`You can't deposit negative money`);

    if (msg.content.includes("-")) {
      return msg.channel.send(embed3);
    }
    let wembed = `Wrong syntax, Example: \`deposit 12900\` || \`deposit all\``;
    if (args[0].includes(".")) {
      return msg.channel.send(wembed);
    }
    if (isNaN(args[0])) {
      return msg.channel.send(wembed);
    }
    let embed4 = new MessageEmbed()
      .setColor("RED")
      .setDescription(`You don't have that much coins in the cash`);

    if (member2 < args[0]) {
      return msg.channel.send(embed4);
    }

    let embed5 = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(`You have deposited ${args[0]} coins to your bank`);

    msg.channel.send(embed5);
    await settings.updateOne({
      coin: settings.coin - parseInt(args[0].replace(/,/gi, ""))
    });
    if(!settings.bank){
    await settings.updateOne({
      bank: parseInt(args[0].replace(/,/gi, ""))
    });
    }else{
      await settings.updateOne({bank: settings.bank + parseInt(args[0].replace(/,/gi, ""))})
  }
  }
};

module.exports.help = {
  name: "deposit",
  aliases: ["dep", "dp"]
};
