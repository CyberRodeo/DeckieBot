// const { SlashCommandBuilder } = require('discord.js');

// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('deferReply')
//         .setDescription('command which takes more than 4 secs to execute!'),

//     async execute(intercation){
//         await intercation.reply("checking testing....");
//     }
// }


const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('deferreply')
		.setDescription('takes more than 4 secs to respond!'),
	async execute(interaction) {
		
	}
};