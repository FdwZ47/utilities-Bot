const Discord = require('discord.js');
module.exports = {
    name: 'hide',
    aliases: ['hi'],
    permissions: ["MANAGE_CHANNELS"],
    description: "this command hide the channel!",
    async execute(client, message, args, Discord) {
        let msg = await message.channel.send("<:gears:819943211530977350> just a second")

        try {
            message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == "@everyone"), {
                VIEW_CHANNEL: false,
            })
            msg.edit("<a:yes_1:823243336664088616> channel has been **hide**")
        }catch(e) {
            console.log(e)
        }
    }
}