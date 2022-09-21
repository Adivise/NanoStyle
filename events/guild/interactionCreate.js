module.exports = async(client, interaction) => {
    if (interaction.isCommand || interaction.isContextMenuCommand || interaction.isModalSubmit || interaction.isChatInputCommand) {
        if (!interaction.guild) return;

        let subCommandName = "";
        try {
          subCommandName = interaction.options.getSubcommand();
        } catch { };
        let subCommandGroupName = "";
        try {
          subCommandGroupName = interaction.options.getSubcommandGroup();
        } catch { };
    
        const command = client.slash.find(command => {
          switch (command.name.length) {
            case 1: return command.name[0] == interaction.commandName;
            case 2: return command.name[0] == interaction.commandName && command.name[1] == subCommandName;
            case 3: return command.name[0] == interaction.commandName && command.name[1] == subCommandGroupName && command.name[2] == subCommandName;
          }
        });
    
        if (!command) return;
        if (!client.dev.includes(interaction.user.id) && client.dev.length > 0) { 
            interaction.reply(`The bot is under maintenance. (Please come back again later)`); 
            console.log(`[COMMAND] ${interaction.user.tag} trying request the command from ${interaction.guild.name} (${interaction.guild.id})`); 
            return;
        }

        const msg_cmd = [
          `[COMMAND] ${command.name[0]}`,
          `${command.name[1] || ""}`,
          `${command.name[2] || ""}`,
          `used by ${interaction.user.tag} from ${interaction.guild.name} (${interaction.guild.id})`,
        ]

        console.log(`${msg_cmd.join(" ")}`);

    if (command) {
        try {
            command.run(client, interaction);
        } catch (error) {
            console.log(error)
            await interaction.reply({ content: `Something went wrong!`, ephmeral: true });
        }}
    }
}