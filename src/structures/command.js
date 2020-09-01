
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
            prefix: client.config.PREFIX
          });

          newGuild
            .save()
            .then(result => console.log(result))
            .catch(err => console.error(err));
        }
      } 
    );
  const pref = client.config.PREFIX
  
  const PREFIX = msg.content.startsWith(pref) ? pref: `${client.user.toString()} `
  const args = msg.content.slice(PREFIX.length).trim().split(/ +/g)
  const cmd = args.shift()
  
  cmd.run(client, msg, args)
  
}