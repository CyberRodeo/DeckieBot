const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('boolean')
        .setDescription('Replies with your input!')
        .addBooleanOption(option =>
            option.setName('ephemeral')
                .setDescription('whethere or not the echo should be ephemeral!')),
    async execute(interaction){
    // trynna parse the boolean options, not yet succeeded
       const boolean = interaction.options.getString('ephemeral');
       console.log(boolean)
        // if(boolean === 'true'){
        //     await interaction.reply({content: "this is an ephemeral message!", ephemeral: true});
        // } else {
        //     await interaction.reply('this is not an ephemeral message!')
        // }
    }
}