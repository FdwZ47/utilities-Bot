const Discord = require('discord.js');
module.exports = {
    name: 'members',
    aliases: ['count'],
    permissions: ["MUTE_MEMBERS"],
    description: "this command send the members count ",
    async execute(client, message, args, Discord) {

        message.channel.send(`members count is \`${message.member.guild.memberCount}\``)
    }
}