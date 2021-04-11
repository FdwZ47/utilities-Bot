const Discord = require('discord.js');
module.exports = {
    name: '-1',
    aliases: [],
    permissions: ["MUTE_MEMBERS"],
    description: "this warn the member",
    execute(client, message, args, Discord){
        const target = message.mentions.users.first();
        if(target){
       //     let mainRole = message.guild.roles.cache.find(role => role.name === 'tester');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Warning 1');

            let memberTarget= message.guild.members.cache.get(target.id);
            
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes:822217053863673856> Changed roles for ${user.username}, -Warning 1`) .setColor('#93BFE6'));
        } else{
            message.channel.send('<:idk:822217580567592991> I cannot find this member');
        }
    }
}