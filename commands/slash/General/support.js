const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "support", // Name of command
    description: "Join our support server", // Command description
    type: 1, // Command type
    options: [], // Command options
    permissions: { // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "SendMessages" // User permissions needed
    },
    run: async (client, interaction) => {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                 .setTitle("🤍 To get help join our Support Server!")
                 .setDescription(" 📬 **Support** \n\n https://dsc.gg/lucio ")
                 .setColor("Purple")
                 .setImage('https://cdn.discordapp.com/attachments/971071562692321343/1054834335867473990/standard_5.gif')
            ],
            ephermal: true
        })

    },
    
};