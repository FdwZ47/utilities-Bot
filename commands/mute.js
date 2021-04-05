const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'mute',
    aliases: ['m', 'اسكت', 'اص'],
    permissions: ["MUTE_MEMBERS"],
    description: "this mutes a member!",
    execute(client, message, args) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'tester');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');
        
            if (
                message.member.roles.highest.position <=
                member.roles.highest.position
            )
            return message.channel.send(new Discord.MessageEmbed() .setTitle(`<:NO:828567406347419669> Unable to mute ${user.username}!`) .setDescription(`<@${memberTarget.user.id}> has a higher or equal role than me which means **i can't do anything to him**`) .setColor('RED'));


            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(muteRole.id);
                message.channel.send(new Discord.MessageEmbed() .setDescription(`<:pickaxe:821829362227347526> <@${memberTarget.user.id}> has been **muted**`) .setColor('#93BFE6'));
                return
            }
            memberTarget.roles.add(muteRole.id);
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<:pickaxe:821829362227347526> <@${memberTarget.user.id}> has been muted for **${ms(ms(args[1]))}**`) .setColor('#93BFE6'));

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`**hi <@${memberTarget.user.id}> you have been succsessfully unmuted** <a:yes_1:823243336664088616>`);
            }, ms(args[1]));
        } else {
            message.channel.send('<:idk:822217580567592991> I cannot find this member');
        }
    }
}