const { Events, InteractionType } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		} 

		if(interaction.type == InteractionType.ApplicationCommandAutocomplete){
			const { commands } = client;
			const { commandName } = interaction;
			const { command }  = commands.get(commandName);

			if(!command) return;

			try{
				await interaction.autocomplete(interaction, client);
			} catch(error){
				console.error(error);
				
			}
		}
	},
};