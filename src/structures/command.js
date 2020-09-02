
 const Guild = require("../../models/guild.js")
 const mongoose = require("mongoose")
 
 
 module.exports = async (client, msg) =>{
 const guild = await Guild.findOne(
      {
        guildID: msg.guild.id
      },
      (err, guild) => {
        if (err) console.error(err);
        if (!guild) {
          const newGuild = new Guild({
            _id: mongoose.Types.ObjectId(),
            guildID: msg.guild.id,
            prefix: "mc!"
          });

          newGuild
            .save()
            .then(result => console.log(result))
            .catch(err => console.error(err));
        }
      } 
    );
  const pref = guild.prefix
  
  const PREFIX = msg.content.startsWith(pref) ? pref: `${client.user.toString()} `
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g)
  const command = args.shift()
  
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  }
  if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (!cmd) return undefined;
   if(!client.config.ENV.OWNER_ID.includes(msg.author.id) && cmd.help.module.hide === true) return undefined
  
  cmd.run(client, msg, args)
  
}