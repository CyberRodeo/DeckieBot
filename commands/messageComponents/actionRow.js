const { ActionRowBuilder } = require("@discordjs/builders");
const { SlashCommandBuilder } = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('actionrow')
        .setDescription('Message Components'),
    async execute(interaction){
        const row = new ActionRowBuilder()
            .addComponents(component);
        await interaction.reply({components: [row]});
    }
}

