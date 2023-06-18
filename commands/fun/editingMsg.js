const {SlashCommandBuilder} = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('gf')
        .setDescription('command to edit msg after sent'),
    async execute(interaction){

    }
}

