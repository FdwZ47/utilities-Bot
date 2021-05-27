const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: '1',
    aliases: [],
    permissions: ["MUTE_MEMBERS"],
    description: "this warn the member",
    execute(client, message, args, Discord) {
        
        const target = message.mentions.users.first() ||
        message.guild.members.cache.get(args[0])?.user;

        if (target) {
   //         let mainRole = message.guild.roles.cache.find(role => role.name === 'tester');
            let warnRole = message.guild.roles.cache.find(role => role.name === 'Warning 1');
        

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.add(warnRole.id);
                message.channel.send(new Discord.MessageEmbed() .setDescription(`<@${memberTarget.id}> has been **warned** **|** \`${memberTarget.id}\``) .setColor('#E3A781'));
                message.delete();
                return
            }
            memberTarget.roles.add(warnRole.id);
            message.channel.send(new Discord.MessageEmbed() .setDescription(`<@${memberTarget.id}> has been **warned** **|** \`${memberTarget.id}\` **|** for **${ms(ms(args[1]))}**`) .setColor('#E3A781'));
            message.delete();
            setTimeout(function () {
                memberTarget.roles.remove(warnRole.id);
             
            }, ms(args[1]));
        }
       
        message.delete().catch(error => {
            if (error.code !== 10008) {
                console.error('failed to delete the message', error);
            }
        });
    }
}