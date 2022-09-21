const { EmbedBuilder, ApplicationCommandOptionType } = require("discord.js");

module.exports = {
    name: ["integer"], // Base Commands!
    description: "Integer Commands!",
    options: [
        {
            name: "number",
            description: "String message",
            type: ApplicationCommandOptionType.Integer,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const args = interaction.options.getInteger("number");

        const embed = new EmbedBuilder()
            .setDescription(`${args}`)
            .setColor(client.color)

        return interaction.reply({ embeds: [embed] });
    }
}
