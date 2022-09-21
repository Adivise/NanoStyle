const { EmbedBuilder, ApplicationCommandType } = require('discord.js');

module.exports = { 
    name: ["Context | User"],
    type: ApplicationCommandType.User,
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });

        const args0 = interaction.guild.members.cache.get(interaction.targetId) || interaction.member;
        const args1 = client.users.cache.get(interaction.targetId) || interaction.user;

        const embed = new EmbedBuilder()
            .setDescription(`I Pinging: ${args0} | Who are you? ${args1}`)
            .setColor(client.color)

        return interaction.reply({ embeds: [embed] });
    }
}