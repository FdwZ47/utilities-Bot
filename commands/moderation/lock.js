const Discord = require('discord.js');
module.exports = {
    name: 'lock',
    aliases: ['close', 'قفل'],
    permissions: ["MANAGE_CHANNELS"],
    description: "this command locked channels!",
    async execute(client, message, args, Discord) {

       // let msg = await message.channel.send("<:gears:819943211530977350> just a second")

       const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]) || message.channel

        try {
            channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == '@everyone'), {
                SEND_MESSAGES: false,
            })
            message.channel.send(`:closed_lock_with_key: ${channel} has been Locked`)
    
        }catch(e) {
            console.log(e)
        }
    }
}