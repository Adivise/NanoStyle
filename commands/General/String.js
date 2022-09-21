const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: ["string"], // Base Commands!
    description: "String Commands!",
    options: [
        {
            name: "message",
            description: "String message",
            type: ApplicationCommandOptionType.String,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const args = interaction.options.getString("message");

        const embed = new EmbedBuilder()
            .setDescription(`${args}`)
            .setColor(client.color)

        return interaction.reply({ embeds: [embed] });
    }
}
