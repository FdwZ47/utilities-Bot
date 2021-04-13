const Discord = require('discord.js');
module.exports = {
    name: 'move',
    aliases: ['ve', "سحب"],
    permissions: ["MOVE_MEMBERS"],
    description: "this command move the members!",
    execute(client, message, args, Discord) {
        
        let target = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

//        const member = message.mentions.users.first() ||
  //      message.guild.members.cache.get(args[0])?.user;

        if(!member) return message.channel.send(new Discord.MessageEmbed() .setTitle('<:NO:828567406347419669> Invalid user') .setDescription('please make sure to mention a user after the command **DO NOT JUST USE THE ID**') .setColor('RED'));
        if(!member.voice.channel) return message.channel.send(new Discord.MessageEmbed() .setDescription('<:NO:828567406347419669> The member you mentioned is not in a voice channel') .setColor('RED'));

        if(!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed() .setDescription('you need to be in a voice channel to move this member') .setColor('RED'));
        member.voice.setChannel(message.member.voice.channel);
        message.channel.send(new Discord.MessageEmbed() .setTitle('<:success:821777867335008297> Done') .setDescription('this user has been moved to your voice channel') .setColor('#DDFAFF'));
    }
}