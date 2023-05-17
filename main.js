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

const eventPath = path.join(__dirname, 'events');
const eventfiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));



client.login(process.env.token, console.log("bot is online!"));