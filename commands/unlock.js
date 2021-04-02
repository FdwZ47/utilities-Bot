const Discord = require('discord.js');
module.exports = {
    name: 'unlock',
    aliases: ['open', 'فتح'],
    permissions: ["MANAGE_CHANNELS"],
    description: "this command locked channel!",
    async execute(client, message, args) {
        let msg = await message.channel.send("<:gears:819943211530977350> just a second")

        try {
            message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                SEND_MESSAGES: true,
            })
            msg.edit("<a:yes_1:823243336664088616> channel has been succsesfully **unlocked**")
        }catch(e) {
            console.log(e)
        }
    }
}