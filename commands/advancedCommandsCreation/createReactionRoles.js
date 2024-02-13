const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rr')
        .setDescription('Creates Reaction roles in the corresponding channel!'),
    async execute(interaction){
        interaction.reply('This is a reaction role !');
    }
};