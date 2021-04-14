const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: '2',
    aliases: [],
    permissions: ["MUTE_MEMBERS"],
    description: "this warn the member",
    execute(client, message, args, Discord) {

        const target = message.mentions.users.first() ||
        message.guild.members.cache.get(args[0])?.user;
        
        if (target) {
   //         let mainRole = message.guild.roles.cache.find(role => role.name === 'tester');
            let warnRole = message.guild.roles.cache.find(role => role.name === 'Warning 2');
        

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(warnRole.id);
                message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes:822217053863673856> Changed roles for <@${memberTarget.user.id}>, +Warning 2`) .setColor('#E30B5C'));
                return
            }
            memberTarget.roles.add(warnRole.id);
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<a:yes:822217053863673856> Changed roles for <@${memberTarget.user.id}>, +Warning 2 for **${ms(ms(args[1]))}**`) .setColor('#E30B5C'));

            setTimeout(function () {
                memberTarget.roles.remove(warnRole.id);
             //   message.channel.send(`**hi <@${memberTarget.user.id}> you have been succsessfully unmuted** <a:yes_1:823243336664088616>`);
            }, ms(args[1]));
        }// else {
           // message.channel.send('<:idk:822217580567592991> I can not find this member');
        //}
    }
}