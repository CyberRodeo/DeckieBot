const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('followups')
        .setDescription('to send followups message to same msg after the initial response!'),
    async execute(interaction){

    },
};


