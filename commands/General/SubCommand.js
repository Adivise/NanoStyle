const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: ["base-command", "sub-command"], // Base Commands! // Sub Commands!
    description: "Sub Commands!",
    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setDescription(`THIS IS SUB COMMAND!`)
            .setColor(client.color)

        return interaction.reply({ embeds: [embed] });
    }
}
