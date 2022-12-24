const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "sendchannelrules", // Name of command
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
                 .setTitle("𝕽𝖊𝖌𝖊𝖑𝖓 - 𝕽𝖚𝖑𝖊𝖘 ")
                 .setDescription("**§1 - Allgemein** \n Im Allgemeinen solltest du ein freundliches und respektvolles auftreten zeigen! \n **§2 - Gesetze** \n Auf dem gesamten Discord gelten die Deutschen Gesetze und die Discord Terms. Diese findet man im Internet. \n **§3 - Diskriminierung** \n Das Beleidigen, Mobben, Hetzen von Nutzer aus anderer Herkunft, Glaube oder Hautfarbe ist strengstes Untersagt!\n **§4 - Beleidigungen** \n Beleidigungen sind in allen Arten verboten und werden mit einem Warn bestraft. Hierbei spielt die Ernsthaftigkeit dieser keine Rolle. \n **§5 - Benehmen in Channels** \n In allen Channeln des Servers sollte ein neutrales und freundliches Gesprächsthema herrschen. Spam / Massentexte werden mit einem Warn bestraft. \n **§6 - Streitigkeiten** \n Alle Art von Streitigkeiten im Ausmaße weniger als 10 Personen soll im Privaten Chat geklärt werden. Teammitglieder bestrafen User mit einem Warn, wenn diese der Aufforderung zum klären des Streites nicht nachkommen. \n **§7 - Trolling** \n Jede Art von Trolling wird je nach Ausmaß mit einem Warn oder Ban bestraft. Dazu zählt beispielsweise Channel Hopping, Selfrole Fake, Earrape etc. \n **§8 - Werbung** \n Jede Art von Werbung (Social Media, Invites etc.) ist untersagt, mit Ausnahme vom Status und der persönlichen Beschreibung. \n **§9 - Ban Umgehung** \n Es ist untersagt eine Strafe wie Ban oder Mute zu Umgehen in dem man z. B. eine VPN und/oder einen 2. Account verwendet. Dies wird mit einem Ban bestraft. \n **§10 - NSFW** \n Da dieser Server Großteils minderjährige Mitglieder hat, ist alle Art von NSFW (NotSafeForWork) untersagt. Dazu zählen Profilbild, Status, Nachrichten, Medien usw. \n **§11 - Aufforderungen des Teams** \n Den Aufforderungen eines Teammitglieds ist stets zu folgen. Die Entscheidungen eines Teammitglieds müssen akzeptiert werden. Das höher gestellte Team darf Gebrauch vom Hausrecht machen und damit ohne angegebenen Grund handeln. \n **12 - Private Daten** \n Es ist strengstens Verboten Daten wie Passwörter, Wohnorte etc. zu veröffentlichen. Der Server nimmt sich das Recht Nutzerdaten wie Profilbild, Nickname, Rol \n")
                 .setColor("Purple")
                 .setImage('https://cdn.discordapp.com/attachments/971071562692321343/1054834335867473990/standard_5.gif')
            ],
            ephermal: false
        })

    },
    
};