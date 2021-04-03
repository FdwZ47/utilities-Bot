const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['pfp', 'صور', 'v'],
    permissions: ["USE_EXTERNAL_EMOJIS"],
    description: "this command give you your avatar(profile icon)",
    execute(client, message, args) {
        if (message.channel.id !== '798664931359719485') return;
        if (args[0]) {
            const user = message.mentions.users.first();
            if (!user) return message.channel.send('please make sure to mention the user after command **don t Just use ID**');


            return message.channel.send(new Discord.MessageEmbed() .setTitle(`${user.username}'s avatar`) .setDescription(`[Avatar link](${user.avatarURL()})`) .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 })) .setColor('#8FA0EA') .setFooter('Developer Tanya#0762', 'https://cdn.discordapp.com/attachments/827127242005020702/827859841556021268/fe0a875a5bf15e0bdb47e8691504778c.jpg'));
        }
       

        return message.channel.send(new Discord.MessageEmbed() .setTitle(`${message.author.username}'s avatar`) .setDescription(`[Avatar link](${message.author.avatarURL()})`) .setImage(message.author.displayAvatarURL({ dynamic: true, size: 2048 })) .setColor('#8FA0EA') .setFooter('Developer Tanya#0762', 'https://cdn.discordapp.com/attachments/827127242005020702/827859841556021268/fe0a875a5bf15e0bdb47e8691504778c.jpg'));
    }
}