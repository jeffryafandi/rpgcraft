const { Canvas } = require("canvas-constructor")
module.exports.run = async (client, msg, args) => {
  const Player = require("../../models/player.js")
  const db = await Player.findOne(
    {
      id: msg.author.id
    },
    (err, gg) => {
      if (err) console.error(err);
      if (!gg) {
        return msg.channel.send(client.config.start)
      }
    });
  async function createCanvas() {
    const { body: image } =
    await client.snek.get("https://cdn.discordapp.com/attachments/750513633854881814/750513805951369246/1598977255905-picsay.png");
    let skin;
    if (db.skin === "steve"){
    skin = await client.snek.get("https://cdn.discordapp.com/attachments/750513633854881814/750513805599178802/unnamed.png");
    }else if(db.skin === "alex") {
      
      skin = await client.snek.get("https://cdn.discordapp.com/attachments/750513633854881814/750513805766819871/unnamed_1.png")
    }

    return new Canvas(543, 337)
      .addImage(image, 0, 0, 543, 337)
      .addImage(skin.body, 60, 100,103, 200) //Semangat kaka :v Fucek :v
      .toBufferAsync();
  } 
  msg.channel.send({
    files: [{
      attachment: await createCanvas(),
      name: 'skin.png'
    }]
  })
}

module.exports.help = {
  name: "skin",
  aliases: []

}