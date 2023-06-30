
//  Code used to read the files under the command folders. not used cause the commands are now in subfolders!

//  client.commands = new Collection()

//  const commandsPath = path.join(__dirname, 'commands');
//  const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

//  for(const file of commandsFiles){
//      const filePath = path.join(commandsFiles, file);
//      const command = require(filePath)

//      if('data' in command && 'execute' in  command){
//          client.commands.set(command.data.name, command)
//      } 
//      else{
//          console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property`)
//      }




// client.on(Events.InteractionCreate, interaction => {
//     if(!interaction.isChatInputCommand()) return;
//     console.log(interaction);
// });


// client.once(Event.ClientReady, c => {
//     console.log(`ready to log in as $(c.user.tag)`);
// });

  

// client.on(Events.InteractionCreate, async interaction => {
//     if(!interaction.isChatInputCommand()) return;

//     const command = interaction.client.commands.get(interaction.commandName);

//     if (!command){
//         console.error(`No command was found matching ${interaction.commandName}`);
//         return;
//     } 

//     try{
//         await command.execute(interaction);
//     } catch(error){
//         if(interaction.replied || interaction.deferred){
//             await interaction.followUp({content: 'There was an error executing this command!', ephemeral : True});
//         }
//         else {
//             await interaction.reply({content: 'There was an error executing this command!', ephemeral: True});
//         }
//     }
// });


 


// const eventPath = path.join(__dirname, 'events');
// const eventfiles = fs.readdirSync(eventPath).filter(file => file.endsWith('.js'));

// for(const file of eventfiles){
// 	const filePath = path.join(eventPath, file );
// 	const event = require(filePath); 

// 	if(event.once){
// 		client.once(event.name, (...args) => event.execute(...args));
// 	}
// 	else{
// 		client.on(event.name, (...args) => event.execute(...args));
// 	}
// }




// const { SlashCommandBuilder } = require('discord.js');

// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('deferReply')
//         .setDescription('command which takes more than 4 secs to execute!'),

//     async execute(intercation){
//         await intercation.reply("checking testing....");
//     }
// }




// const { SlashCommandBuilder } = require("discord.js");

// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('bot ping')
//         .setDescription('tells the ping of the bot!'),
    
//         async execute(interaction){
//             await interaction.reply(`Websocket heartbeat: ${client.ws.ping}ms.`);
//         }
// }

