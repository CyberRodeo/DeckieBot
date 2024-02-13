const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("createreactionroles")
        .setDescription("This command creates a reaction roles in the corresponding channel!"),
    async execute(interaction){
        interaction.reply("checking!!!!");
    }
};