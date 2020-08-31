const fs = require ('fs')
const path = require ('path')
const { Collection } = require ('discord.js')

const Helps = new Collection ()
const Aliases = new Collection ()
const Commmands = new Collection ()


const module = fs.readdirSync('../commands').filter(x => 
  fs.statSync(path.join("../commands", x)).isDirectory());


for(const mod of module) {
  
  const mdConf = require(`../commands/${mod}/mdl.json`)
  
  mdConf.path = `../commands/${mod}`;
  mdConf.cmds = []
  Helps.set(module.toLowerCase(), mdConf)
  
  
  const cmdFiles = fs.readdirSync(path.resolve(`../commands/${mod}`))
    .filter(x => !fs.statSync(path.esolve("../commands/", mod, x)).isDirectory())
    .filter(x => x.endsWith(".js"));
  
  for(const file of cmdFiles) {
    file = file.substr(0, file.length - 3)
    
  }

  
  
  
}//Conect mongo ??? yes lu atur database