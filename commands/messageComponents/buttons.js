const {SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('buttons')
        .setDescription("buttons in discord message!"),
    async execute(interaction){
        const red = new ButtonBuilder()
            .setCustomId('red button')
            .setLabel('red!')
            .setStyle(ButtonStyle.Danger);
        
        const grey = new ButtonBuilder()
            .setCustomId('grey button')
            .setLabel('grey')
            .setStyle(ButtonStyle.Secondary);
        
        const blue = new ButtonBuilder()
            .setCustomId('blue button')
            .setLabel('Blue')
            .setStyle(ButtonStyle.Primary);

        const green = new ButtonBuilder()
                .setCustomId('green button')
                .setLabel('Green')
                .setStyle(ButtonStyle.Success);

        const link = new ButtonBuilder()
            // .setCustomId('Link button')
            .setURL('https://discord.js.org')
            .setLabel('link')
            .setStyle(ButtonStyle.Link);   
        
        const emoji_button = new ButtonBuilder()
            .setCustomId('emoji button')
            .setLabel(' 󠁛󠀣󠀰󠀰󠀰󠀰󠀰󠀰󠀬󠀣󠁤󠀰󠁣󠀳󠁡󠁥󠁝')
            .setEmoji('1126100751400321046')
            .setStyle(ButtonStyle.Danger);

        const row = new ActionRowBuilder()
            .addComponents(blue, red, green, grey, emoji_button);
        
        await interaction.reply({
            content: `Here are the buttons on Discord! take a look`,
            components: [row]
        });
    }
}