const Discord = require('discord.js');
module.exports = {
    name: 'move',
    aliases: ['v', "سحب"],
    permissions: ["MOVE_MEMBERS"],
    description: "this command move the members!",
    async execute(client, message, args, Discord) {
        const member = message.mentions.members.first();
        if(!member) return message.channel.send(new Discord.MessageEmbed() .setTitle('<:NO:828567406347419669> Invalid user') .setDescription('please make sure to mention a user after the command **DO NOT JUST USE THE ID**') .setColor('RED'));
        if(!member.voice.channel) return message.channel.send(new Discord.MessageEmbed() .setDescription('<:NO:828567406347419669> The member you mentioned is not in a voice channel') .setColor('RED'));

        if(!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed() .setDescription('you need to be in a voice channel to move this member') .setColor('RED'));
        member.voice.setChannel(message.member.voice.channel);
        message.channel.send(new Discord.MessageEmbed() .setTitle(`<:success:821777867335008297> Done`) .setDescription(`<@${memberTarget.user.id}> has been moved to your voice channel`) .setColor('#DDFAFF'));
    }
}