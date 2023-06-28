const {Client, Events, GatewayIntentBits, Collection, ActivityType} = require("discord.js");
const fs = require("node:fs");
const path = require("node:path");
require("dotenv").config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// client.user.setActivity('Commands', {type: ActivityType.Listening});


client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

const wait = require('node:timers/promises').setTimeout;

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
   	else if (interaction.commandName === 'deferreply') {
		await interaction.deferReply({ephemeral: true});
		await wait(4000);
		await interaction.editReply('4 secs have been passed!');
	} else if(interaction.commandName === 'botping'){
        await interaction.reply(`Websocket heartbeat: ${client.ws.ping}ms.`);
    } else if (interaction.commandName === 'followups') {
		await interaction.reply('pong');
		await interaction.followUp('pong again!');
	} else if (interaction.commandName === 'gf') {
		await interaction.reply('you suck!');
		await wait(2000);
		await interaction.editReply('naah i love you :)');
		await wait(2000);
		await interaction.editReply('i lied lol XD');
		await wait(2000);
		await interaction.editReply('i am kidding HAHAHA, i love you so much!');
	} else if (interaction.isAutocomplete()){
        const command = interaction.client.command.Get(interaction.commandName);

        if(!command){
            console.error(`No commands matching ${interaction.commandName} was found.`);
            return;
        }
         
        try{
            await interaction.autoComplete(interaction);
        } catch(error) {
            console.error(error);
        }
    } else if(interaction.commandName === 'message'){
        try{
            const msg = interaction.options.getString('msg');
            client.users.send('741246280109522984', msg);
            // await interaction.reply(msg);
            await interaction.reply({content:"Thanks for your report, we'll take a look at it soon!", ephemeral: true});
        } catch(error){
            await interaction.reply(`Can't DM that user, sorry :(`)
            // await interaction.followUp(error);
        }
        
    }

});





client.login(process.env.token, console.log("The bot is Online!"));










