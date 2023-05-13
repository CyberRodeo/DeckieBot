
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
