const { Client } = require("discord.js");
const mdl = require("./module");

class McClient extends Client {
  constructor(opt) {
    super(opt);

    this.commands = mdl.commands;
    this.helps = mdl.helps;
    this.aliases = mdl.aliases;
    this.player = require("../../models/player");
    this.client = require("../../models/client");
    this.guild = require("../../models/guild");
    this.snek = require("node-superfetch");
    this.config = require("../../config.json");
    this.mongoose = require("../../database.js");
    this.mongoose.init();
    this.util = require("../../util.js")
  }
}
module.exports = McClient;
 