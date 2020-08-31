const McClient = require ("./src/structures/McClient")

const client = new McClient({
  disableMentions: "everyone"
})

require ('./src/structures/events')(client)


client.login(client.config.env.TOKEN)
//luu atur config ny token kek prefix kekok ok

