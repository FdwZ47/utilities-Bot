const Discord = require('discord.js');
module.exports = {
    name: '-3',
    aliases: [],
    permissions: ["ADMINISTRATOR"],
    description: "this warn the member",
    execute(client, message, args, Discord){
        
        const target = message.mentions.users.first() ||
        message.guild.members.cache.get(args[0])?.user;

        if(target){
       //     let mainRole = message.guild.roles.cache.find(role => role.name === 'tester');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Warning 3');

            let memberTarget= message.guild.members.cache.get(target.id);
            
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes:822217053863673856> Changed roles for <@${memberTarget.user.id}>, -Warning 3`) .setColor('#93BFE6'));
            message.delete();
        } //else{
            //message.channel.send('<:idk:822217580567592991> I cannot find this member');
    //    }
    message.delete();
    }
}