const discord = require("discord.js")

module.exports.run = async (client, msg, args) =>{
let start = Date.now();
msg.channel.send(`Pinging...`).then(m => {
let end = Date.now();
         let ping = (end - start)
         m.edit(`🏓 **Pong!** Latency is \`${require("pretty-ms")(ping)}\`, Websocket is \`${require("pretty-ms")(client.ws.ping)}\``)
}) 
    }
module.exports.help= {
  name: "ping",
  aliases: []
}