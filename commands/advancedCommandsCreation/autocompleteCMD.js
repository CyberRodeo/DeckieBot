const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('colors')
		.setDescription('colors based on autocomplete')
		.addStringOption(option =>
			option.setName('query')
				.setDescription('color to choose!')
				.setAutocomplete(true)),
	async autocomplete(interaction) {
		const focusedValue = interaction.options.getFocused();
		const choices = ['pink', 'red', 'black', 'white', 'green', 'yellow'];
		const filtered = choices.filter(choice => choice.startsWith(focusedValue));
		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	},
	async execute(interaction) {
		const choosen_option = interaction.options.getString('query');

		await interaction.reply(`You chose ${choosen_option}`);
	}
};	