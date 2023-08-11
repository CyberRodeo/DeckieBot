const {SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder} = require('discord.js');

module.exports = {
    data:  new SlashCommandBuilder()
        .setName('selectmenu')
        .setDescription('Command to send select menu in the chat!'),
    async execute(interaction){
        const select = new StringSelectMenuBuilder()
        .setCustomId('starter')
		.setPlaceholder('Make a selection!')
		.addOptions(
			new StringSelectMenuOptionBuilder()
				.setLabel('Bulbasaur')
				.setDescription('The dual-type Grass/Poison Seed Pokémon.')
				.setValue('bulbasaur'),
			new StringSelectMenuOptionBuilder()
				.setLabel('Charmander')
				.setDescription('The Fire-type Lizard Pokémon.')
				.setValue('charmander'),
			new StringSelectMenuOptionBuilder()
				.setLabel('Squirtle')
				.setDescription('The Water-type Tiny Turtle Pokémon.')
				.setValue('squirtle'), 
            );

            const row = new ActionRowBuilder()
                .addComponents(select);

            await interaction.reply({
                content: "make a starter!",
                components: [row],
            });
    }
};