const { SlashCommandBuilder } = require("discord.js");

var timeout = [];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cooldown')
        .setDescription('command cooldown test!'),
    async execute(interaction){

        if(timeout.includes(interaction.user.id)) return await interaction.reply({content:"you are on a cooldown", ephemeral: true});
        await interaction.reply('cooldown tesing runnin...')

        timeout.push(interaction.user.id);
        setTimeout(() => {
            timeout.shift();
        }, 10000);
    },
}