const { readdirSync } = require ('fs')

module.exports = client => {
  const event = readdirSync('./events')
  for(const evt of event) {
    const file = require (`./events/${evt}`)
    client.on(evt.split(".")
  }
}