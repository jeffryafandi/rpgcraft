const { Client } = require ('discord.js')
const mdl = require ('./module')

class McClient extends Client {
  
  constructor(opt) {
    super(opt);
    
    
    this.config = require ('../config.json')
    
    
  }
//Bro config.json gua ngelag :v
}

module.exports = McClient