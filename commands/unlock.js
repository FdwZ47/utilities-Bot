const { Channel } = require("discord.js")

module.exports = {
    name: 'lock',
    aliases: ['lo', 'قفل'],
    permissions: ["MANAGE_CHANNELS"],
    description: "this command loked channels",
    async execute(client, message, args){
        const role = message.guild.roles.get('768675517955309599')

        Channel.updateOverwrite(role, {
            SEND_MESSAGES: true
        });
        message.channel.send(`<#${channel.id}> has been locked`);
    }
}