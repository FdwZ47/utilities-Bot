const Discord = require('discord.js');
module.exports = {
    name: 'unmute',
    aliases: ['un', 'تكلم'],
    permissions: ["MUTE_MEMBERS"],
    description: "this unmutes a member!",
    execute(client, message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'tester');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');

            if (
                message.member.roles.highest.position <=
                member.roles.highest.position
            )
            return message.channel.send(new Discord.MessageEmbed() .setTitle(`<:NO:828567406347419669> Unable to unmute ${user.username}!`) .setDescription(`<@${memberTarget.user.id}> has a higher or equal role than me which means **i can't do anything to him**`) .setColor('RED'));

            let memberTarget= message.guild.members.cache.get(target.id);
            
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${memberTarget.user.id}> **has been unmuted**`) .setColor('#93BFE6'));
        } else{
            message.channel.send('<:idk:822217580567592991> I cannot find that member!');
        }
    }
}