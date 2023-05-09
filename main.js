const {Client, Events, GatewayIntentBits} = require("discord.js");
require("dotenv").config();


const client = new Client({intents: [GatewayIntentBits.Guilds]});


client.once(Event.ClientReady, c => {
    console.log(`ready to log in as $(c.user.tag)`);
});

client.login(process.env.token);