const Discord = require('discord.js');
module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic'],
    permissions: ["ADMINISTRATOR"],
    description: 'Return a user(s) avatar picture!',
    
    execute(client, message, args) {

        if (!message.mentions.users.size) {
            return message.channel.send(new Discord.MessageEmbed() .setDescription(`[Your Avatar]${(message.author.displayAvatarURL)({ dynamic: true })}`));
        }

        const avatar_list = message.mentions.users.map(user => {
            return(new Discord.MessageEmbed() .setDescription(`**${user.username}**'s [Avatar link]${(user.displayAvatarURL)({ dynamic: true })}`));
        });

        message.channel.send(avatar_list);
    }
}