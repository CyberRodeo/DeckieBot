const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('gif')
        .setDescription('Sends a random gif!')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('The gif category')
                .setRequired(true)
                .addChoices(
                    { name: 'Funny', value: 'gif_funny' },
                    { name: 'Meme', value: 'gif_meme' },
                    { name: 'Movie', value: 'gif_movie' },
                )),
    async execute(interaction){
        const category = interaction.options.getString('category');

        if(category === 'gif_funny'){
            await interaction.reply('https://tenor.com/view/rigole-gif-25807483');
        } else if(category === 'gif_meme'){
            await interaction.reply('https://tenor.com/view/dog-meme-gif-25326537');
        } else if(category === 'gif_movie'){
            await interaction.reply('https://tenor.com/view/transformers-yellow-pose-ready-to-fight-gif-14455321');
        }
        await interaction.reply(category); 
    }
    
}