module.exports = client => {
    console.log(`Logged in as ${client.user.tag}`);
    
        client.user.setPresence({
            status: 'dnd',
            activity: {
                name: `Beta Version`,
                type: 'STREAMING',
                url: '-'
            }
        });
}