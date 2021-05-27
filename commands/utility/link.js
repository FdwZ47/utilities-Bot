const Discord = require('discord.js');
const ms = require('ms');
module.exports = {
    name: 'link',
    aliases: ['se'],
    permissions: ["MANAGE_EMOJIS"],
    description: "this send emoji link",
    execute(client, message, args, Discord) {

        if (!args.length) return;

        for (const emojis of args) {
            const get = Discord.Util.parseEmoji(emojis);

            if (get.id) {
                const Ext = get.animated ? '.gif' : '.png'
                const URL = `https://cdn.discordapp.com/emojis/${get.id + Ext}`

                var emoji = new Discord.MessageEmbed() 
                .setDescription(`**Name:** ${get.name}\n[link](${URL}) `)
                .setImage(URL)
                .setColor('#0078FF')
                message.channel.send(emoji)
                
            }
        }
    }
}