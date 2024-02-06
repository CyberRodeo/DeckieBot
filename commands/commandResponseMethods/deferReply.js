const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deferreply')
		.setDescription('takes more than 4 secs to respond!'),
	async execute(interaction) {

	}
};