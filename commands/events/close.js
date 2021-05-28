const Discord = require('discord.js');
module.exports = {
    name: 'close',
    aliases: [],
    permissions: ["SEND_TTS_MESSAGES"],
    description: "this command locked channels!",
    async execute(client, message, args, Discord) {

       // let msg = await message.channel.send("<:gears:819943211530977350> just a second")

       if (message.channel.id !== '847829294717993020') return

       const channel = message.channel;

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