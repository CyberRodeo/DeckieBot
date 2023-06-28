const {SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('subcommand')
		.setDescription('SubCommand example!')
		.addUserOption(option =>
			option
				.setName('target')
				.setDescription('The member to get info of')),
    async execute(interaction){
        if(interaction.options.getSubcommand() === 'user'){
            const user  = interaction.options.getUser('target');

            if(user){
                await interaction.reply(`Username: ${interaction.user.username}\n id: ${interaction.user.id}`);
            } else {
                await interaction.reply(`Your username: ${interaction.user.username}\n Your id: ${interaction.uesr.id}`);
            }    
        }
        else if(interaction.options.getSubcommand() === "server"){
            await interaction.reply(`Server name: ${interaction.guild.name}\n Total numbers: ${interaction.guild.memberCount}`)
        }
    }
};