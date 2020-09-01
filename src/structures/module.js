const fs = require ('fs')
const path = require ('path')
const { Collection } = require ('discord.js')

const Helps = new Collection ()
const Aliases = new Collection ()
const Commands = new Collection ()


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
    
    file = require (`../commands/${mod}/${file}`)
    Commands.set(file.help.name.toLowerCase(), file)
    Helps.get(module.toLowerCase().cmds.push(file.help.name))
    
    
    for(const al of file.help.aliases) {
      Aliases.set(al.toLowerCase(), file.help.name)
    }
  }  
}

console.log(`[Info] ${Commands.size} Commands Loaded...`)
console.log(`[Info] ${module.length} Module Loaded`)


module.exports.commmands =✓