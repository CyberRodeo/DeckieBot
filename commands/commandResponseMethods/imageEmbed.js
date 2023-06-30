const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('doggoimage')
        .setDescription('returns and image of the dog!'),
    async execute(interaction) {
        await interaction.reply('https://i.redd.it/3h830ttao8341.jpg');
    },
}