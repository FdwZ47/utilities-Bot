const Discord = require('discord.js');
module.exports = {
    name: 'unlock',
    aliases: ['open', 'فتح'],
    permissions: ["MANAGE_CHANNELS"],
    description: "this command locked channel!",
    async execute(client, message, args) {
        let msg = await message.channel.send("channel has been unlocked")

        try {
            message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: true,
            })
            msg.edit("channel unlocked")
        }catch(e) {
            console.log(e)
        }
    }
}