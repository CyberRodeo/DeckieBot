const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fetchanddel')
        .setDescription('bruh bruh'),
    async execute(interaction) {
        await interaction.reply('ping pong!');
        // await interaction.deleteReply();
        const message = await interaction.fetchReply();
        console.log(message);
        // await interaction.reply(message)
    },
};
