const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    aliases: ['b', 'باند'],
    permissions: ["BAN_MEMBERS"],
    description: "this command bans a member!",
    execute(client, message, args){
        const member = message.mentions.users.first();

        if (
            message.member.roles.highest.position <=
            member.roles.highest.position
        )
        return message.channel.send(new Discord.MessageEmbed() .setTitle(`<:NO:828567406347419669> Unable to ban ${user.username}!`) .setDescription(`<@${memberTarget.user.id}> has a higher or equal role than me which means **i can't do anything to him**`) .setColor('RED'));

        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:ench_pick:822221894195216385> <@${memberTarget.user.id}> has been **banned from the server**`) .setColor('#4B93D5'));
        }else{
            message.channel.send('<:idk:822217580567592991> I Cannot find this member please make sure to mention user after the command');
        }
    }
}