module.exports = client => {
    console.log(`Logged in as ${client.user.tag}`);
    
        client.user.setPresence({
            status: 'dnd',
            activity: {
                name: 'm!help  | v0.0.1',
                type: 'STREAMING',
                url: '-'
            }
        });
}