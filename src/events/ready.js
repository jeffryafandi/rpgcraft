module.exports = client => {
    console.log(`Logged in as ${client.user.tag}`);
    
        client.user.setActivity(`Alpha v0.0.1`, { type: "PLAYING"})
        
}