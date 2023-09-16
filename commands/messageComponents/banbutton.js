const {ActionRowBuilder, SlashCommandBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, PermissionFlagsBits} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('banning')
        .setDescription('To ban members using a button!')
        .addUserOption(option =>
            option
                .setName('target')
                .setDescription('Select user to ban!')
                .setRequired(true))
        .addStringOption(option =>
            option
                .setName('reason')
                .setDescription('Give a suitable reason to ban this member.')
                .setRequired(false))
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
        .setDMPermission(false),
    async execute(interaction){
        const confirm = new ButtonBuilder()
            .setCustomId('confirmBan')
            .setLabel('Yes')
            .setStyle(ButtonStyle.Danger)
        const cancel = new ButtonBuilder()
            .setCustomId('cancelban')
            .setLabel('No')
            .setStyle(ButtonStyle.Success)
        
        const row = new ActionRowBuilder()
            .addComponents(confirm, cancel);
        
        await interaction.reply({content:`Are you sure you want to ban this member?`, components:[row]});

        const collectorFilter = i => i.user.id === interaction.user.id;

        try{
            const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000});

            if(confirmation.setCustomId === "confirmban"){
                await confirmation.update({content:`Banning ${target.username} for reason ${reason}`, components:[]})

                await interaction.guild.members.ban(target);
            }
            else if(confirmation.setCustomId = "cancelban"){
                await confirmation.update({content:`Cancelling operation.`, component:[]});
            }
        }
        catch (e){
            await interaction.editReply({content: `Confirmation not recieved, cancelling operation.`, components:[]});
        }
    }
}