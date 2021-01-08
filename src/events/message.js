const { DiscordAPIError } = require("discord.js");

module.exports = async (client, msg) => {
  const mongoose = require("mongoose");
  const Guild = require("../../models/guild.js");
  const discord = require("discord.js");
  const ms = require("pretty-ms");
  client.util.guild(msg.guild.id).then(async settings => {
    const custom = require("../../models/custom")
    const db = await custom.findOne({id: "admin"})
    
    if(msg.author.id === "574783649296416771"){
      if (msg.content.toLowerCase() === "rpg hunt"){
        let author = await db.hunt
        let timeout = 60000

    if (author !== null && timeout - (Date.now() - author) > 0)return;
        else {
          setTimeout(()=>{
            msg.reply("cd hunt udh siap cuy")
          },60000)
      await db.updateOne({hunt: Date.now()})
    }
      }
    }
    
    if(!msg.guild || msg.author.bot)return;
    
    if (msg.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`)))
      return msg.channel.send(`**My prefix here is:** \`${settings.prefix}\``);
    if (
      msg.content.toLowerCase().startsWith(settings.prefix) ||
      msg.content.startsWith(`${client.user.toString()} `)
    )
      return require("../structures/command")(client, msg);
  });
};
