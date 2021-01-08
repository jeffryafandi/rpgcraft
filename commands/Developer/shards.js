const { MessageEmbed } = require ('discord.js')

module.exports.run = async (client,msg,args) => {
  
  const pm = [
      client.shard.fetchClientValues('guilds.cache.size'),
      client.shard.broadcastEval('this.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)'),
      client.shard.fetchClientValues('events'),
    ];
  
 const info = await client.shard.broadcastEval(`[
this.shard.ids,
this.shard.mode, 
this.guilds.cache.size, 
this.channels.cache.size, 
this.users.cache.size, 
Math.round((process.memoryUsage().heapUsed / 1024 / 1024)),
this.events,
this.ws.ping
]`)

//const { MessageEmbed } = require ('discord.js')

const embed = new MessageEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username} Shards Info`, client.user.avatarURL())
info.forEach(s => {
  
  let ping = s[7]
  
  if(ping === null) {
    ping = 0
  }
  
  const status = s[7] > 1 ? "Online" : "Offline";
embed.addField(`Shard #${parseInt(s[0]) + 1 }`, `Status: **${status}**\n- Memory: **${s[5]} mb**\n- Guilds: ${s[2]}\n- Channels: ${s[3]}\n- Users: ${s[4].toLocaleString()}\n- Api latency: ${ping} ws`)
}, true)
  
  Promise.all(pm)
  .then(res => { 
    let memory = 0;
    info.forEach(s => memory += s[5]);
    let latency = 0;
    info.forEach(s => latency += s[7]);
    latency = latency / info.length;
    
    //Ngapain???
    const guilds = res[0].reduce((prev, guildCount) => prev + guildCount, 0)
    const users = res[1].reduce((prev, memberCount) => prev + memberCount, 0)
//embed.addField(`Total`, `Memory: **${memory} mb**\nLatency: **${latency} ms**\nGuilds: **${guilds.toLocaleString()}**\nUsers: **${users.toLocaleString()}**`)
    msg.channel.send(embed)
    
  })
  


//msg.channel.send(embed)
  
}

module.exports.help = {
  name: "shards",
  aliases: ['shard', 'shardinfo']
}