const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: ["channel"], // Base Commands!
    description: "Channel Commands!",
    options: [
        {
            name: "target",
            description: "Mention channel",
            type: ApplicationCommandOptionType.Channel,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const args = interaction.options.getChannel("target");

        const embed = new EmbedBuilder()
            .setDescription(`
            CHANNEL: ${args} 
            CHANNEL NAME: ${args.name} 
            CHANNEL ID: ${args.id}
            `)
            .setColor(client.color)

        return interaction.reply({ embeds: [embed] });
    }
}
