const {SlashCommandBuilder, UserSelectMenuBuilder, ActionRowBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('multiselect')
        .setDescription('just a normal menu select only thing it has is that you can select multiple options'),
    async execute(interaction){
        const multiSelect = new UserSelectMenuBuilder()
            .setCustomId('users')
            .setPlaceholder('Select Multiple users...')
            .setMinValues(1)
            .setMaxValues(10);

        const row1 = new ActionRowBuilder()
            .addComponents(multiSelect);
        
        await interaction.reply({content:"Select users :)", components: [row1]
        
        });
    },
};