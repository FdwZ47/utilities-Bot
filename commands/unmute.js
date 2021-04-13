const Discord = require('discord.js');
module.exports = {
    name: 'unmute',
    aliases: ['un', 'تكلم'],
    permissions: ["ADMINISTRATOR"],
    description: "this unmutes a member!",
    execute(client, message, args, Discord){
        
        let target = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

//        const target = message.mentions.users.first() ||
  //      message.guild.members.cache.get(args[0])?.user;

        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'tester');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');

            let memberTarget= message.guild.members.cache.get(target.id);
            
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes_1:823243336664088616> <@${memberTarget.user.id}> **has been unmuted**`) .setColor('#93BFE6'));
        } else{
            message.channel.send('<:idk:822217580567592991> I cannot find this member');
        }
    }
}