const {SlashCommandBuilder} = require('discord.js');
const rand_int = Math.floor(Math.random() * 3);

// 0 - rock 
// 1 - paper 
// 2 - scissor

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rps')
        .setDescription('play rock paper scissor with the bot!')
        .addStringOption(option =>
            option.setName('choices')
                .setDescription('rps choices')
                .setRequired(true)
                .addChoices(
                    { name: 'rock', value: 'rock' },
                    { name: 'paper', value: 'paper' },
                    { name: 'scissor', value: 'scissor' },
                )),
    async execute(interaction){
        const user_choice = interaction.options.getString('choices');

        // await interaction.reply({content: `you picked ${user_choice}`, ephemeral: true});
        // await wait(1000)
        if(user_choice === "rock" && rand_int == 0){
            await interaction.reply(`Its a Draw! bot chose Rock!`);
            await interaction.followUp('https://media.tenor.com/b0PPWTjR4KcAAAAC/draw.gif');
        } else if(user_choice === "rock" && rand_int == 1){
            await interaction.reply(`You win! Bot chose paper!`);
            await interaction.followUp('https://media.tenor.com/m1VMTi9N1A8AAAAi/you-win-you-did-it.gif');
        } else if(user_choice === "rock" && rand_int == 2){
            await interaction.reply(`You win! Bot chose Scissor!`);
            await interaction.followUp('https://media.tenor.com/m1VMTi9N1A8AAAAi/you-win-you-did-it.gif');
        } else if(user_choice === "paper" && rand_int == 0){
            await interaction.reply(`Bot wins, Bot chose rock!`);
            await interaction.followUp('https://media.tenor.com/LRKlbuGlNbEAAAAi/lose-%E8%B2%A0%E3%81%91.gif');
        } else if(user_choice === "paper" && rand_int == 1){
            await interaction.reply(`Its a Draw! Bot chose paper!`);
            await interaction.followUp('https://media.tenor.com/b0PPWTjR4KcAAAAC/draw.gif');
        } else if(user_choice === "paper" && rand_int == 2){
            await interaction.reply(`Bot wins, bot chose Scissor!`);
            await interaction.followUp('https://media.tenor.com/LRKlbuGlNbEAAAAi/lose-%E8%B2%A0%E3%81%91.gif');
        } else if(user_choice === "scissor" && rand_int == 0){
            await interaction.reply(`Bot wins, Bot chose Rock!`);
            await interaction.followUp('https://media.tenor.com/LRKlbuGlNbEAAAAi/lose-%E8%B2%A0%E3%81%91.gif');
        } else if(user_choice === "scissor" && rand_int == 1){
            await interaction.reply(`You win, bot chose paper!`);
            await interaction.followUp('https://media.tenor.com/m1VMTi9N1A8AAAAi/you-win-you-did-it.gif');
        } else if(user_choice === "scissor" && rand_int == 2){
            await interaction.reply(`Its a draw, bot chose Scissor too!`);
            await interaction.followUp('https://media.tenor.com/b0PPWTjR4KcAAAAC/draw.gif');
        }
        
    }
}