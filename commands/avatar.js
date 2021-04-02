const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['pfp', 'صور', 'v'],
    permissions: ["USE_EXTERNAL_EMOJIS"],
    description: "this command give you your avatar(profile icon)",
    execute(client, message, args){
        if (message.channel.id !=='827127242005020702') return;
        if (args[0]) {
            const user = message.mentions.users.first();
            if (!user) return message.channel.send('please make sure to mention the user after command **don t Just use ID**');

            const otherIconEmbed = new Discord.MessageEmbed()
            .setTitle(`${user.username}'s avatar`)
            .setDescription(user.displayAvatarURL);

            return message.channel.send(otherIconEmbed).catch(err => console.log(err));
        }

        const myIconEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}'s avatar`)
        .setDescription(message.author.displayAvatarURL);

        return message.channel.send(myIconEmbed).catch(err => console.log(err));
    }
}