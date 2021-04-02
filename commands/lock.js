const Discord = require('discord.js');
module.exports = {
    name: 'lock',
    aliases: ['close', 'قفل'],
    permissions: ["MANAGE_CHANNELS"],
    description: "this command locked channels!",
    async execute(client, message, args) {

        let msg = await message.channel.send("one second")

        try {
            message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: false,
            })
            msg.edit("channel locked")
    
        }catch(e) {
            console.log(e)
        }
    }
}