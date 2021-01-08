const Player = require('../../models/player.js');
const discord = require("discord.js");


module.exports.run = async (client, msg, args) => {
  client.util.guild(msg.guild.id).then(async(g)=>{
  let a;
  let b;
  let pg;
  let ii;
  const amt = args[1] || "1"
  if (amt === "1") {
    a = 1
    b = 10
    pg = "1"
    ii = 0
  } else {
    let aaaa = 10 + (amt- +1)
    a = amt* +11 - aaaa
    b = a+ +9
    ii = amt* +10 -10
    pg = amt
  }
  if (isNaN(pg))return msg.channel.send("Invalid Page")
  if (args[0] === "coin") {
    const cursor = Player.find({ 'blacklist': false }).sort({ 'coin': -1 });
    const embed = new discord.MessageEmbed()
      .setColor(client.config.COLOR.RANDOM)
      .setTitle(`${client.config.icon.coin}Coin Leaderboard${client.config.icon.coin} •Page: ${pg}`)
      .setTimestamp()
      .setFooter(client.config.footer)
    cursor.exec((err, result) => {
      if (err) {
        console.error(err);
        return msg.reply('sorry an error has occurred!');
      }
      var aaa;
      let order = 0;
      for (let i = a-1; i < b; i++) {
        if (i > result.length - 1) {
          break;
        }
        aaa += `\`[${++ii}]\` ${result[i].tag || "Uknown"} ~ ${[result[i].coin].toLocaleString() || "0"} ${client.config.icon.coin}\n`
        order++;
        embed.setDescription(aaa.replace(/undefined/gi,"").replace(/\`\[1\]\`/,"🥇").replace(/\`\[2\]\`/,"🥈").replace(/\`\[3\]\`/,"🥉"))
      }

      msg.channel.send(embed);
    });
  }else if (args[0] === "bank") {
    const cursor = Player.find({ 'blacklist': false }).sort({ 'bank': -1 });
    const embed = new discord.MessageEmbed()
      .setColor(client.config.COLOR.RANDOM)
      .setTitle(`${client.config.icon.coin}Bank Leaderboard${client.config.icon.coin} •Page: ${pg}`)
      .setTimestamp()
      .setFooter(client.config.footer)
    cursor.exec((err, result) => {
      if (err) {
        console.error(err);
        return msg.reply('sorry an error has occurred!');
      }
      var aaa;
      let order = 0;
      for (let i = a-1; i < b; i++) {
        if (i > result.length - 1) {
          break;
        }
        aaa += `\`[${++ii}]\` ${result[i].tag || "Uknown"} ~ ${[result[i].bank].toLocaleString() || "0"} ${client.config.icon.coin}\n`
        order++;
        embed.setDescription(aaa.replace(/undefined/gi,"").replace(/\`\[1\]\`/,"🥇").replace(/\`\[2\]\`/,"🥈").replace(/\`\[3\]\`/,"🥉"))
      }

      msg.channel.send(embed);
    });
  }else if (args[0] === "emerald") {
    const cursor = Player.find({ 'blacklist': false }).sort({ 'emerald': -1 });
    const embed = new discord.MessageEmbed()
      .setColor(client.config.COLOR.RANDOM)
      .setTitle(`${client.config.icon.emerald}Emerald Leaderboard${client.config.icon.emerald} •Page: ${pg}`)
      .setTimestamp()
      .setFooter(client.config.footer)
    cursor.exec((err, result) => {
      if (err) {
        console.error(err);
        return msg.reply('sorry an error has occurred!');
      }
      var aaa;
      let order = 0;
      for (let i = a - 1; i < b; i++) {
        if (i > result.length - 1) {
          break;
        }
        aaa += `\`[${++ii}]\` ${result[i].tag || "Uknown"} ~ ${[result[i].emerald].toLocaleString() || "0"} ${client.config.icon.emerald}\n`
        order++;
        embed.setDescription(aaa.replace(/undefined/gi, "").replace(/\`\[1\]\`/, "🥇").replace(/\`\[2\]\`/, "🥈").replace(/\`\[3\]\`/, "🥉"))
      }
  
      msg.channel.send(embed);
    });
  }else if (args[0] === "diamond") {
    const cursor = Player.find({ 'blacklist': false }).sort({ 'diamond': -1 });
    const embed = new discord.MessageEmbed()
      .setColor(client.config.COLOR.RANDOM)
      .setTitle(`${client.config.icon.diamond}Diamond Leaderboard${client.config.icon.diamond} •Page: ${pg}`)
      .setTimestamp()
      .setFooter(client.config.footer)
    cursor.exec((err, result) => {
      if (err) {
        console.error(err);
        return msg.reply('sorry an error has occurred!');
      }
      var aaa;
      let order = 0;
      for (let i = a - 1; i < b; i++) {
        if (i > result.length - 1) {
          break;
        }
        aaa += `\`[${++ii}]\` ${result[i].tag || "Uknown"} ~ ${[result[i].diamond].toLocaleString() || "0"} ${client.config.icon.diamond}\n`
        order++;
        embed.setDescription(aaa.replace(/undefined/gi, "").replace(/\`\[1\]\`/, "🥇").replace(/\`\[2\]\`/, "🥈").replace(/\`\[3\]\`/, "🥉"))
      }
  
      msg.channel.send(embed);
    });
  }else if (args[0] === "level") {
    const cursor = Player.find({ 'blacklist': false }).sort({ 'level': -1 });
    const embed = new discord.MessageEmbed()
      .setColor(client.config.COLOR.RANDOM)
      .setTitle(`🎐Level Leaderboard🎐 •Page: ${pg}`)
      .setTimestamp()
      .setFooter(client.config.footer)
    cursor.exec((err, result) => {
      if (err) {
        console.error(err);
        return msg.reply('sorry an error has occurred!');
      }
      var aaa;
      let order = 0;
      for (let i = a - 1; i < b; i++) {
        if (i > result.length - 1) {
          break;
        }
        aaa += `\`[${++ii}]\` ${result[i].tag || "Uknown"} ~ ${[result[i].level].toLocaleString() || "0"} 🎐\n`
        order++;
        embed.setDescription(aaa.replace(/undefined/gi, "").replace(/\`\[1\]\`/, "🥇").replace(/\`\[2\]\`/, "🥈").replace(/\`\[3\]\`/, "🥉"))
      }
  
      msg.channel.send(embed);
    });
  }else{
    let embed = new discord.MessageEmbed()
    .setAuthor("Leaderboard Options")
    .setColor(client.config.COLOR.RANDOM)
    .setDescription(`\`coin\`, \`bank\`, \`emerald\`, \`diamond\`, \`level\`.\n**Usage:**\n\`${g.prefix}top <options> [page]\``)
    .setFooter(client.config.footer)
    .setTimestamp()
    msg.channel.send(embed)
  }})
}
module.exports.help = {
  name: "top",
  aliases: ["leaderboard", "lb"]
}