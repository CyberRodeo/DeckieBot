const {Events} = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client){
        console.log(`Ready to log in as ${client.user.tag}`);
    }
}