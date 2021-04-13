const Discord = require('discord.js');
module.exports = {
    name: 'ban',
    aliases: ['b', 'باند'],
    permissions: ["BAN_MEMBERS"],
    description: "this command bans a member!",
    execute(client, message, args, Discord){
        let member = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

//        const member = message.mentions.users.first();

        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:ench_pick:822221894195216385> <@${memberTarget.user.id}> has been **banned from the server**`) .setColor('#4B93D5'));
        }else{
            message.channel.send('<:idk:822217580567592991> I Cannot find this member please make sure to mention user after the command');
        }
    }
}