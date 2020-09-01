const McClient = require ("./src/structures/McClient")

const client = new McClient({
  disableMentions: "everyone"
})

require ('./src/structures/events')(client)
//pindah ke tempat gw
client.login(client.config.ENV.TOKEN)
//luu atur config ny token kek prefix kekok ok

