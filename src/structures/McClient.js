const { Client } = require ('discord.js')
const mdl = require ('./module')

class McClient extends Client {
  
  constructor(opt) {
    super(opt);
    
    
    this.config = require ('../config.json')
    this.mongoose = require("../database.js")  
    this.mongoose.init()
  }
}
module.exports = McClient