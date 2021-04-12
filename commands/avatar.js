const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['pfp', 'صور', 'v'],
    permissions: ["USE_EXTERNAL_EMOJIS"],
    description: "this command give you your avatar(profile icon)",
    execute(client, message, args, Discord) {

        const bot = new Discord.MessageEmbed()
        .setDescription('You can only use this command in <#798664931359719485>')
        .setColor('#9D6D55')
        if (message.channel.id !== '798664931359719485') return message.channel.send(bot) 
    
        if (args[0]) {
            const user = message.mentions.users.first() ||
            message.guild.members.cache.get(args[0])?.user;
            
            if (!user) return message.channel.send(new Discord.MessageEmbed() .setDescription('Please make sure to specific a user and make sure he is the server') .setColor('RED'));


            return message.channel.send(new Discord.MessageEmbed() .setTitle(`${user.username}'s avatar`) .setDescription(`[Avatar link](${user.avatarURL()})`) .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 })) .setColor('#8FA0EA'));
            //.setFooter('Developer Tanya#0762', 'https://cdn.discordapp.com/avatars/755767643331362916/a_e320b75321aad33243239820f4b92c97.gif?size=256&f=.gif')
        }
       

        return message.channel.send(new Discord.MessageEmbed() .setTitle(`${message.author.username}'s avatar`) .setDescription(`[Avatar link](${message.author.avatarURL()})`) .setImage(message.author.displayAvatarURL({ dynamic: true, size: 2048 })) .setColor('#8FA0EA')); 
        //.setFooter('Developer Tanya#0762', 'https://cdn.discordapp.com/avatars/755767643331362916/a_e320b75321aad33243239820f4b92c97.gif?size=256&f=.gif')
    }
}