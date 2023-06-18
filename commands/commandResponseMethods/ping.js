// const { SlashCommandBuilder } = require("discord.js");

// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('bot ping')
//         .setDescription('tells the ping of the bot!'),
    
//         async execute(interaction){
//             await interaction.reply(`Websocket heartbeat: ${client.ws.ping}ms.`);
//         }
// }

const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('botping')
        .setDescription('fetches the websocket heartbeat ping!'),
    async execute(interaction){
        
    },
};
