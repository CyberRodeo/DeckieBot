const { Events } = require("discord.js");

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction){
        if(!interaction.isChatInputCommand()) return;

        const command = interaction.client.command.get(interaction.commandName);

        if(!command){
            console.log(`No command matching ${interaction.commandName} was found`);
        }

         try{
            await command.execute(interaction);
         }
         catch(error){
            console.error(`Error executing ${intertaction.commandName}`);
            console.error(error);   
         };
    }
};