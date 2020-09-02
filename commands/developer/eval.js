module.exports.run = async (client,msg,args) => {
  
const { MessageEmbed } = require("discord.js");
const discord = require('discord.js')
const Player = require("../../models/player.js")
const cfg = require ('../../config.json')
    
    
    if(!cfg.ENV.OWNER_ID.includes(msg.author.id)) {
      return msg.reply("you do not have permission to use this command!");
    }
    function clean(text) {
      if (typeof text === "string")
        return text
          .replace(/`/g, "`" + String.fromCharCode(8203))
          .replace(/@/g, "@" + String.fromCharCode(8203));
      else return text;
    }
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string") evaled = require("util").inspect(evaled);

      msg.channel.send(clean(evaled), { code: "xl" });
    } catch (err) {
      msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  
}
module.exports.help = {
  name: "eval",
  aliases: ["ev"]
}