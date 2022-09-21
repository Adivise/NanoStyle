const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = { 
    name: ["Context | Message"],
    type: ApplicationCommandType.Message,
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });

        const args = (interaction.channel.messages.cache.get(interaction.targetId).content ?? await interaction.channel.messages.fetch(interaction.targetId));

        const embed = new EmbedBuilder()
            .setDescription(`I Copy you message: ${args}`)
            .setColor(client.color)

        return interaction.reply({ embeds: [embed] });
    }
}