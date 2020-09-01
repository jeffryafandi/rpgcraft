module.exports = async (client, msg) => {
  const mongoose = require("mongoose")
  const Guild = require("../../models/guild.js")
  const settings = await Guild.findOne(
      {
        guildID: msg.guild.id
      },
      (err, guild) => {
        if (err) console.error(err);
        if (!guild) {
          const newGuild = new Guild({
            _id: mongoose.Types.ObjectId(),
            guildID: msg.guild.id,
            prefix: "m!"
          });

          newGuild
            .save()
            .then(result => console.log(result))
            .catch(err => console.error(err));
        }
      }
    );
  if(msg.author.bot || !msg.guild) return;
  if(msg.content.startsWith(client.config.PREFIX) || msg.content.startsWith(`${client.user.toString()} `)) return require ('../structures/command')(client, msg)
}