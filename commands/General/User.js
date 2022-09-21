const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: ["user"], // Base Commands!
    description: "User Commands!",
    options: [
        {
            name: "target",
            description: "Mention user",
            type: ApplicationCommandOptionType.User,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const args = interaction.options.getUser("target");

        const embed = new EmbedBuilder()
            .setDescription(`
            USER: ${args}
            USER NAME: ${args.username}
            USER ID: ${args.id}
            `)
            .setColor(client.color)

        return interaction.reply({ embeds: [embed] });
    }
}
