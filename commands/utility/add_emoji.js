const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'emoji',
    aliases: [],
    permissions: ["MANAGE_EMOJIS"],
    description: "this warn the member",
    execute(client, message, args, Discord) {

        if (!args.length) return;

        for (const emojis of args) {
            const get = Discord.Util.parseEmoji(emojis);

            if (get.id) {
                const Ext = get.animated ? '.gif' : '.png'
                const URL = `https://cdn.discordapp.com/emojis/${get.id + Ext}`

                message.guild.emojis
                .create(URL, get.name)
                .then((emoji) => 
                message.channel.send(`**[ ${emoji} ]** has been **added**, with name: **${emoji.name}**`)
                )
            }
        }
    }
}