const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "sendchannelpricing", // Name of command
    description: "Admin Command", // Command description
    type: 1, // Command type
    options: [], // Command options
    permissions: { // Client permissions needed
        DEFAULT_MEMBER_PERMISSIONS: "Administrator" // User permissions needed
    },
    run: async (client, interaction) => {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                 .setTitle("🤍 Our Pricing 🤍")
                 .setDescription("📜 __Fürs erste bevor ihr eine Transaktion führt, empfehlen wir die [Nutzungsbedingungen](https://luciowest.cf/terms.html) zu lesen!__ \n\n 💛 **Tier I - 1,99$** \n - Premium Features \n - Exklusive Inhalte auf dem Discord ")
                 .setColor("Purple")
                 .setImage('https://cdn.discordapp.com/attachments/971071562692321343/1055865050402930738/standard_6.gif')
            ],
            ephermal: true
        })

    },
    
};