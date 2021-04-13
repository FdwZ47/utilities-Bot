const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'mute',
    aliases: ['m', 'اسكت', 'اص'],
    permissions: ["ADMINISTRATOR"],
    description: "this mutes a member!",
    execute(client, message, args, Discord) {
        
        let target = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0]) || message.member;

//        const target = message.mentions.users.first() ||
//        message.guild.members.cache.get(args[0])?.user;

        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'tester');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'T!MUTED');
        

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
           //     message.channel.send(`**hi <@${memberTarget.user.id}> you have been succsessfully unmuted** <a:yes_1:823243336664088616>`);
            }, ms(args[1]));
        } else {
            message.channel.send('<:idk:822217580567592991> I cannot find this member');
        }
    }
}