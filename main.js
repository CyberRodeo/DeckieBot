const {Client, Events, GatewayIntentBits, Collection} = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();


const client = new Client({intents: [GatewayIntentBits.Guilds]});


// Code used to read the files under the command folders. not used cause the commands are now in subfolders!

// client.commands = new Collection()

// const commandsPath = path.join(__dirname, 'commands');
// const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// for(const file of commandsFiles){
//     const filePath = path.join(commandsFiles, file);
//     const command = require(filePath)

//     if('data' in command && 'execute' in  command){
//         client.commands.set(command.data.name, command)
//     } 
//     else{
//         console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property`)
//     }
// }

client.commands = new Collection();
const folderPaths = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(folderPaths);

for(const folder of commandFolders){
    const commandPath = path.join(folderPaths, folder);
    const commandFiles = fr.readdirsync(commandsPath).filer(file => file.endswith('.js'));
    
    for(const file of commandFiles){
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if('data' in command && 'execute' in command){
            client.commands.set(command.set.name, command);
        }
        else {
            console.log(`[WARNING!] the command ${filePath} is missing 'data' or 'execute' property`)
        }
    }
}



client.on(Events.InteractionCreate, interaction => {
    if(!interaction.isChatInputCommand()) return;
    console.log(interaction);
});

client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return;

    const command = interaction.client.command.get(interaction.commandName);

    if (!command){
        console.error(`No command was found matching ${interaction.commandName}`);
        return;
    } 

    try{
        await command.execute(interaction);
    } catch(error){
        if(interaction.replied || interaction.deferred){
            await interaction.followUp({content: 'There was an error executing this command!', ephemeral : True});
        }
        else {
            await interaction.reply({content: 'There was an error executing this command!', ephemeral: True});
        }
    }
});

// client.once(Event.ClientReady, c => {
//     console.log(`ready to log in as $(c.user.tag)`);
// });

client.login(process.env.token, console.log("bot is online!"));