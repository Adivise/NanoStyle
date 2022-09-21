const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: ["base-command", "sub-group-command", "sub-command"], // Base Commands! // SubGroup Commands! // Sub Commands!
    description: "SubGroup Commands!",
    run: async (client, interaction) => {
        const embed = new EmbedBuilder()
            .setDescription(`THIS IS SUB GROUP COMMAND!`)
            .setColor(client.color)

        return interaction.reply({ embeds: [embed] });
    }
}
