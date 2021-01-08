const snek = require("node-superfetch");
const discord = require("discord.js");
const nodeVersion = parseInt(process.versions.node.split("."), 10);
const config = require("./config.json");

class Util {
  static randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  static async player(id){
    const player = require("./models/player.js");
    return await player.findOne({id: id}, (err, gg) => {
      if (err) return console.error(err)
    })
  }
  static async client(id){
    const client = require("./models/client.js");
    return await client.findOne({id: id}, (err, gg) =>{
      if (err) return console.error(err)
    })
  }
  static async guild(id){
    const guild = require("./models/guild.js");
    return await guild.findOne({guildID: id}, (err, gg)=>{
      if(err)return console.error(err)
    })
  }
  static pickaxe() {
    let embed = new discord.MessageEmbed()
    .setAuthor("Pickaxe Recipes")
    .setColor(config.COLOR.RANDOM)
    .setTimestamp()
    .setFooter("usage: craft [item name]")
    .setDescription(`${config.icon.pickaxe1} \`wooden pickaxe\` » 3 ${config.icon.log} + 2 ${config.icon.stick}`)
    return embed
  }
  static shuffle(array) {
    const arr = array.slice(0);
    for (let i = arr.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  }
  static async hastebin(text) {
    const { body } = await snek
      .post("https://hasteb.in/documents")

      .send(text);
    return `https://hasteb.in/${body.key}`;
  }
  static chunk(array, chunkSize) {
    const temp = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      temp.push(array.slice(i, i + chunkSize));
    }
    return temp;
  }
  static parseDur(ms) {
    return require('pretty-ms')(ms)
  }
  static trimArray(array, length = 10) {
    const len = array.length - length;
    const temp = array.slice(0, length);
    temp.push(`...${len} more.`);
    return temp;
  }
  static async verify(user, msg, time = 30000) {
    await msg.react("🇾");
    await msg.react("🇳");
    const data = await msg.awaitReactions(
      reaction => reaction.users.has(user.id),
      { time: time, max: 1 }
    );
    if (data.firstKey() === "🇾") return true;
    return false;
  }
  static codeblock(string, code) {
    return `\`\`\`${code}\n${string}\`\`\``;
  }
  static decodeHtmlEntities(text) {
    return text.replace(/&#(\d+);/g, (rep, code) => String.fromCharCode(code));
  }
  static async scrapeSubreddit(subreddit) {
    subreddit =
      typeof subreddit === "string" && subreddit.length !== 0
        ? subreddit
        : "puppies";
    const { body } = await snek.get(
      `https://imgur.com/r/${subreddit}/hot.json`
    );
    if (!body.data) return undefined;
    const img = body.data[Math.floor(Math.random() * body.data.length)];
    return `http://imgur.com/${img.hash}${img.ext.replace(/\?.*/, "")}`;
  }
  static promisify(fn) {
    if (nodeVersion >= 8) return require("util").promisify(fn);
    let name = fn.name;
    name = (name || "").replace(/\s|bound(?!$)/g, "");
    function newFunction(...args) {
      const arg = [];
      for (const key of Object.keys(args)) arg.push(args[key]);
      return new Promise((resolve, reject) =>
        fn.apply(this, [
          ...args,
          (err, res) => {
            if (err) return reject(err);
            return resolve(res);
          }
        ])
      );
    }
    Object.defineProperty(newFunction, "name", { value: name });
    return newFunction;
  }
  static promisifyAll(obj, suffix = "Async") {
    const newObj = Object.getPrototypeOf(obj);
    for (const key of Object.keys(obj).concat(Object.keys(newObj))) {
      if (typeof obj[key] !== "function") continue;
      obj[`${key}${suffix}`] = this.promisify(obj[key]);
    }
    return obj;
  }
}

module.exports = Util;
