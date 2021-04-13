const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    aliases: ['b', 'باند'],
    permissions: ["BAN_MEMBERS"],
    description: "this command bans a member!",
    execute(client, message, args, Discord){
        
        const member = message.mentions.users.first() ||
        message.guild.members.cache.get(args[0])?.user;

        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:ench_pick:822221894195216385> <@${memberTarget.user.id}> has been **banned from the server**`) .setColor('#4B93D5'));
        }else{
            message.channel.send('<:idk:822217580567592991> I Cannot find this member please make sure to mention user after the command');
        }
    }
}