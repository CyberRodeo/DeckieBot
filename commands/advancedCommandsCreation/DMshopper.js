const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('message')
        .setDescription('To message the developers about the bot! please describe well!')
        .addStringOption(option =>(
            option.setName('msg')
                .setDescription('type your message here!')
        )),
    async execute(interaction){

    }
}