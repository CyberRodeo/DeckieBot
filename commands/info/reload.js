const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("reload")
        .setDescription("reload a command!")
        .addStringOption(option => {
            option.setName('command')
            .setDescription('the command to be reloaded!')
            .setRequired(true)
        }),
    async execute(interaction){
        const commandName = interaction.options.getString('command', true).toLowerCase();
        const command = interaction.client.commands.get(commandName);

        if(!command){
                interaction.reply('there is no command with name \`${commandName}`\!');
        }        

        delete require.cache[require.resolve(`./${command.data.name}.js`)];

        try{
            interaction.client.command.delete(command.data.name);
            const newCommand = require(`./${command.data.name}`);
            interaction.client.command.set(newCommand.command.data.name, newCommand);
            await interaction.reply(`Command ./${newCommand.data.name} was reloaded!`);
        } catch(error){
            console.log(error);
            await interaction.reply(`There was a problem reloading command \`${newCommand.data.name}\` :\n\`%{error.message}\``);
        }
    },


}