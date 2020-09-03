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
            prefix: "mc!"
          });

          newGuild
            .save()
            .then(result => console.log(result))
            .catch(err => console.error(err));
        }
      }
    );
  if(msg.author.bot || !msg.guild) return;
  if(msg.content.toLowerCase().startsWith(settings.prefix) || msg.content.startsWith(`${client.user.toString()} `)) return require ('../structures/command')(client, msg)
}