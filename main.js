const {Client, Events, GatewayIntentBits, Collection} = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();


const client = new Client({intents: [GatewayIntentBits.Guilds]});

client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.on(Events.InteractionCreate, async interaction => {
    if(!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

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

client.once(Event.ClientReady, c => {
    console.log(`ready to log in as $(c.user.tag)`);
});

client.login(process.env.token, console.log("bot is online!"));