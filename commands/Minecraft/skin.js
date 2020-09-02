const { Canvas } = require('canvas-constructor')
module.expotrs.run = async(client, msg, args)=>{
async function createCanvas() {
const { body: image} = 
      await client.snek.get("https://cdn.discordapp.com/attachments/750513633854881814/750513805951369246/1598977255905-picsay.png") 

    return new Canvas(543, 337)
        .addImage(image, 0, 0, 543, 337)
        .toBufferAsync();
}
     msg.channel.send({
files: [{
attachment: await createCanvas(),
name: 'skin.png'}]
})}

module.exports.help = {
  name: "skin",
  aliases: []

}