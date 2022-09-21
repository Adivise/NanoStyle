const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: ["role"], // Base Commands!
    description: "Role Commands!",
    options: [
        {
            name: "mention",
            description: "Mention a role",
            type: ApplicationCommandOptionType.Channel,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const args = interaction.options.getRole("mention");

        const embed = new EmbedBuilder()
            .setDescription(`
            ROLE: ${args}
            ROLE NAME: ${args.name}
            ROLE ID: ${args.id}
            `)
            .setColor(client.color)

        return interaction.reply({ embeds: [embed] });
    }
}
